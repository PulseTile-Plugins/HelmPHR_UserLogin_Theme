var options = {};
var inst = $('[data-remodal-id=modal]').remodal();

// Login
$('.login').click(function(e){
  e.preventDefault();
  inst.open();
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
