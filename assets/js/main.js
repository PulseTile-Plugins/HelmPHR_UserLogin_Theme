var options = {
  hashTracking: false
};
var inst = $('[data-remodal-id=modal]').remodal(options);

// Login Click
$('.login').click(function(e){
  e.preventDefault();
  inst.open();
});

// Login enter
$(window).keydown(function(e){
  if(e.keyCode == 13) {
    e.preventDefault();
    inst.open();
  }
});

// Agree to terms
$('.agree').click(function(e){
  e.preventDefault();
  $( $(this).attr('data-target') ).submit();
});

// Decline terms
$('.decline').click(function(e){
  e.preventDefault();
  inst.close();
});
