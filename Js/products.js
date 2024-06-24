var viewBtns = [
  {
    id: 1,
    name: "Mobile",
  },
  {
    id: 2,
    name: "Laptop",
  },
  {
    id: 3,
    name: "Keyboard",
  },
  {
    id: 4,
    name: "Mouse",
  },
];

var viewCategories = document.getElementById("cat");

var rootItem = document.getElementById("root");
var chosenCategory = btns[0];

// var chosenProduct = productData[0];
var productData = {
  phones: [
    {
      id: 1,
      image: "/images/18.jpg",
      title: "Iphone 14 pro",
      price: 500,
      category: "mobile",
    },
    {
      id: 1,
      image: "/images/7.jpg",
      title: "Android 14 pro",
      price: 400,
      category: "mobile",
    },
    {
      id: 1,
      image: "/images/2.jpg",
      title: "Oppo 14 pro",
      price: 450,
      category: "mobile",
    },
  ],
  laptops: [
    {
      id: 2,
      image: "/images/10.jpg",
      title: "Apple corei7",
      price: 500,
      category: "laptop",
    },

    {
      id: 2,
      image: "/images/14.jpg",
      title: "Lenovo 320",
      price: 500,
      category: "laptop",
    },
    {
      id: 2,
      image: "/images/17.jpg",
      title: "Dell 530",
      price: 500,
      category: "laptop",
    },
  ],
  keyboards: [
    {
      id: 3,
      image: "/images/9.jpg",
      title: "Keyboard dell",
      price: 500,
      category: "keyboard",
    },
    {
      id: 3,
      image: "/images/31.jpg",
      title: "Zerox",
      price: 500,
      category: "keyboard",
    },
    {
      id: 3,
      image: "/images/34.jpg",
      title: "Maro pro 546",
      price: 50,
      category: "keyboard",
    },
  ],
  mouses: [
    {
      id: 4,
      image: "/images/35.jpg",
      title: "Mouse 14 pro",
      price: 50,
      category: "mouse",
    },
    {
      id: 4,
      image: "/images/36.jpg",
      title: "Hp pro",
      price: 40,
      category: "mouse",
    },
    {
      id: 4,
      image: "/images/40.jpg",
      title: "mouse asus 230",
      price: 60,
      category: "mouse",
    },
  ],
};

const categoryButtons = document.querySelectorAll(".category-btn");
const productContainer = document.getElementById("root");
var selectedCategory;

// Function to display products based on category

function displayProducts(category) {
  var i = 0;
  selectedCategory = category;
  productContainer.innerHTML = "";
  const products = productData[category];
  products.forEach((product, index) => {
    var productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
    <div class="box"
    <div class="img-box">
    <img class="images" src=${product.image}>
    </div>
    <div class="bottom">
    <p>${product.title}</p>
    <h2>$ ${product.price}</h2>
    <button class="add-to-cart" onclick="addToCart('${product.title}' )">Add to cart</button> 
    </div>
    </div>`;
    productContainer.appendChild(productCard);
    productContainer.classList.remove("hidden");
  });
}

categoryButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const category = this.getAttribute("data-category");
    displayProducts(category);
  });
});

//function display all products
displayProducts("phones");

var addToCartBtns = document.querySelectorAll(".addToCartBtn");
var cartItemsList = document.getElementById("cartItems");

var cart = JSON.parse(window.localStorage.getItem("cart")) || [];

function addToCart(title) {
  var product = productData[selectedCategory].filter(
    (product) => product.title == title
  )[0];

  if (cart.find((p) => p.title == product.title)) {
    alert("Product already in cart");
  } else if (product) {
    cart.push({ ...product, quantity: 1 });
    window.localStorage.setItem("cart", JSON.stringify(cart));
    updateCounter();
    console.log(cart);
  }
  displayCart();
}
updateCounter();
function updateCounter() {
  var counter = document.getElementById("cartCounter");
  counter.innerText = `${cart.length}`;
}
window.onload = () => {
  displayCart(productData);

  // Add event listeners to "Add to Cart" buttons
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const title = parseFloat(button.getAttribute(`${productData.title}`));
      addToCart(title);
    });
  });
};
