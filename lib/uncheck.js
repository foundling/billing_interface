// from user HexInteractive's solution on SO: http://stackoverflow.com/questions/4957207/how-to-check-uncheck-radio-button-on-click
$(':radio').mousedown(function(e){
  var $self = $(this);
  if( $self.is(':checked') ){
    var uncheck = function(){
      setTimeout(function(){$self.removeAttr('checked');},0);
    };
    var unbind = function(){
      $self.unbind('mouseup',up);
    };
    var up = function(){
      uncheck();
      unbind();
    };
    $self.bind('mouseup',up);
    $self.one('mouseout', unbind);
  }
});
