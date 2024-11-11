<?php

namespace App\View\Components;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class breadcrub extends Component
{
    public $title;
    public $pagetitle;
    /**
     * Create a new component instance.
     */
    public function __construct($title, $pagetitle)
    {
        $this->title = $title;
        $this->pagetitle = $pagetitle;
    }
    
    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.breadcrub');
    }
}
