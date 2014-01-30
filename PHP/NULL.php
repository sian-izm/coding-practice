<?php

$test = "-";
if ( $test  == '-' ) {
    $test = NULL;
}

$result = array( "result" => $test );

echo $result["result"];