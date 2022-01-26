@extends('layouts.taskapp')

@section('content')
<link href="{{ asset('css/reactUserManagement.css') }}" rel="stylesheet">
<div class="task2">
    <div
        id="react-user-management"
    ></div>
</div>
<script src="{{ asset("js/index.js") }}"></script>
@endsection
