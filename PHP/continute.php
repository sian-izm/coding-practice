<?php
$i = 1;
$result;
while ($i < 5){
    $j = 1;
    while ($j < 5){
    if ($i * $j > 15){
        continue;
    }
    print $i*$j . "\n";
    $j += 1;
    }

    // break��玮�ꎡ�����墡���墭�玦�������掽�鎽��
    $i += 1;
}

print var_dump($result);