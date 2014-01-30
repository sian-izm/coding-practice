<?php

$tsv = array(
             0 => "hoge",
             1 => "huga",
             2 => "mogo",
             3 => "zozo",
             4 => NULL,
             5 => "ssss",
             6 => "zuzu",
             7 => "huku"
             );

for ( $i = 0; $i < count($tsv); $i++ ) {
    $record = $tsv[$i];
    if ( masking($i) && !is_null($record) ) {
        $showData[] = "****";
    }
    else {
        $showData[] = $record;
    }
}

echo var_dump($showData);

function masking ( $i ) {
    if ( $i === 3 || $i === 4 || $i === 5 ) {
        return true;
    }
    else {
        return false;
    }
}
 