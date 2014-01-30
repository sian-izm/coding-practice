<?php
date_default_timezone_set('Asia/Tokyo');
$now = strtotime("now");
$result = $now - 1390542240;
if ( $now - 1390542240 <= 1000000 ) {
    print "hoge:$result";
} else {
    print "huga:$result";
}

