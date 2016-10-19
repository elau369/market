$(document).ready (function() {

  var nameInput = $("input#fullName").val();
  var addressInput = $("input#personsAddress").val();
  var purchaseInput = $("input#purchase").val();

  $("form#candy").submit(function(){
    alert("Thank you for your order of " + purchaseInput + " it will be sent to " + nameInput + " at " + addressInput + ".");
    alert(nameInput);

    event.preventDefault();

  });
});
