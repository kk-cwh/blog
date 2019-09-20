<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    protected $table = 'tags';

    protected $guarded = ['id'];

    public function articles()
    {
        return $this->belongsToMany(Article::class);
    }
}
