<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'appName' => config('app.name', 'TanyaWarga'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

Route::get('/laporanwarga', function () {
    return Inertia::render('LaporanWarga', [
        'appName' => config('app.name', 'TanyaWarga'),
    ]);
})->name('laporan.index');

Route::get('/login', function () {
    return Inertia::render('Login', [
        'appName' => config('app.name', 'TanyaWarga'),
    ]);
})->name('login');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard', [
        'appName' => config('app.name', 'TanyaWarga'),
    ]);
})->name('dashboard');
