var email = document.querySelector("#emailLogin");
var password = document.querySelector("#passwordLogin");

var form = document.getElementById("myform");

var login_btn = document.querySelector("#login");

var expire = new Date();
expire.setDate(expire.getDate() + 5);
//set cookie of user
function setCookie(key, value, expireDate) {
  document.cookie = key + "=" + value + "; expires=" + expireDate;
}

function hasCookie(key) {
  if (getCookieValue(key)) return true;
  else return false;
}

function getCookieValue(key) {
  // split my cookie into array (;)
  var myCookieElements = document.cookie.split("; ");
  // ask every item in array == key I pass it as argument
  var i = 0;
  for (const item of myCookieElements) {
    //get first cookie in my cookies => [username="ali"] then split this into ["username" ,"ali"]
    if (item.split("=")[0] == key) {
      //return value of my first cookie ([0]->key , [1]-> value after split on =
      return item.split("=")[1];
    }
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  var requiredEmail = document.getElementsByClassName("requiredEmail")[0];
  var validEmail = document.getElementsByClassName("validEmail")[0];

  var requiredPassword = document.getElementsByClassName("requiredPassword")[0];
  var validPassword = document.getElementsByClassName("validPassword")[0];

  var flag2, flag3;

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value == "") {
    email.style.border = "1px solid red";
    requiredEmail.classList.add("show");
  } else if (!emailRegex.test(email.value)) {
    email.style.border = "1px solid red";
    validEmail.classList.add("show");
    requiredEmail.classList.remove("show");
  } else {
    email.style.border = "1px solid green";
    requiredEmail.classList.remove("show");
    validEmail.classList.remove("show");

    flag2 = true;
  }

  var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
  if (password.value == "") {
    password.style.border = "1px solid red";
    requiredPassword.classList.add("show");
  } else if (!passwordRegex.test(password.value)) {
    password.style.border = "1px solid red";
    validPassword.classList.add("show");
    requiredPassword.classList.remove("show");
  } else {
    password.style.border = "1px solid green";
    requiredPassword.classList.remove("show");
    validPassword.classList.remove("show");

    flag3 = true;
  }

  if (flag2 && flag3) {
    if (
      getCookieValue("email") == email.value &&
      getCookieValue("password") == password.value
    ) {
      setTimeout(() => {
        //window.location = "index.html";
        window.open("index.html", "_self");
      }, 1500);
    } else {
      document.writeln("error");
    }
  }
});
