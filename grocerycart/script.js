const itemNameInput = document.getElementById("itemName");
const itemPriceInput = document.getElementById("itemPrice");
const addBtn = document.getElementById("addBtn");
const cartList = document.getElementById("cartList");
const totalPriceDisplay = document.getElementById("totalPrice");

let cart = [];

addBtn.addEventListener("click", () => {
  const name = itemNameInput.value.trim();
  const price = parseFloat(itemPriceInput.value);

  if (name === "" || isNaN(price) || price <= 0) {
    alert("Please enter a valid item and price!");
    return;
  }

  const item = { name, price };
  cart.push(item);
  renderCart();

  // Clear inputs
  itemNameInput.value = "";
  itemPriceInput.value = "";
});

function renderCart() {
  cartList.innerHTML = "";

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - Rs ${item.price.toFixed(2)}
      <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
    `;
    cartList.appendChild(li);
  });

  updateTotal();
}

function removeItem(index) {
  cart.splice(index, 1);
  renderCart();
}

function updateTotal() {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  totalPriceDisplay.textContent = total.toFixed(2);
}
