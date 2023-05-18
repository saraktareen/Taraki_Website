// JavaScript code goes here
function toggleMenu() {
    var hamburger = document.querySelector(".hamburger");
    hamburger.classList.toggle("clicked");
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
