<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\IndexController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/


Route::get('/', [IndexController::class, 'index'])->name('index');
Route::post('/upload-post', [IndexController::class, 'uploadFile']);
Route::post('/delete-post-media', [IndexController::class, 'deleteFile']);

Route::get('/facial-compare', [IndexController::class, 'facialCompare'])->name('facial.compare');
Route::get('/detect-face', [IndexController::class, 'detectFace']);

Route::get('/selfie', [IndexController::class, 'takeSelfie']);
Route::post('/verify-liveness', [IndexController::class, 'verifyLiveness'])->name('selfie.verifyLiveness');
Route::post('/upload-selfie', [IndexController::class, 'uploadSelfie']);

Route::post('/initiate-liveness', [IndexController::class, 'initiateLiveness'])->name('liveness.initiate');
Route::get('/check-liveness/{sessionId}', [IndexController::class, 'checkLiveness'])->name('liveness.check');