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

    // breakוב¸ח®Þך¡¸ו¡ץוג¸ו¢¡כש₪ו¢­יח¦םנ¬ו¡למ©»וג¶ז½÷י½®
    $i += 1;
}

print var_dump($result);