<?php
$port = getenv("PORT") ?: 8080;

$command = "php -S 0.0.0.0:$port";
passthru($command);
