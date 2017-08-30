$(document).ready(function() {
    // to start the labels is hide
    $("#name").on("keyup" , function ()
    {
   var value = $(this).val().length;
   if (value > 0) {
     $("#name-label").show()
   }
  else {
    $("#name-label").hide()
  }
   })

   $("#email").on("keyup" , function ()
   {
  var value = $(this).val().length;
  if (value > 0) {
    $("#email-label").show()
  }
 else {
   $("#email-label").hide()
 }
  })

  $("#phone").on("keyup" , function ()
  {
 var value = $(this).val().length;
 if (value > 0) {
   $("#phone-label").show()
 }
else {
  $("#phone-label").hide()
}
 })

 $("#message").on("keyup" , function ()
 {
var value = $(this).val().length;
if (value > 0) {
  $("#message-label").show()
}
else {
 $("#message-label").hide()
}
})

console.log(scrollY);
    
})