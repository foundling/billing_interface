(function() {
/*
 * *
 * * jquery ui datepicker
 * *
 * */

$(function() {
    $("#datepicker" ).datepicker();
});


var today = new Date().toJSON().split('-');
var yy = today[0];
var mm = today[1];
var dd = today[2].split('T')[0];
var today_fmt = mm + '/' + dd + '/' + yy;

$('#datepicker').attr('value',today_fmt);

}());
