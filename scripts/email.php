<?php
 
  $num = '';

  $fh = fopen("form_count.txt","r");
  while (!feof($fh)) {
    $line = fgets($fh);
    $num.=$line;
  }
  fclose($fh);

  $fh = fopen("form_count.txt","w") or die('unable to write to file');
  fwrite($fh,$num+1);
  fclose($fh);

  $result = '';
  foreach($_POST as $key => $value) {
    if ($value) {
      $result .= "$key:\t$value\n";
    }
  }

  $result .= "SUBMISSION ID:\t$num"; 
  $result = rtrim($result,', ');
  print $result;
  mail("alexr@nmr.mgh.harvard.edu","test php email",$result);
?>
