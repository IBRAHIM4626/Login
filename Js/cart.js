var cart = JSON.parse(window.localStorage.getItem("cart")) || [];
var openCart = document.getElementById("openCart");
var cartPopup = document.querySelector(".dispCart");

openCart.addEventListener("click", () => {
  cartPopup.classList.add("show");
  displayCart();
});
function displayCart() {
  const cartContainer = document.getElementById("cartItm");
  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    const cartTable = document.createElement("table");
    cartTable.style.width = "100%";
    cartTable.border = "1";
    const headerRow = document.createElement("tr");
    headerRow.innerHTML = `
          <th>Item</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
      `;
    cartTable.appendChild(headerRow);

    let totalPrice = 0;
    cart.forEach((item) => {
      const itemTotal = item.price * item.quantity;
      totalPrice += itemTotal;
      const row = document.createElement("tr");
      row.innerHTML = `
            <td class="title">${item.title}</td>
            <td class="price">$${item.price.toFixed(2)}</td>
            <td>
            <button class="decrease">-</button>
            ${item.quantity}
            <button class="increase">+</button>
            </td>
            <td>$${itemTotal.toFixed(2)}</td>
        `;
      cartTable.appendChild(row);
    });
    const totalRow = document.createElement("tr");
    totalRow.innerHTML = `
          <td colspan="3"><strong>Total</strong></td>
          <td><strong>$${totalPrice.toFixed(2)}</strong></td>
      `;
    cartTable.appendChild(totalRow);
    cartContainer.appendChild(cartTable);
  }
}
cartPopup.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.classList.contains("dispCart")) {
    cartPopup.classList.remove("show");
  }
  if (e.target.classList.contains("increase")) {
    const item = e.target.parentElement.parentElement;
    const title = item.querySelector("td.title").textContent;
    increaseItem(title);
  } else if (e.target.classList.contains("decrease")) {
    const item = e.target.parentElement.parentElement;
    const title = item.querySelector("td.title").textContent;
    decreaseItem(title);
  }
});

function increaseItem(title) {
  cart.forEach((item) => {
    if (item.title === title) {
      item.quantity++;
    }
  });
  window.localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

function decreaseItem(title) {
  cart.forEach((item) => {
    if (item.title === title) {
      item.quantity--;
      if (item.quantity === 0) {
        cart.splice(cart.indexOf(item), 1);
      }
    }
  });
  window.localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

updateCounter();

function updateCounter() {
  var counter = document.getElementById("cartCounter");
  counter.innerText = `${cart.length}`;
}
