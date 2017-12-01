<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    protected $fillable = [
        'title', 'type_id', 'user_id', 'is_show', 'content'
    ];

    public function type(){
        return $this->belongsTo(Type::class,'type_id','id');
    }

    public function getCreatedAtAttribute($value)
    {
        return date('Y-m-d',strtotime($value));
    }
}