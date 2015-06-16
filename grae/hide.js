(function() {
/* toggle logic for top-level widgets */
var $issues_comments_header = $('.issues-comments-header');
var $issues_comments_block = $('.issues-comments-block');
var $blood_analysis_header = $('.blood-analysis-header');
var $blood_analysis_block = $('.blood-analysis-block');
var $contrast_agent_header = $('.contrast-agent-header');
var $contrast_agent_block =  $('.contrast-agent-block');
var $data_processing_header = $('.data-processing-header');
var $data_processing_block =  $('.data-processing-block');
var $injected_compound_header = $('.injected-compound-header');
var $injected_compound_block =  $('.injected-compound-block');
var $other_header = $('.other-header');
var $other_block = $('.other-block');
var $radiotracer_header = $('.radiotracer-header');
var $radiotracer_block = $('.radiotracer-block');
var $subject_info_header = $('.subject-information-header');
var $subject_info_block = $('.subject-information-block');
var $bolus_and_infusion_header = $('.bolus-and-infusion-header');
var $bolus_header = $('.bolus-header');
var $infusion_header = $('.infusion-header');
var $infusion_block = $('.infusion-block');

$issues_comments_header.on('click', function() {
	$issues_comments_block.toggleClass('hidden');
});

$data_processing_header.on('click', function() {
	$data_processing_block.toggleClass('hidden');
});

$blood_analysis_header.on('click', function() {
	$blood_analysis_block.toggleClass('hidden');
});

$contrast_agent_header.on('click', function() {
	$contrast_agent_block.toggleClass('hidden');
});

$injected_compound_header.on('click', function() {
	$injected_compound_block.toggleClass('hidden');
});

$other_header.on('click', function() {
	$other_block.toggleClass('hidden');
});

$radiotracer_header.on('click', function() {
	$radiotracer_block.toggleClass('hidden');
});

$subject_info_header.on('click',function() {
    $subject_info_block.toggleClass('hidden');
});

/*
 * breach of separation here: hiding also 'enables' the header 
 */
$bolus_and_infusion_header.on('click',function() {
    $infusion_header.toggleClass('hidden');
    $infusion_block.toggleClass('hidden');
    $bolus_and_infusion_header.toggleClass('inactive-header');
    $bolus_header.toggleClass('inactive-header');
});

/* toggle logic for subject information (human, animal, phantom) */

var $subject_type_selector = $('#subject-type-selector');
var $human_subject_details = $('.human-subject-details');
var $animal_subject_details = $('.animal-subject-details');
var $phantom_subject_details = $('.phantom-subject-details');

$subject_type_selector.change( function() {
  if (this.value === 'human') {
    $human_subject_details.css('display','block');
    $animal_subject_details.css('display','none');
    $phantom_subject_details.css('display','none');
  }
  if (this.value === 'animal') {
    $animal_subject_details.css('display','block');
    $human_subject_details.css('display','none');
    $phantom_subject_details.css('display','none');
  }
  if (this.value === 'phantom') {
    $phantom_subject_details.css('display','block');
    $animal_subject_details.css('display','none');
    $human_subject_details.css('display','none');
  }
});
}());
