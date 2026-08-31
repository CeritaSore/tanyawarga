<?php

use Inertia\Testing\AssertableInertia as Assert;

test('the application returns a successful response and renders Welcome component', function () {
    $response = $this->get('/');

    $response->assertStatus(200);
    $response->assertInertia(fn (Assert $page) => $page
        ->component('Welcome')
        ->has('appName')
        ->has('laravelVersion')
        ->has('phpVersion')
    );
});

test('the application renders LaporanWarga component on /laporanwarga route', function () {
    $response = $this->get('/laporanwarga');

    $response->assertStatus(200);
    $response->assertInertia(fn (Assert $page) => $page
        ->component('LaporanWarga')
        ->has('appName')
    );
});

test('the application renders Dashboard component on /dashboard route', function () {
    $response = $this->get('/dashboard');

    $response->assertStatus(200);
    $response->assertInertia(fn (Assert $page) => $page
        ->component('Dashboard')
        ->has('appName')
    );
});

test('the application renders Login component on /login route', function () {
    $response = $this->get('/login');

    $response->assertStatus(200);
    $response->assertInertia(fn (Assert $page) => $page
        ->component('Login')
        ->has('appName')
    );
});
