const productsContainer = document.getElementById("products");
const productDetails = document.getElementById("product-details");
const buyButton = document.getElementById("buy-button");
const categories = document.getElementById("categories").querySelectorAll("li");
const ordersContainer = document.getElementById("orders-container");
const ordersList = document.getElementById("orders-list");
const myOrdersButton = document.getElementById("my-orders-button");

let orders = JSON.parse(localStorage.getItem("orders")) || [];

function saveOrders() {
  localStorage.setItem("orders", JSON.stringify(orders));
}

function showMyOrders() {
  hideAllProducts();
  ordersContainer.style.display = "block";
  renderOrders();

  document.getElementById("categories").style.display = "none";
}

function renderOrders() {
  ordersList.innerHTML = "";
  orders.forEach((order, index) => {
    const orderItem = document.createElement("li");
    orderItem.innerHTML = `<strong>${
      order.date
    }</strong> - Ціна: ${order.price.toFixed(
      2
    )} грн <button onclick="viewOrderDetails(${index})">Деталі</button> <button onclick="deleteOrder(${index})">Видалити</button>`;
    ordersList.appendChild(orderItem);
  });
}
const productsList = {
  Холодильники: [
    {
      name: "Холодильник BOSCH",
      description: "Холодильник BOSCH KGN33NL206.",
      price: 21619,
      image: "https://content.rozetka.com.ua/goods/images/big/11017848.jpg",
    },
    {
      name: "Холодильник SAMSUNG",
      description: "Холодильник SAMSUNG RB33J3200SA/UA",
      price: 22799,
      image: "https://content.rozetka.com.ua/goods/images/big/359825406.jpg",
    },
    {
      name: "Холодильник Whirlpool",
      description: "Двокамерний холодильник Whirlpool W7X 81O OX 0",
      price: 19999,
      image: "https://content.rozetka.com.ua/goods/images/big/370229978.jpg",
    },
    {
      name: "Холодильник BEKO",
      description: "Двокамерний холодильник LG GW-B509SLKM",
      price: 23999,
      image: "https://content2.rozetka.com.ua/goods/images/big/322707574.jpg",
    },
    {
      name: "Холодильник LG",
      description: "Двокамерний холодильник LG GW-B509SLKM",
      price: 24599,
      image: "https://content2.rozetka.com.ua/goods/images/big/322707574.jpg",
    },
  ],
  // ТЕЛЕВИЗОРЫ
  Телевизоры: [
    {
      name: "Телевизор Hisense",
      description: "Телевизор Hisense 50A6BG",
      price: 14999,
      image: "https://content1.rozetka.com.ua/goods/images/big/362640501.jpg",
    },
    {
      name: "Телевизор LG",
      description: "Телевизор LG 50UR78006LK",
      price: 19999,
      image: "https://content1.rozetka.com.ua/goods/images/big/351024741.jpg",
    },
    {
      name: "Телевизор Samsung",
      description: "Телевизор Samsung UE50CU7100UXUA",
      price: 20499,
      image: "https://content1.rozetka.com.ua/goods/images/big/364929560.jpg",
    },
  ],
  //КОФЕМАШИНЫ
  Кофемашины: [
    {
      name: "Кофемашина KRUPS",
      description: "Кофемашина KRUPS Essential EA816570",
      price: 13999,
      image: "https://content2.rozetka.com.ua/goods/images/big/358934435.jpg",
    },
    {
      name: "Кофемашина PHILIPS",
      description: "Кофемашина PHILIPS Series 3200 EP3246/70",
      price: 19999,
      image: "https://content2.rozetka.com.ua/goods/images/big/266956279.jpg",
    },
    {
      name: "Кофемашина DELONGHI",
      description: "Кофемашина DELONGHI Dinamica Plus ECAM370.70.B ",
      price: 13499,
      image: "https://content1.rozetka.com.ua/goods/images/big/251791453.jpg",
    },
  ],
  //НОУТБУКИ
  Ноутбуки: [
    {
      name: "Ноутбук Apple",
      description:
        'Ноутбук Apple MacBook Air 13" M1 8/256GB 2020 (MGN63) Space Gray',
      price: 43499,
      image: "https://content1.rozetka.com.ua/goods/images/big/144249716.jpg",
    },
    {
      name: "Ноутбук ASUS",
      description: "Ноутбук ASUS Vivobook 15 X1500EA-BQ3733 (90NB0TY6-M040W0)",
      price: 17499,
      image: "https://content.rozetka.com.ua/goods/images/big/334343847.jpg",
    },
    {
      name: "Ноутбук Lenovo",
      description: "Ноутбук Lenovo IdeaPad Slim 3 15AMN8 (82XQ009HRA)",
      price: 22999,
      image: "https://content.rozetka.com.ua/goods/images/big/353726664.jpg",
    },
  ],
};

