<!Doctype html>

<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Comatible" content="IE=edge">
    <meta name="viewport" content="width-device-width, initial-scale=1">

    <!--CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'Laravel') }}</title>
     <!-- Styles -->
    <link href="{{asset('css/app.css')}}" rel="stylesheet">
</head>
<body>
<div class="container">
    <h3>Vue.js, Laravel, Axios.js</h3>
</div>
<section id="app"></section>
<script>
    window.Laravel = <?php echo json_encode(['csrfToken' => csrf_token(), ]);?>
</script>

<script src="{{ assets('js/app.js') }}"></script>
</body>
</html>
