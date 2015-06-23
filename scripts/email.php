<?php
  $result = '';
  foreach($_POST as $key => $value) {
    if ($value) {
      $result .= "$key:  $value\n";
    }
  }
  $result = rtrim($result,', ');
  print $result;
  mail("alexr@nmr.mgh.harvard.edu","test php email",$result);
?>
