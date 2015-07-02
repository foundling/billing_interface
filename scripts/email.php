<?php
  $result = '';
  foreach($_POST as $key => $value) {
    if ($value) {
      $result .= "$key:\t$value\n";
    }
  }

  $result .= "SUBMISSION ID:\t1"; 
  $result = rtrim($result,', ');
  print $result;
  mail("alexr@nmr.mgh.harvard.edu","test php email",$result);
?>
