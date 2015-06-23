<!doctype html>
<html>
<head>
 <style> 
   body 
   {
    font-family: "HelveticaNeue-Light",sans-serif;
    background: lightblue;
    margin: 0;
    padding: 0;
    height: 100%;
    font-size: 100%;
   }
   h1 
   {
    margin-top: 0;
    padding: 15px;
    background: whitesmoke;
   }
   input[type=submit]:hover
   {
     background: lightgreen;
   }
   input[type=submit]
   {
    margin-top: 20px;
    margin-left: 15px;
    background: whitesmoke;
    border-radius: 5px;
    width: 20%;
    height: 60px;
    font-weight: bold;
   }

   .heading-label 
   {
     padding-bottom: 10px;
     font-weight: bold;
     display: inline-block;
     background: none;
   }

   .heading-label:first-child
   {
     min-width: 175px;
   }

   .key
   {
     display: inline-block;
     min-width: 200px;
     height: 25px;
     vertical-align: middle;
   }

   .line 
   {
     padding-bottom: 15px;
     padding-left: 15px;
   }

   .container
   {
     margin: 15px;
   }

   input 
   {
     font-size: 100%;
     border: 2px solid black;
     height: 25px;
     padding-left: 5px;
   }

 </style> 
 <link rel="stylesheet" href="https://code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
</head>
<body>
<h1>Confirm / Modify Entered Data</h1>
<div class="container">
<form action="scripts/email.php" method="POST">
<h1 class="heading-label">Data</h1><h1 class="heading-label">Value entered</h1>
<?php
  foreach($_POST as $key => $value)
  {
    if (!$value)
    {
      continue;
    }
    if ($key === "date_of_service")
    {
      print "<div class=\"line\">
               <span class=\"key\">$key</span>
               <input id=\"datepicker\" name=\"$key\" value=\"$value\">
             </div>";
    }
    else if ($key === "proj-code")
    {
      print "<div class=\"line\">
               <span class=\"key\">$key</span>
               <span>$value</span>
            </div>";

    }
    else {
      print "<div class=\"line\">
               <span class=\"key\">$key</span>
               <input name=\"$key\" value=\"$value\">
             </div>";
    }
  }
?>
<input type="submit">
</form>
</div>
<script src="lib/jquery.js"></script>
<script src="lib/jquery-ui.js"></script>
<script src="lib/date.js"></script>
<script src="lib/confirm-validate.js"></script>
</body>
</html>
