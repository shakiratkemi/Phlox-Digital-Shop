const prevElement = document.querySelector(".arrow-left");
const nextElement = document.querySelector(".arrow-right");
const pageOneElement = document.querySelector(".one");
const pageTwoElement = document.querySelector(".two");
const productsElement = document.querySelectorAll(".products");
let currentPage = 1;
let productsPerPage = 9;
let cart = [];

function Product(id, image, title, price) {
  this.id = id;
  this.image = image;
  this.title = title;
  this.price = price;
  console.log(this);
}

function Cart(product, quantity) {
  this.product = product;
  this.quantity = quantity;
}

const products = [
  new Product("1", "./images/beats.jpg", "Beats", "$995"),
  new Product("2", "./images/rocky.jpg", "Rocky Mountain", "$8,250"),
  new Product(
    "3",
    "./images/game console.jpg",
    "Game Console Controller Cable",
    "$8,250"
  ),
  new Product(
    "4",
    "./images/elitebook tablet.jpg",
    "White EliteBook Tablet 810",
    "$9,950"
  ),
  new Product("5", "./images/wear c7.jpg", "Gore Wear C7", "$449"),
  new Product(
    "6",
    "./images/wireless audio.jpg",
    "Wireless Audio System Multiroom 360",
    "$8,250"
  ),
  new Product("7", "./images/beats2.jpg", "Beats", "$9,950"),
  new Product(
    "8",
    ".//images/smartwatch.jpg",
    "Smartwatch 20 LTE Wifi",
    "$499"
  ),
  new Product("9", "./images/rocky.jpg", "Rocky Mountain", "$8,250"),
  new Product("10", "./images/wear c7.jpg", "Gore Wear C7", "$449"),
  new Product(
    "11",
    "./images/wireless audio.jpg",
    "Wireless Audio System Multiroom 360",
    "$8,250"
  ),
  new Product("12", "./images/beats2.jpg", "Beats", "$9,950"),
  new Product(
    "13",
    ".//images/smartwatch.jpg",
    "Smartwatch 20 LTE Wifi",
    "$499"
  ),
  new Product("14", "./images/rocky.jpg", "Rocky Mountain", "$8,250"),
  new Product("15", "./images/beats.jpg", "Beats", "$995"),
  new Product("16", "./images/rocky.jpg", "Rocky Mountain", "$8,250"),
  new Product(
    "17",
    "./images/game console.jpg",
    "Game Console Controller Cable",
    "$8,250"
  ),
];

const newProductContainer = document.querySelector(".best-products-images");

function displayProducts(productList) {
  newProductContainer.innerHTML = "";
  productList.forEach((product) => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("products");
    newDiv.setAttribute("data-productId", product.id);
    newDiv.innerHTML = `          
            <img src="${product.image}" alt="${product.title}" width="300" />
            <div class="products-text">${product.title}</div>
          <div class="products-price">
<button class="cart" data-productId="${product.id}">Add to Cart</button>
           ${product.price}
           </div>
          </div>`;
    newProductContainer.appendChild(newDiv);
  });
}
displayProducts(products);

const addToCartButtons = document.querySelectorAll(".cart");
addToCartButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    console.log(event.target);
    addToCart(event.target.dataset.productid);
  });
});

function addToCart(productId) {
  console.log("productId", productId);
  const product = products.find((p) => p.id == productId);
  cart.push(new Cart(product, 1));
  updateCart();
}

function updateCart() {
  const cartCount = document.querySelector(".cart-number");
  const cartList = document.querySelector(".cart-list-total");
  // const existingCartItem = cart.find(
  //   (cartItem) => cartItem.product.id === product.id
  // );
  // if (existingCartItem) {
  //   existingCartItem.quantity += 1;
  // } else {
  //   cart.push({ product, quantity: 1 });
  // }
  const totalItems = cart.reduce((acc, curr) => acc + curr.quantity, 0);
  cartCount.textContent = totalItems;

  cartList.innerHTML = "";
  cart.forEach((cartItem) => {
    if (cartItem.product) {
      const productDiv = document.createElement("div");
      productDiv.classList.add("cart-list");
      productDiv.innerHTML = `
      <img src="${cartItem.product.image}" alt="${cartItem.product.title}">
      <div class="cart-list-details">
        <div>${cartItem.product.title}</div>
        <div class="cart-list-price">${cartItem.quantity} * ${cartItem.product.price}</div>
        <i class="fa-solid fa-xmark cart-list-remove"></i>
      </div>  
      </div> 
    `;
      cartList.appendChild(productDiv);
    }
  });
  const subtotalDiv = document.createElement("div");
  subtotalDiv.classList.add("cart-list-subtotal");
  subtotalDiv.innerHTML = `
      <div>Sub Total</div>
      <div class="subtotal-amount">${calculateSubtotal()}</div>
    `;
  cartList.appendChild(subtotalDiv);
}

// function calculateSubtotal() {
//   const subtotal = cart.reduce((acc, cartItem) => {
//     if (cartItem.product && typeof cartItem.product.price === "number") {
//       return acc + cartItem.quantity * cartItem.product.price;
//     } else {
//       console.error("Invalid product or price:", cartItem);
//       return acc;
//     }
//   }, 0);
//   return subtotal;
// }

function calculateSubtotal() {
  const subtotal = cart.reduce((acc, cartItem) => {
    if (cartItem.product && cartItem.product.price === "number") {
      return acc + cartItem.quantity * cartItem.product.price;
    }
  }, 0);
  return subtotal;
}

const cartIcon = document.querySelector(".cart-icon");
cartIcon.addEventListener("click", () => {
  console.log(cart);
  const cartList = document.querySelector(".cart-list-total");
  if (cartList.style.display === "none") {
    cartList.style.display = "block";
  } else {
    cartList.style.display = "none";
  }
});
updateCart();

function searchProducts() {
  const search = document
    .querySelector(".search-container input")
    .value.toLowerCase();
  const updatedProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search)
  );
  displayProducts(updatedProducts);
  console.log("search");
}
const searchInput = document.querySelector(".search-container input");
searchInput.addEventListener("input", searchProducts);
searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    searchProducts();
  }
});

function showProductCategories() {
  const toggleIcon = document.querySelector(".toggle-icon");
  const categoryList = document.querySelector(".category-list");
  toggleIcon.addEventListener("click", function () {
    if (
      categoryList.style.display === "none" ||
      categoryList.style.display === ""
    ) {
      categoryList.style.display = "block";
    } else {
      categoryList.style.display = "none";
    }
  });
}
document.addEventListener("DOMContentLoaded", showProductCategories);

function productsForCurrentPage() {
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = Math.min(startIndex + productsPerPage, products.length);
  let pageInfoParagraph = document.querySelector(".page-info");
  pageInfoParagraph.innerHTML = `Showing ${startIndex + 1}-${endIndex} of ${
    products.length
  } results `;
  return products.slice(startIndex, endIndex);
}

function nextPage() {
  if (currentPage * productsPerPage < products.length) {
    currentPage++;
    displayProducts(productsForCurrentPage());
  }
  console.log("next");
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    displayProducts(productsForCurrentPage());
  }
  console.log("prev");
}

function showSidebar() {
  const sidebar = document.querySelector(".info-sidebar");
  sidebar.style.display = "flex";
}

function hideSidebar() {
  const sidebar = document.querySelector(".info-sidebar");
  sidebar.style.display = "none";
}

pageOneElement.addEventListener("click", prevPage);
pageTwoElement.addEventListener("click", nextPage);
nextElement.addEventListener("click", nextPage);
prevElement.addEventListener("click", prevPage);
