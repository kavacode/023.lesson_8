
const categories = document.getElementById('categories').querySelectorAll('li');
const productsLists = document.getElementById('products').querySelectorAll('ul');


function hideAllProducts() {
	productsLists.forEach(list => {
		list.style.display = 'none';
	});
}


hideAllProducts();


categories.forEach((category, index) => {
	category.addEventListener('click', () => {

		hideAllProducts();


		productsLists[index].style.display = 'block';
	});
});

function buyProduct(productName) {

	const selectedProduct = productsData.find(product => product.name === productName);


	const productDetails = document.getElementById('product-details');
	productDetails.querySelector('#product-description').textContent = selectedProduct.description;
	productDetails.querySelector('#product-price').textContent = `Ціна: ${selectedProduct.price.toFixed(2)} грн`;

	const productImage = productDetails.querySelector('#product-image');
	productImage.src = selectedProduct.image;


	const buyButton = productDetails.querySelector('#buy-button');
	buyButton.style.display = 'block';
	buyButton.onclick = () => {
		 alert('Поздровляю, вы купили товар');
		 buyButton.style.display = 'none';
		 resetProductDetails(productDetails);
		 hideAllProducts();
	};
}

function resetProductDetails(productDetails) {
	productDetails.querySelector('#product-description').textContent = '';
	productDetails.querySelector('#product-price').textContent = '';
	productDetails.querySelector('#product-image').src = ''; 
}



const productsData = [
	{
		name: 'Холодильник BOSCH',
		description: 'Холодильник BOSCH KGN33NL206.',
		price: 21619,
		image: 'https://content.rozetka.com.ua/goods/images/big/11017848.jpg'
	},
	{
		name: 'Холодильник SAMSUNG',
		description: 'Холодильник SAMSUNG RB33J3200SA/UA',
		price: 22799,
		image: 'https://content.rozetka.com.ua/goods/images/big/359825406.jpg'
	},
	{
		name: 'Холодильник Whirlpool',
		description: 'Двокамерний холодильник Whirlpool W7X 81O OX 0',
		price: 19999,
		image: 'https://content.rozetka.com.ua/goods/images/big/370229978.jpg'
	},
	{
		name: 'Холодильник BEKO',
		description: 'Двокамерний холодильник LG GW-B509SLKM',
		price: 23999,
		image: 'https://content2.rozetka.com.ua/goods/images/big/322707574.jpg'
	},
	{
		name: 'Холодильник LG',
		description: 'Двокамерний холодильник LG GW-B509SLKM',
		price: 24599,
		image: 'https://content2.rozetka.com.ua/goods/images/big/322707574.jpg'
	},
	// ТЕЛЕВИЗОРЫ
	{
		name: 'Телевизор Hisense',
		description: 'Телевизор Hisense 50A6BG',
		price: 14999,
		image: 'https://content1.rozetka.com.ua/goods/images/big/362640501.jpg'
	},
	{
		name: 'Телевизор LG',
		description: 'Телевизор LG 50UR78006LK',
		price: 19999,
		image: 'https://content1.rozetka.com.ua/goods/images/big/351024741.jpg'
	},
	{
		name: 'Телевизор Samsung',
		description: 'Телевизор Samsung UE50CU7100UXUA',
		price: 20499,
		image: 'https://content1.rozetka.com.ua/goods/images/big/364929560.jpg'
	},
	//КОФЕМАШИНЫ
	{
		name: 'Кофемашина KRUPS',
		description: 'Кофемашина KRUPS Essential EA816570',
		price: 13999,
		image: 'https://content2.rozetka.com.ua/goods/images/big/358934435.jpg'
	},
	{
		name: 'Кофемашина PHILIPS',
		description: 'Кофемашина PHILIPS Series 3200 EP3246/70',
		price: 19999,
		image: 'https://content2.rozetka.com.ua/goods/images/big/266956279.jpg'
	},
	{
		name: 'Кофемашина DELONGHI',
		description: 'Кофемашина DELONGHI Dinamica Plus ECAM370.70.B ',
		price: 13499,
		image: 'https://content1.rozetka.com.ua/goods/images/big/251791453.jpg'
	},
	//НОУТБУКИ
	{
		name: 'Ноутбук Apple',
		description: 'Ноутбук Apple MacBook Air 13" M1 8/256GB 2020 (MGN63) Space Gray',
		price: 43499,
		image: 'https://content1.rozetka.com.ua/goods/images/big/144249716.jpg'
	},
	{
		name: 'Ноутбук ASUS',
		description: 'Ноутбук ASUS Vivobook 15 X1500EA-BQ3733 (90NB0TY6-M040W0)',
		price: 17499,
		image: 'https://content.rozetka.com.ua/goods/images/big/334343847.jpg'
	},
	{
		name: 'Ноутбук Lenovo',
		description: 'Ноутбук Lenovo IdeaPad Slim 3 15AMN8 (82XQ009HRA)',
		price: 22999,
		image: 'https://content.rozetka.com.ua/goods/images/big/353726664.jpg'
	},
];

