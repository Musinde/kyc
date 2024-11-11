<!doctype html>
<html lang="en">

<head>    
    <meta charset="utf-8" />
    <title> @yield('title') | {{ config('app.name') }}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta content="A completely free and ad free collection of your favourite productivity tools." name="description" />
    <meta content="" name="author" />
    
    <link rel="manifest" href="{{ asset('/site.webmanifest') }}">


    <!-- include head css -->
    @include('layouts.head-css')
</head>

<body>

    @yield('content')

    <!-- vendor-scripts -->
    @include('layouts.vendor-scripts')

</body>

</html>
