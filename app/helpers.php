<?php

function num_format($number)
{
    return number_format($number,2,'.',',');
}

function num_format_full($number)
{
    return number_format($number,0,'.',',');
}

function format_date($date){
    return date('d/m/Y',strtotime($date));
}

function format_datetime($date){
    return date('d/m/Y H:i',strtotime($date));
}

function format_datetime_worded($date){
    return date('l j, F Y \a\t H:i',strtotime($date));
}