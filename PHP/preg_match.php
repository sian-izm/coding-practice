<?php

$comment  =  "hoge";
echo implode("|", $excludes=getExcludes()) . "\n";


function getExcludes() {
	return array(
                 "huga", "mogo","muge"
	);
}