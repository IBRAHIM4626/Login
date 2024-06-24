var userInfo = document.querySelector("#user_info");
var userDom = document.querySelector("#user");
var buttons = document.querySelector("#buttons");
var logoutBtn = document.querySelector("#logout");

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

function hasCookie(key) {
  if (getCookie(key)) return true;
  else return false;
}
function getCookie(key) {
  // split my cookie into array (;)
  var myCookieElements = document.cookie.split("; ");
  // ask every item in array == key I pass it as argument
  var i = 0;
  for (const item of myCookieElements) {
    //get first cookie in my cookies => [username="ali"] then split this into ["username" ,"ali"]

    if (item.split("=")[0] == key) {
      //return my first cookie => [username = "ali"]
      return item;
    }
  }
}

function getAllCookies() {
  return document.cookie;
}

var nameUser = getCookieValue("name");
//Display name of user
if (hasCookie("name")) {
  userInfo.style.display = "flex";
  userDom.innerHTML = nameUser;
}

var expire = new Date();
expire.setDate(expire.getDate() + 1);
function deleteCookie(key) {
  var expiry = new Date();
  expiry.setDate(expire.getDate() - 1);
  document.cookie = key + "=deleted; expires = " + expiry;
}

logoutBtn.addEventListener("click", logout);

function logout() {
  deleteCookie("name");
  deleteCookie("email");
  deleteCookie("password");
  deleteCookie("confirmPassword");

  setTimeout(() => {
    window.open("./register.html", "_self");
  }, 1500);
}

// Slider

var img = document.getElementsByTagName("img")[0];
var indx = img.getAttribute("src")[9];

console.log(indx);

var before = document.getElementsByTagName("button")[1];
var after = document.getElementsByTagName("button")[2];

function nextTO() {
  if (indx == 10) indx = 1;
  else indx++;
  img.setAttribute("src", "./images/" + indx + ".jpg");
}

function moveBack() {
  if (indx == 1) indx = 10;
  else indx--;
  img.setAttribute("src", "./images/" + indx + ".jpg");
}

before.onclick = moveBack;

after.onclick = nextTO;
/*
end slider */

/**
 * Start navbar
 */
var navLinks = document.querySelectorAll(".nav_link");
var windowPathName = window.location.pathname;

var home = document.querySelector("#home");
var product = document.querySelector("#product");
var about = document.querySelector("#about");
var contact = document.querySelector("#contact");

navLinks.forEach((navLink) => {
  if (navLink.href.includes(`${windowPathName}`)) {
    navLink.classList.add("active");
  }
});

/*
script top button
*/
const backToTopBtn = document.getElementById("backToTopBtn");

window.addEventListener("scroll", function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

backToTopBtn.addEventListener("click", scrollToTop);

function displayProducts() {
  var productContainer = "";

  productContainer += `
          <div class="pro">
          <img src="./images/35.jpg" alt="" />
          <div class="des">
            <span>${product.name}</span>
            <h5>Mouse</h5>
            <h4>$20</h4>
          </div>
          <a class="add-to-cart" href="#"
            ><i id="icon" class="bx bx-cart cart"></i
          ></a>
        </div>`;

  var cartbuttons = document.querySelectorAll("");
}
