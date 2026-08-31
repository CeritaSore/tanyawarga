#!/bin/sh
set -e

PORT_NUMBER="${PORT:-80}"
echo "Configuring Nginx to listen on port: $PORT_NUMBER"
sed -i "s/__PORT__/$PORT_NUMBER/g" /etc/nginx/nginx.conf

# Ensure storage and bootstrap cache directories exist and have proper permissions
mkdir -p /var/www/html/storage/framework/cache
mkdir -p /var/www/html/storage/framework/sessions
mkdir -p /var/www/html/storage/framework/views
mkdir -p /var/www/html/storage/logs
mkdir -p /var/www/html/bootstrap/cache
chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache
chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# If using SQLite and file does not exist, create it
if [ "${DB_CONNECTION:-sqlite}" = "sqlite" ]; then
    DB_FILE="${DB_DATABASE:-/var/www/html/database/database.sqlite}"
    mkdir -p "$(dirname "$DB_FILE")"
    if [ ! -f "$DB_FILE" ]; then
        echo "Creating SQLite database file at $DB_FILE..."
        touch "$DB_FILE"
    fi
    chmod -R 775 "$(dirname "$DB_FILE")"
    chown -R www-data:www-data "$(dirname "$DB_FILE")"
fi

# Run package discovery now that runtime environment variables are loaded
echo "Discovering Laravel packages..."
php artisan package:discover --ansi || true

# Cache configurations & routes if APP_KEY is provided
if [ -n "$APP_KEY" ]; then
    echo "Caching configuration, routes, and views..."
    php artisan config:cache || true
    php artisan route:cache || true
    php artisan view:cache || true

    echo "Running database migrations..."
    php artisan migrate --force || true
else
    echo "WARNING: APP_KEY is not set. Please set APP_KEY in Render environment variables."
fi

echo "Starting PHP-FPM..."
php-fpm -D

echo "Starting Nginx on port $PORT_NUMBER..."
exec nginx -g "daemon off;"
