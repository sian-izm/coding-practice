<?php
$array = array(
               "field_1"  =>  1,
               "field_2"  =>  2,
               "field_3"  =>  3,
               "field_4"  =>  4,
               "field_5"  =>  5,
               "field_6"  =  6
               );

echo "上書き前の\$array  = " . var_dump($array) . "\n";

for ( $i = 3; $i <= 5; $i++ ) {
    $array["field_".$i] = 'huga';
}

echo "上書き後の\$array = ". var_dump($array) . "\n";


$array = array(
               "field_4" => "mogo",
               "field_7" => "777",
               );

echo var_dump($array);
