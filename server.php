<?php

$port = getenv("PORT") ?: 8080;

echo "Server berjalan di port ".$port.PHP_EOL;

passthru("php -S 0.0.0.0:$port -t .");

?>
