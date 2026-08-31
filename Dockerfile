# ==========================================
# Stage 1: Frontend Asset Builder
# ==========================================
FROM node:22-alpine AS frontend-builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY vite.config.js ./
COPY resources/ ./resources/
COPY public/ ./public/

RUN npm run build

# ==========================================
# Stage 2: Production PHP + Nginx Runtime
# ==========================================
FROM php:8.5-fpm-alpine AS runner

# Install system dependencies and Nginx
RUN apk add --no-cache \
    nginx \
    curl \
    git \
    unzip \
    libzip-dev \
    libpng-dev \
    libjpeg-turbo-dev \
    freetype-dev \
    oniguruma-dev \
    icu-dev \
    sqlite-dev \
    libpq-dev \
    postgresql-dev

# Install PHP extensions required by Laravel
RUN docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) \
        bcmath \
        gd \
        intl \
        mbstring \
        opcache \
        pcntl \
        pdo \
        pdo_mysql \
        pdo_pgsql \
        pdo_sqlite \
        zip

# Set Composer environment
ENV COMPOSER_ALLOW_SUPERUSER=1

# Copy Composer binary
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Copy custom configurations
COPY docker/nginx.conf /etc/nginx/nginx.conf
COPY docker/php.ini /usr/local/etc/php/conf.d/custom.ini
COPY docker/entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

WORKDIR /var/www/html

# Copy application files
COPY . /var/www/html

# Copy compiled frontend assets from Stage 1
COPY --from=frontend-builder /app/public/build /var/www/html/public/build

# Ensure framework directories exist with proper permissions before install
RUN mkdir -p /var/www/html/storage/framework/cache \
    && mkdir -p /var/www/html/storage/framework/sessions \
    && mkdir -p /var/www/html/storage/framework/views \
    && mkdir -p /var/www/html/storage/logs \
    && mkdir -p /var/www/html/bootstrap/cache \
    && chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

# Install production PHP dependencies without running artisan scripts during build time
RUN composer install --no-dev --optimize-autoloader --no-interaction --no-progress --no-scripts

# Set ownership and permissions for web user
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

EXPOSE 80 10000

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
