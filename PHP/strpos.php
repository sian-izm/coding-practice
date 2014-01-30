<?php

$newstring = 'abcdef abcdef';
$pos = strpos($newstring, 'b'); // $pos は 0 ではなく 7 となります。
echo $pos;
?>