<?php
date_default_timezone_set('Asia/Tokyo');
$dt = new DateTime();
$hoge = $dt->format('Y-m-d H:i:s');
$huga = $dt->format('H:i');
//$array = array("1" => $hoge . "\n" . $hoge);


if ( is_string($hoge) ){
    echo "string型\n";
} else if ( is_int($hoge) ){
    echo "int型\n";
}