<?php

error_reporting(E_ALL ^ E_NOTICE);
ini_set("display_errors", "0");

//include("dbConfig.secure.php");
include("dbConfig.test.php");

$basedir = dirname($_SERVER['SCRIPT_FILENAME']);
$basescript = basename($_SERVER['SCRIPT_FILENAME']);

$conn = mysql_connect($dbHost,$dbUser,$dbPass) or die("Connect Error: " . mysql_error());

mysql_select_db("acct",$conn);

$sql = <<<EOD
    SELECT SID,START,STOP FROM SESSIONS LIMIT 10
EOD;

$result = mysql_query($sql,$conn) or die("Query Error: " . mysql_error());

?>

<html lang="en">
<head>
</head>
<body>

<?php 

while($row = mysql_fetch_assoc($result)) {
  foreach($row as $cname => $cvalue) {
    if ($cname == 'SID') {
      print "<h1>$cname: $cvalue</h1>";
    }
    else if ($cname == 'START') {
      print "<ul><li>$cname: $cvalue</li></ul>";
    }
    else if ($cname == 'STOP') {
      print "<ul><li>$cname: $cvalue</li></ul>";
    }
  }
}

?>

</body>