function viewOrderDetails(index) {
  const order = orders[index];
  alert(`Замовлення ${order.date}\n${order.details}`);
}

function deleteOrder(index) {
  const isConfirmed = confirm("Ви впевнені, що хочете видалити це замовлення?");
  if (isConfirmed) {
    orders.splice(index, 1);
    saveOrders();
    renderOrders();
  }
}

function hideAllProducts() {
  productsContainer.innerHTML = "";
  productDetails.style.display = "none";
  buyButton.style.display = "none";

  document.getElementById("categories").style.display = "block";
}

hideAllProducts();

categories.forEach((category) => {
  category.addEventListener("click", () => {
    hideAllProducts();
    const categoryName = category.textContent.trim();
    if (productsList[categoryName]) {
      showProductList(productsList[categoryName]);
    }
  });
});

function showProductList(products) {
  products.forEach((product) => {
    const productItem = document.createElement("li");
    productItem.textContent = product.name;
    productItem.onclick = () => {
      showProductDetails(product);
    };
    productsContainer.appendChild(productItem);
  });
}

function showProductDetails(product) {
  productDetails.querySelector("#product-description").textContent =
    product.description;
  productDetails.querySelector(
    "#product-price"
  ).textContent = `Ціна: ${product.price.toFixed(2)} грн`;

  const productImage = document.getElementById("product-image");
  productImage.src = product.image;

  buyButton.style.display = "block";
  buyButton.onclick = () => {
    buyProduct(product);
  };

  productDetails.style.display = "block";
}

function resetProductDetails() {
  productDetails.querySelector("#product-description").textContent = "";
  productDetails.querySelector("#product-price").textContent = "";
  productDetails.querySelector("#product-image").src = "";
}

function submitOrder(price) {
  const fullName = document.getElementById("fullName").value;
  const city = document.getElementById("city").value;
  const deliveryPoint = document.getElementById("deliveryPoint").value;
  const paymentMethod = document.getElementById("paymentMethod").value;
  const quantity = document.getElementById("quantity").value;
  const comment = document.getElementById("comment").value;
  const name = document.getElementById("name").value;
  if (!fullName || !city || !deliveryPoint || !paymentMethod || !quantity) {
    alert("Будь ласка, заповніть всі обов'язкові поля.");
    return;
  }

  const orderInfo = `Ім'я: ${fullName}\nМісто: ${city}\nСклад Нової пошти: ${deliveryPoint}\nСпосіб оплати: ${paymentMethod}\nНазва Товару: ${name}\nКількість: ${quantity}\nЦіна: ${price}\nКоментар: ${
    comment || "немає"
  }`;

  const order = {
    date: new Date().toLocaleString(),
    price: price * quantity,
    details: orderInfo,
  };

  orders.push(order);
  saveOrders();
  alert(`Ваше замовлення:\n${orderInfo}`);
}

function buyProduct(selectedProduct) {
  const { name, price } = selectedProduct;
  productsContainer.innerHTML = "";
  const orderFormContainer = document.createElement("div");
  orderFormContainer.id = "order-form";
  orderFormContainer.innerHTML = `
  <h2>Форма оформлення замовлення</h2>
  <form id="order-form">
    <label for="fullName">ПІБ покупця:</label>
    <input type="text" id="fullName" required />

    <label for="city">Місто:</label>
    <select id="city" required>
      <option value="Одеса">Одеса</option>
      <option value="Київ">Київ</option>
      <option value="Львів">Львів</option>
      <option value="Харьків">Харьків</option>
      <option value="Дніпро">Дніпро</option>
    </select>

    <label for="deliveryPoint">Склад Нової пошти:</label>
    <input type="text" id="deliveryPoint" required />

    <label for="paymentMethod">Спосіб оплати:</label>
    <select id="paymentMethod" required>
      <option value="Післяоплата">Післяоплата</option>
      <option value="Оплата банківською карткою">Оплата банківською карткою</option>
    </select>
    
    <label for="name">Назва товару:</label>
    <input type="text" id="name" value="${name}" readonly/>

    <label for="quantity">Кількість товару:</label>
    <input type="number" id="quantity" required />

    <label for="comment">Коментар до замовлення:</label>
    <textarea id="comment"></textarea>

    <button type="button" onclick="submitOrder(${price})">Підтвердити замовлення</button>
  </form>
`;
  productsContainer.appendChild(orderFormContainer);
}
