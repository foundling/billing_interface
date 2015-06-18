<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="initial-scale=1">
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

	  <!--PRODUCTION BLOCK: BASE DETAILS -->
	<h1>Production</h1>
	<form action="../scripts/email.php" method="GET"> 
	  	<div class="section">
	  		<label class="proj-code-label">Project Code</label>
	  		<input id="proj-code" class="required-element" name='proj-code' type="text" maxlength="3" size="3" >
            <div id="proj-code-status" class="validity"></div>
	  	</div>

	  <div class="production-block">
	  	<div>
	  		<label class="prod-date">Production Date</label>
            <input name="date_of_service" id="datepicker" type="text">
	  	</div>
	  </div>

	  	<!--SUBJECT BLOCK -->

      <div class="section">
	  	<label class="block subject-information-header">Subject Information</label>

	  	<div class="header subject-information-block hidden opaque-bg">

	  		<!-- Subject Type Selector-->
	  		<div>
                <label><strong>subject type</strong></label><br><br>
	  			<select id="subject-type-selector" name="subject_type">
	  		  		<option value="">n/a</option>
	  		  		<option value="human">human</option>
  	  		  		<option value="animal">animal</option>
  	  		  		<option value="phantom">phantom</option>
	  			</select>
	  		</div>

		  	<!--HUMAN TYPES TRIGGERED BY RADIO SELECTION -->
		  	<div class="human-subject-details">
		  		<div>
		  			<input type="radio" name="human_type" value="Healthy/Control">
		  			<label>Healthy/Control</label>
		  		</div>
		  		<div>
		  			<input type="radio" name="human_type" value="Patient/Diseased">
		  			<label>Patient/Diseased</label> 
		  		</div>

                <h2>Human Subject Details</h2>
		  		<div>
		  			<label>Subject ID</label>
		  			<input type="text" name="human_ID" value="">
		  		</div>
		  		<div>
		  			<label>Sex</label>
		  			<input type="text" name="human_sex" value="">
		  		</div>
		  		<div>
		  			<label>Weight</label>
		  			<input type="text" name="human_weight" value="">
		  		</div>
		  		<div>
		  			<label>Height</label>
		  			<input type="text" name="human_height" value="">
		  		</div>
		  		<div>
		  			<label>Year of Birth</label>
		  			<input type="text" name="human_YOB" value="">
		  		</div>
		  		<div>
		  			<label>IV Placement</label>
		  			<input type="text" name="human_IV_placement" value="">
		  		</div>
		  		<div>
		  			<label>Gauge</label>
		  			<input type="text" name="human_gauge" value="">
		  		</div>
		  		<div>
		  			<label>Glucose (optional)</label>
		  			<input type="text" name="human_glucose" value="">
		  		</div>
		  	</div>
 
            <!--ANIMAL TYPES TRIGGERED BY RADIO SELECTION -->
		  	<div class="animal-subject-details hidden">
                <h2>Animal Subject Details</h2>
		  		<div>
		  			<label>Subject ID</label>
		  			<input type="text" name="animal_ID" value="">
		  		</div>
		  		<div>
		  			<label>Weight</label>
		  			<input type="text" name="animal_weight" value="">
		  		</div>
		  		<div>
		  			<label>IV Placement</label>
		  			<input type="text" name="animal_IV_placement" value="">
		  		</div>
		  		<div>
		  			<label>NucMed Charge </label>
		  			<input type="text" name="animal_nucmed_charge" value="">
		  		</div>
		  	</div>

            <!--PHANTOM TYPES TRIGGERED BY RADIO SELECTION -->
		  	<div class="phantom-subject-details hidden">
              <h2>Phantom Subject Details</h2>
              <input type="text" name="phantom_description" value="">
            </div>
 
		</div>
		</div>
        <!-- END SUBJECT INFORMATION -->

	<!-- INJECTED COMPOUND BLOCK -->
      <div class="section">
        <label class="block injected-compound-header">Injected Compound</label>
        <div class="injected-compound-block hidden opaque-bg">
     	  <div>
             <label>Injected Compound</label>
             <input type="text" name="injected-compound" value="">
	      </div>
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
			<input type="checkbox" class="radiotracer" name="F18-FDG" value="F18-FDG">
			<label>F18-FDG</label>
            <input type="text" class="lot_number"  name="F18-FDG" value="lot #" disabled>
		</div>
		<div>
			<input type="checkbox" class="radiotracer" name="other" value="Other">
			<label>Other</label>
            <input type="text" class="lot_number"  name="other" value="lot #" disabled>
            <input type="text" name="radiotracer-other" placeholder="enter rt name here" disabled>
		</div>

        <div class="block bolus-infusion-block">
          <!-- Bolus -->

          <label class="bolus-header">Bolus</label>
          <div class="bolus-block">
            <br>
            <label>Initial Activity</label><input name="bolus-init-activity" type="text">
            <br>
            <label>Time (00:00:00)</label><input name="bolus-init-time" type="text">
            <br>
            <label>Time of Injection</label><input name="bolus-toi" type="text">
            <br>
            <label>Residual Activity</label><input name="bolus-residual-activity" type="text">
            <br>
            <label>Time</label><input name="bolus-residual-time" type="text">
            <br>
            <label>Total Dose Administered (Auto)</label>
            <input name="bolus-total-dose-administered" type="text"> 
            <br>
          </div>

          <!-- Infusion -->
          <label class="infusion-header">Infusion</label>
          <div class="infusion-block">
            <br>
            <label>Initial Activity</label><input name="infusion-init-activity" type="text">
            <br>
            <label>Time (00:00:00)</label><input name="infusion-init-time" type="text">
            <br>
            <label>Volume</label><input name="infusion-volume" type="text">
            <br>
            <label>Rate (cc/s)</label><input name="infusion-rate" type="text">
            <br>
            <label>Time of Injection</label><input name="infusion-toi" type="text">
            <br>
            <label>Total Dose Administered</label><input name="infusion-total-dose" type="text">
            <br>
            <label>Residual Activity (mCi)</label><input name="infusion-residual-activity" type="text">
            <br>
            <label>Time (00:00:00)</label><input name="infusion-residual-time" type="text">
           </div>
         </div>
       </div>
	 </div>
     <!-- End Radiotracer Block -->

     <!-- Contrast Agent Block -->
          <div class="section">
            <label class="block header contrast-agent-header">Contrast Agent</label>
            <div class="block contrast-agent-block hidden opaque-bg">
              <div>
                <div><label>Name</label><input name="contrast_agent_name" type="text"></div>
                <div class="lot-numbers">
                  <label>Lot Number</label>
                  <input name="contrast_agent_lot_num" type="text">
                  <div id="add-lot-number" class="add">+</div> 
                </div>
                <div>
                  <label>Expiration Date</label>
                  <input name="contrast_agent_exp_date" type="text">
                </div>
                <div>
                  <label>Volume of Vial</label>
                  <input name="contrast_agent_volume_of_vial" type="text">
                </div>
                <div>
                     <label>Time of Injection</label>
                     <input name="contrast_agent_toi" type="text">
                </div>
                <div>
                     <label>Rate (ml/s)</label>
                     <input name="contrast_agent_rate" type="text">
                </div>
                <div> 
                     <label>Volume</label>
                     <input name="contrast_agent_volume" type="text">
                </div>
              </div>
            </div>
          </div>
     <!-- End Contrast Agent Block -->

	<!-- Blood Analysis Block -->
    <div class="section">
	<label class="block header blood-analysis-header">Blood Analysis</label>
	<div class="block blood-analysis-block hidden opaque-bg">
		<label>Type</label>
		<select name="blood-analysis-type">
			<option value="">n/a</option>
			<option value="venous">Venous</option>
			<option value="arterial">Arterial</option>
		</select>
		<div class="venous-block">
			<label>Arm Used</label>
            <select name="venous-arm-used">
                <option value="">n/a</option>
                <option value="left">left</option>
                <option value="right">right</option>
            </select>
            <br>
			<label>Venous Type</label>
			<select name="venous-type">
			    <option value="">n/a</option>
				<option value="plasma-only">Plasma Only</option>
				<option value="plasma-wb">Plasma/WB</option>
				<option value="metabolites">Metabolites</option>
			<select>
		</div>

		<div class="arterial-block hidden">
			<label>Wrist Used</label>
            <select name="arterial-wrist-used">
                <option value="">n/a</option>
                <option value="left">left</option>
                <option value="right">right</option>
            </select>
            <br>
			<label>Arterial Type</label>
			<select name="arterial-type">
				<option value="">n/a</option>
				<option value="metabolites">Metabolites</option>
				<option value="plasma-only">Plasma Only</option>
				<option value="plasma-wb">Plasma/WB</option>
			</select>
		</div>
	</div>
    </div>
    <!-- End Blood Analysis Block -->

    <!-- DATA PROCESSING BLOCK -->
    <div class="section">
	<label class="block header data-processing-header">Data Processing</label>
	<div class="block data-processing-block hidden">
		<textarea rows="4" cols="40"></textarea>
	</div>
	</div>
    <!-- END DATA PROCESSING BLOCK -->

    <!-- ISSUES / COMMENTS BLOCK -->
    <div class="section">
	<label class="block header issues-comments-header">Issues / Comments</label>
	<div class="block issues-comments-block hidden">
		<textarea rows="4" cols="40"></textarea>
	</div>
    </div>
    <!-- END ISSUES / COMMENTS BLOCK -->

	<!-- Submit Form -->
	<input type="submit">
	</form>
<!--END CONTAINER-->
</div>
<script src="../lib/jquery.js"></script>
<script src="../lib/jquery-ui.js"></script>
<script src="../lib/project_code_validation.js"></script>
<script src="date.js"></script>
<script src="hide.js"></script>
<script src="add.js"></script>
<script src="disabled.js"></script>
<script src="serializeForm.js"></script>
<script src="../lib/validate_form.js"></script>
</body>
</html>
