<?php
include("../dbConfig.test.php");

$conn = mysql_connect($dbHost,$dbUser,$dbPass) or die("Connect Error: " . mysql_error());

mysql_select_db("acct",$conn);

$sql = <<<EOD
  SELECT CODE FROM PROJECTS WHERE CODE = '{$_GET['code']}'
EOD;

$result = mysql_query($sql,$conn) or die("Query Error: " . mysql_error());
if ($result)
{
  $values = mysql_fetch_array($result);
  print $values['CODE'];
}

?>
