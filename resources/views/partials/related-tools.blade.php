@php

    $tool_category = '';
    foreach ($tools as $tool) {
        if ($tool['url'] == $view) {
            $tool_category = $tool['category'];
            break;
        }
    }
    
    $related_tools = array_filter($tools, function ($tool) use ($tool_category, $view) {
        return $tool['category'] === $tool_category && $tool['url'] !== $view;
    });

@endphp

@if(!empty($related_tools))
    <div class="row mt-2">
        <hr><h6>Related tools you might like</h6>
        <ol>
            @foreach($related_tools as $tool)
                <li><a href="{{url($tool['url'])}}">{{$tool['name']}}</a></li>
            @endforeach
            <li><a href="{{url('dashboard')}}">Or View all tools</a></li>
        </ol>
        
    </div>
@endif