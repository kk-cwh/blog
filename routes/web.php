<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', function () {
    return view('index');
});


Route::get('/articles/{id}', 'ArticleController@index')->name('article_view');

Route::get('/archives/{id}', 'TypeController@listArticles')->name('type_archives_view');

Route::get('/archives', 'ArticleController@lists')->name('archives_view');