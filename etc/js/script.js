/*
*
* jquery ui datepicker
*
*/

$(function() {
    $("#datepicker" ).datepicker();
});


var today = new Date().toJSON().split('-');
var yy = today[0];
var mm = today[1];
var dd = today[2].split('T')[0];
var today_fmt = mm + '/' + dd + '/' + yy;

$('#datepicker').attr('value',today_fmt);


/* 
*
*  Unhide fields on user's check of any checkbox
*
*/

// toggle hidden fields on form1.html
$('input.FDG').change( function() {
    //console.log('FDG-aux div should be toggled');
  
  $('.FDG-aux').toggleClass('hidden');
});

$('input.nmt').change( function() {
    //console.log('FDG-aux div should be toggled');
  $('.nmt-aux').toggleClass('hidden');
});


$('input.blood').change( function() {
    //console.log('FDG-aux div should be toggled');
  $('.blood-aux').toggleClass('hidden');
}); 


/*
* Simulate form submission without posting anything
*/

// get all form data into an object
$.fn.serializeObject = function() {
  var o = {};
  var a = this.serializeArray();
  $.each(a, function() {
      if (o[this.name] !== undefined) {
          if (!o[this.name].push) {
              o[this.name] = [o[this.name]];
          }
          o[this.name].push(this.value || '');
      } else {
          o[this.name] = this.value || '';
      }
  });
  return o;
};

// loop through object and print out only non-empty values 

$('form').submit(function(e){

    // check for a valid proj code
    if ( $('input[name=proj_code]').val().length < 3 )
    {
      $('.errors').text('Invalid Project Code');
      return false;
    }
    else
    {
        $('.errors').html('');
    }

    var o = null; // ensure no carry over data
    $('.summary').toggleClass('hidden');
    var o = $(this).serializeObject();
    console.log(o);
    var prev_html = $('.summary.content-layer').html();

    var start_ul = '<ul>';
    var end_ul = '</ul>';
    for (var i in o)
    {
        if (o[i] && o[i] !== 'no')
        {
          start_ul += '<li><strong>' + i + ' :</strong> ' + o[i];  
        }
    }
    var summary_ul = start_ul + end_ul;
    console.log(summary_ul);
    $('.summary-of-charges').html(summary_ul);
    return false;
})



/*
*
* Summary event handlers
*
*/

$('#summary-back').click(function() {
    $('summary').toggleClass('hidden');
})
