<?php

  $result = '';
  foreach($_GET as $key => $value) {
    $result .= "$key:  $value\n";
  }

  $result = rtrim($result,', ');

  //print $result;
  mail("alexr@nmr.mgh.harvard.edu","test php email",$result);

?>
