<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>MGH Martinos Center - PET Billing</title>
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="https://code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
</head>
<body>

<header>
    <h1>Radiopharmacy Production  </h1>
    <span class="thin-pipe"> | </span>
    <h2 class="username"><span ><?php print $_SERVER['REMOTE_USER']; ?></span></h2>
</header>

<div class="container">

	<h1>Production</h1>
    <form action="../confirm.php" method="POST">
        <div class="production-details">
            <label class="proj-code-label">Project Code</label>
            <input id="proj-code" class="required-element" name='proj-code' type="text" maxlength="3" size="3" >
            <div id="proj-code-status" class="validity"></div>

          <div class="vertical">
            <label class="or">OR</label>
            <div>
              <label>Maintenance</label>
              <input type="radio" name="dummy_code" value="MAINTENANCE">
            </div>
            <div>
              <label>Validation</label>
              <input type="radio" name="dummy_code" value="VALIDATION">
            </div>
            <div>
              <label>Raw Isotope Run</label>
              <input type="radio" name="dummy_code" value="RAW_ISO_RUN">
            </div>
          </div>
        </div>
	  <!--PRODUCTION BLOCK: BASE DETAILS -->
	  <div class="production-block">
	  	<div>
	  		<label class="prod-date">Production Date</label>
            <input name="date-of-service" id="datepicker" type="text">
	  	</div>
	  </div>

	  <!--ISOTOPE BLOCK -->
	  <label class="isotope-header">Isotope Only</label>
	  <div class="isotope-block hidden">
	  	<div>
	  		<input type="checkbox" class="isotope-grp" value="F18">
	  		<label>F18</label>
	  	</div>
	  	<div>
	  		<input type="checkbox" class="isotope-grp" value="C11">
	  		<label>C11</label>
	  	</div>
	  	<div>
	  		<input type="checkbox" class="isotope-grp" value="N13">
	  		<label>N13</label>
	  	</div>
	  	<div>
	  		<input type="checkbox" class="isotope-grp" value="O15">
	  		<label>O15</label>
	  	</div>
	  	<div>
	  		<input type="checkbox" class="isotope-grp" value="Ga68">
	  		<label>Ga68</label>
	  	</div>
	  	<div>
	  		<input type="checkbox" class="isotope-grp" value="Cu64">
	  		<label>Cu64</label>
	  	</div>
		<div>
			<label class="sub-header">Activity (mCi)</label>
			<input type="text"  value="">
		</div>
	  </div>

	  <!--RADIOTRACER BLOCK -->
    <div class="section">
	  <label class="header block radiotracer-header">Radiotracer</label>
	  <div class="block radiotracer-block hidden">
	  	<div>
	  		<input type="checkbox" name="F18-5FU" class="radiotracer" value="F18-5FU">
	  		<label> F18-5FU</label>
            <input type="text" class="lot_number .disabled-text-input"  name="F18-5FU" value="lot #" disabled>
	  	</div>
	  	<div>
	  		<input type="checkbox" name="Ga68-Dota-toc" class="radiotracer" value="Ga68-Dota-toc">
	  		<label> Ga68-Dota-toc</label>
            <input type="text" class="lot_number"  name="Ga68-Dota-toc" value="lot #" disabled>
	  	</div>
	  	<div>
	  		<input type="checkbox" class="radiotracer" name="Cu64-FBP8" value="Cu64-FBP8">
	  		<label> Cu64-FBP8</label>
            <input type="text" class="lot_number"  name="Cu64-FBP8" value="lot #" disabled>
	  	</div>
	  	<div>
	  		<input type="checkbox" class="radiotracer" name="C11-Diprenorphine" value="C11-Diprenorphine">
	  		<label> C11-Diprenorphine</label>
            <input type="text" class="lot_number"  name="C11-Diprenorphine" value="lot #" disabled>
	  	</div>
	  	<div>
	  		<input type="checkbox" class="radiotracer" name="C11-DASB" value="C11-DASB">
	  		<label> C11-DASB</label>
            <input type="text" class="lot_number"  name="C11-DASB" value="lot #" disabled>
	  	</div>
	  	<div>
	  		<input type="checkbox" class="radiotracer" name="F18-Fallypride" value="F18-Fallypride">
	  		<label> F18-Fallypride</label>
            <input type="text" class="lot_number"  name="F18-Fallypride" value="lot #" disabled>
	  	</div>
		<div>
			<input type="checkbox" class="radiotracer" name="F18-FMISO" value="F18-FMISO">
			<label> F18-FMISO</label>
            <input type="text" class="lot_number"  name="F18-FMISO" value="lot #" disabled>
		</div>
		<div>
			<input type="checkbox" class="radiotracer" name="C11-Martinostat" value="C11-Martinostat">
			<label> C11-Martinostat</label>
            <input type="text" class="lot_number"  name="C11-Martinostat" value="lot #" disabled>
		</div>
		<div>
			<input type="checkbox" class="radiotracer" name="C11-NNc112" value="C11-NNc112">
			<label> C11-NNc112</label>
            <input type="text" class="lot_number"  name="C11-NNc112" value="lot #" disabled>
		</div>
		<div>
			<input type="checkbox" class="radiotracer" name="C11-PRB28" value="C11-PRB28">
			<label> C11-PRB28</label>
            <input type="text" class="lot_number"  name="C11-PRB28" value="lot #" disabled>
		</div>
		<div>
			<input type="checkbox" class="radiotracer" name="C11-Raclopride" value="C11-Raclopride">
			<label> C11-Raclopride</label>
            <input type="text" class="lot_number"  name="C11-Raclopride" value="lot #" disabled>
		</div>
		<div>
			<input type="checkbox" class="radiotracer" name="F18-T807" value="F18-T807">
			<label> F18-T807</label>
            <input type="text" class="lot_number"  name="F18-T807" value="lot #" disabled>
		</div>
		<div>
			<input type="checkbox" class="radiotracer" name="C11-Temozolomide" value="C11-Temozolomide">
			<label> C11-Temozolomide</label>
            <input type="text" class="lot_number"  name="C11-Temozolomide" value="lot #" disabled>
		</div>

		<div>
			<label class="sub-header">Starting Activity (mCi)</label>
			<input type="text"  name="starting-activity" value="">
		</div>
		<div>
			<label class="sub-header">Synthesis OK</label>
		</div>
		<div>
			<input name="synthesis" type="radio" value="yes"> yes 
		</div>
		<div>
			<input name="synthesis" type="radio" value="no"> no 
		</div>

		<div>
			<label class="sub-header">Quality Control Pass</label>
		</div>
		<div>
			<input name="qc-pass" type="radio" value="yes"> yes
		</div>
		<div>
			<input name="qc-pass" type="radio" value="no"> no
		</div>
		<div>
			<input name="qc-pass" type="radio" value="na"> n/a
		</div>

		<div>
			<label class="sub-header">Specific Activity at estimated TOI (mCi/nmol)(00:00:00)</label>
			<input type="text"  name="specific-activity" value="">
		</div>
		<div>
			<input type="checkbox" value="na"> n/a 
		</div>
		
		<div>
			<label class="sub-header">Batch released for Estimated TOI</label>
			<input type="text"  name="batch-released-for-estimated-toi" value="">
		</div>
		<div>
			<input type="checkbox" value="na">
			<label> n/a</label>
		</div>
	  </div>

	  <!--"OTHER" SECTION -->
	  <label class="other-header"> Other </label>
	  <div class="other-block hidden">
			<div>
                <h2>New Radiotracer</h2><br>
				<label class="">Type: </label>
				<select name="new-iso-or-radiotracer-type">
					<option value="">n/a</option> 
					<option value="new-iso">isotope</option> 
					<option value="radiotracer">radiotracer</option>	
				</select>
			</div>

			<div>
				<label>Name:</label>
				<input type="text" name="new-iso-or-radiotracer-name">
			</div>


			<div>		
			  		<label class="sub-header">Billing Comments</label>
			  		<textarea rows="5" cols="40"></textarea>
			</div>	
			  
			<div>
			  	<label class="sub-header">Comments for IT/Development (Martinos Help Desk)</label>
			  	<textarea rows="5" cols="40"></textarea>
			</div>

	  </div>
	<!-- Submit Form -->
	<input type="submit">
	</form>
<!--END CONTAINER-->
</div>

<script src="../lib/jquery.js"></script>
<script src="../lib/jquery-ui.js"></script>
<script src="../lib/project_code_validation.js"></script>
<script src="../lib/validate_form.js"></script>
<script src="../lib/disabled.js"></script>
<script src="../lib/date.js"></script>
<script src="../lib/uncheck.js"></script>
<script src="hide.js"></script>
</body>
</html>
