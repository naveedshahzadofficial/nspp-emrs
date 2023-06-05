<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      <title inertia>{{ config('app.name', 'EMRS') }}</title>

    <link href="{{ asset(mix('/css/app.css')) }}" rel="stylesheet" />
    <script src="{{ asset(mix('/js/manifest.js')) }}" defer></script>
    <script src="{{ asset(mix('/js/vendor.js')) }}" defer></script>
    <script src="{{ asset(mix('/js/app.js')) }}" defer></script>
  </head>
  <body style="--kt-toolbar-height:55px;--kt-toolbar-height-tablet-and-mobile:55px">
  <noscript>
      <strong>We're sorry but NSPP EMRS doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
  </noscript>
    @routes
    @inertia
  </body>
</html>

