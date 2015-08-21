<?php
include("../db/dbConfig.test.php");

$conn = mysql_connect($dbHost,$dbUser,$dbPass) or die("Connect Error: " . mysql_error());
mysql_select_db("acct",$conn);
$proj_code = mysql_real_escape_string($_GET['code']);
$active_statement = <<<EOD
  SELECT CODE FROM PROJECTS WHERE CODE = '{$proj_code}' AND ACTIVE='Y'
EOD;
$closed_statement = <<<EOD
  SELECT CODE FROM PROJECTS WHERE CODE = '{$proj_code}' AND ACTIVE='N'
EOD;

$active_query = mysql_query($active_statement,$conn) or die("Query Error: " . mysql_error());

$is_active = mysql_fetch_array($active_query); 

$closed_query = mysql_query($closed_statement,$conn) or die("Query Error: " . mysql_error());

$is_closed = mysql_fetch_array($closed_query); 

if ($is_active['CODE'])
{
	print 'EXISTS'; 
}
else if ($is_closed['CODE'])
{
	print 'CLOSED'; 
}

else {
	print 'NOEXIST';
}


?>
