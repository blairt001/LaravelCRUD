<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    // add fillable
    protected  $table = 'blogs';
    protected $fillable = ['title', 'body'];

}