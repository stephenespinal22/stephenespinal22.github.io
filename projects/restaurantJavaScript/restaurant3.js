function validate() {
  var email = document.getElementById("input-email").value;

  if (!email.includes('@'))
  {
    alert("Enter a valid email address");
  }
  else
  {
    document.getElementById("email-Sent").style.visibility = "visible";
    document.getElementById("users-Email").innerText = email;
  }

}
