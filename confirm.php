<!doctype html>
<html>
<head>
 <style> 
 </style> 
 <link rel="stylesheet" href="https://code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
</head>
<body>
<form action="scripts/email.php" method="POST">
<h1>Confirm Entered Data</h1>
<?php
  foreach($_POST as $key => $value)
  {
    if ($key === "date-of-service")
    {
      print "$key: <input id=\"datepicker\" name=\"$key\" value=\"$value\"><br>";
    }
    else {
      print "$key: <input name=\"$key\" value=\"$value\"><br>";  
    }
  }
?>
<button type="submit">Submit</button>
</form>
<script src="lib/jquery.js"></script>
<script src="lib/jquery-ui.js"></script>
<script src="lib/date.js"></script>
</body>
</html>
