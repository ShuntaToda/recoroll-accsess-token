<?php

use App\Http\Controllers\OAuth\LoginController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/auth/google', [LoginController::class, "redirectToProvider"]);
Route::post('/auth/google/callback', [LoginController::class, "handleProviderCallback"]);
Route::get("/user", function () {
    return response()->json(Auth::user());
});
