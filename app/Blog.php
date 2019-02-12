<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    // add fillable
    protected  $table = 'blog';
    protected $fillable = ['title', 'body'];

}
