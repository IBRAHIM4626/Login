var Names = document.querySelector("#NameInput");
var email = document.querySelector("#email");
var password = document.querySelector("#passwordInput");
var cPassword = document.querySelector("#confirmPassword");

var form = document.getElementById("myform");

var sign_up = document.querySelector("#sign_up");

var expire = new Date();
expire.setDate(expire.getDate() + 1);
//set cookie of user
function setCookie(key, value, expireDate) {
  document.cookie = key + "=" + value + "; expires=" + expireDate;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  var requiredName = document.getElementsByClassName("requiredName")[0];
  var validName = document.getElementsByClassName("validName")[0];

  var requiredEmail = document.getElementsByClassName("requiredEmail")[0];
  var validEmail = document.getElementsByClassName("validEmail")[0];

  var requiredPassword = document.getElementsByClassName("requiredPassword")[0];
  var validPassword = document.getElementsByClassName("validPassword")[0];

  var requiredConfirm = document.getElementsByClassName("requiredConfirm")[0];
  var validConfirm = document.getElementsByClassName("validConfirm")[0];

  var flag1, flag2, flag3, flag4;

  var nameRegex = /^[A-Za-z\s]{4,}$/;
  if (Names.value == "") {
    Names.style.border = "2px solid red";
    requiredName.classList.add("show");
  } else if (!nameRegex.test(Names.value)) {
    Names.style.border = "2px solid red";
    validName.classList.add("show");
    requiredName.classList.remove("show");
  } else {
    Names.style.border = "2px solid green";
    requiredName.classList.remove("show");
    validName.classList.remove("show");

    flag1 = true;
  }

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value == "") {
    email.style.border = "2px solid red";
    requiredEmail.classList.add("show");
  } else if (!emailRegex.test(email.value)) {
    email.style.border = "2px solid red";
    validEmail.classList.add("show");
    requiredEmail.classList.remove("show");
  } else {
    email.style.border = "2px solid green";
    requiredEmail.classList.remove("show");
    validEmail.classList.remove("show");

    flag2 = true;
  }

  var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
  if (password.value == "") {
    password.style.border = "2px solid red";
    requiredPassword.classList.add("show");
  } else if (!passwordRegex.test(password.value)) {
    password.style.border = "2px solid red";
    validPassword.classList.add("show");
    requiredPassword.classList.remove("show");
  } else {
    password.style.border = "2px solid green";
    requiredPassword.classList.remove("show");
    validPassword.classList.remove("show");

    flag3 = true;
  }

  if (cPassword.value == "") {
    cPassword.style.border = "2px solid red";
    requiredConfirm.classList.add("show");
  } else if (password.value != cPassword.value) {
    cPassword.style.border = "2px solid red";
    validConfirm.classList.add("show");
    requiredConfirm.classList.remove("show");
  } else {
    cPassword.style.border = "2px solid green";
    requiredConfirm.classList.remove("show");
    validConfirm.classList.remove("show");
    flag4 = true;
  }

  if (flag1 && flag2 && flag3 && flag4) {
    setCookie("name", Names.value, expire);
    setCookie("email", email.value, expire);
    setCookie("password", password.value, expire);
    setCookie("confirmPassword", cPassword.value, expire);

    setTimeout(() => {
      //window.location = "index.html";
      window.open("login.html", "_self");
    }, 1500);
  }
});
