<?php

namespace App\Providers;

use Illuminate\Support\Facades\URL;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Detect Render.com environment or production mode
        $isRender = env('RENDER') === 'true' || env('RENDER_SERVICE_ID') !== null;
        $isProduction = app()->isProduction() || config('app.env') === 'production';
        $appUrl = (string) config('app.url');
        $renderExternalUrl = env('RENDER_EXTERNAL_URL');

        // Dynamically resolve URL if running on Render and APP_URL is default/unset
        if ($isRender && ! empty($renderExternalUrl) && (empty($appUrl) || $appUrl === 'http://localhost')) {
            config(['app.url' => $renderExternalUrl]);
            URL::forceRootUrl($renderExternalUrl);
        }

        // Force HTTPS in production, on Render, or when APP_URL uses HTTPS
        if ($isProduction || $isRender || str_starts_with($appUrl, 'https://') || ! empty($renderExternalUrl)) {
            URL::forceScheme('https');
        }
    }
}
