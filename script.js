const userCardsContainer = document.getElementById("userCards");
const cartContainer = document.getElementById("cartItems");
const totalPriceElement = document.getElementById("totalPrice");

let cart = []; // Savatchadagi mahsulotlar ro‘yxati
let totalPrice = 0; // Umumiy narx

  // Fake Store API'dan mahsulotlarni olish
  fetch("https://fakestoreapi.com/products?limit=10")
  .then((response) => response.json())
  .then((data) => {
    displayUsers(data);
  });

function displayUsers(users) {
  userCardsContainer.innerHTML = "";
  users.forEach((user) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <img src="${user.image}" alt="Mahsulot rasmi" width="75px">
        <h2>${user.title}</h2>
        <p><strong>Kategoriya:</strong> ${user.category}</p>
        <p><strong>Reyting:</strong> ${user.rating.rate} ⭐ (${user.rating.count} ta baho)</p>
        <p class="sent"><strong class="sent">Narxi:</strong> $${user.price}</p>
        <button onclick='addToCart("${user.title}", ${user.price})' class="send">Sotib olish</button> `;
    userCardsContainer.appendChild(card);
  });
}

// 🛒 Savatchaga mahsulot qo‘shish
function addToCart(title, price) {
  cart.push({ title, price }); // Savatchaga qo‘shish
  totalPrice += price; // Umumiy narxni yangilash
  updateCart(); // Savatchani ekranga chiqarish
}

// 🛒 Savatchani yangilash
function updateCart() {
  cartContainer.innerHTML = ""; // Oldingi savatchani tozalash
  cart.forEach((item, index) => {
    const cartItem = document.createElement("p");
    cartItem.innerHTML = `${item.title} - $${item.price} 
      <button class="dele" onclick="removeFromCart(${index})">❌</button>`;
    cartContainer.appendChild(cartItem);
  });
  totalPriceElement.innerText = `Umumiy narx: $${totalPrice.toFixed(2)}`;
}

// ❌ Savatchadan mahsulotni olib tashlash
function removeFromCart(index) {
  totalPrice -= cart[index].price; // Narxni kamaytirish
  cart.splice(index, 1); // Ro‘yxatdan o‘chirish
  updateCart(); // Yangilash
}



const shop = document.getElementById('shop').onclick = function(){
    const cart = document.getElementById('cart')
    cart.style.display = 'flex'
    if( cart.style.display === 'flex'){
      let shop = document.getElementById('shop');
      shop.style.display = 'none'
    }
    else{
      let shop = document.getElementById('shop');
      shop.style.display = 'flex'
    }
}

const close = document.getElementById('close').onclick = function(){
   const cart = document.getElementById('cart')
    cart.style.display = 'none'
    let shop = document.getElementById('shop');
      shop.style.display = 'flex'
}