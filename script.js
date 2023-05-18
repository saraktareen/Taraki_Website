function myFunction() {
  var x = document.getElementsByClassName("hamburger");
  if (filename.tstyles.css.display === "flex") {
    x.tstyles.display = "none";
    alert("Block")
  } else {
    x.tstyles.display = "flex";
    alert("Not block")
  }
}

function validateForm() {
  let name = document.forms["myForm"]["enter_name"].value;
  let email = document.forms["myForm"]["enter_email"].value;
  let message = document.forms["myForm"]["enter_message"].value;
  
    alert(`
    Name: ${name}
    Email: ${email}
    Message: ${message}`);
}
