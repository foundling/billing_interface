<?php
  $num = '';

  $fh = fopen("form_count.txt","r");
  while (!feof($fh)) {
    $line = fgets($fh);
    $num.=$line;
  }
  fclose($fh);

  $fh = fopen("form_count.txt","w") or die('unable to write to file');
  fwrite($fh,$num + 1);
  fclose($fh);

  $result = '';
  foreach($_POST as $key => $value) {
    if ($value) {
      $result .= "$key:\t$value\n";
    }
  }

  $result .= "SUBMISSION ID:\t$num"; 
  $result = rtrim($result,', ');
  echo $result;
  $headers = "From: alexr@nmr.mgh.harvard.edu";
  mail("alexr@nmr.mgh.harvard.edu,judit@nmr.mgh.harvard.edu,grae@nmr.mgh.harvard.edu","Pet Billing Form ID #$num Submission Results",$result,$headers);
?>
