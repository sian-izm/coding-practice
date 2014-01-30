<?php
$i = 1;
$result;
while ($i < 5){
    $j = 1;
    while ($j < 5){
    if ($i * $j > 15){
        break;
    }
    print $i*$j . "\n";
    $j += 1;
    }

    // breakが実行された時に処理が移る位置
    $i += 1;
}

print var_dump($result);