window.addEventListener('load', async () => {
	const productsURL = 'https://61f2da932219930017f50933.mockapi.io/Products';
	const result = await fetch(productsURL);
	const products = await result.json();

	const productsContainer = document.querySelector('.products-container');

	const cards = products
		.map(
			(product) =>
				`<div class="card">
                 <div class="card-body sm">
                 <img class="card-img img-fluid" src="${product.image}" alt="Product Image"/>
                  <h5 class="card-title d-flex justify-content-center" style= "font-size: 1rem;">${product.name}</h5>
                  <p class="card-text d-flex justify-content-center">${product.price} €</p>
				  <div class="buttons">
                  <a href="details.html?product-id=${product.id}" class="main-btn">Details</a>
				  <button data-product-id=${product.id} class="main-btn">Add to cart</button>
               </div>
			   </div>
            </div>`
		)
		.join('');

	productsContainer.innerHTML = cards;
});

document.querySelector('.products-container').addEventListener('click', addToCart);
async function addToCart(event) {
	const addToCartBtn = event.target;
	let productId = addToCartBtn.getAttribute('data-product-id');

	const productsURL = `https://61f2da932219930017f50933.mockapi.io/Products/${productId}`;
	const result = await fetch(productsURL);
	const product = await result.json();

	let cart = [];
	if (localStorage.getItem('cart') == null) {
		cart = [{ ...product, noOfProducts: 1 }];
		updateCartInfo(cart);
	} else {
		cart = JSON.parse(localStorage.getItem('cart'));
		const productInCart = cart.find(
			(productFromCart) => productFromCart.id == product.id
		);
		if (productInCart != undefined) {
			productInCart.noOfProducts++;
			updateCartInfo(cart);
		} else {
			const productToBeAddedInCart = { ...product, noOfProducts: 1 };
			cart.push(productToBeAddedInCart);
			updateCartInfo(cart);
		}
	}
	if (cart.length > 0) localStorage.setItem('cart', JSON.stringify(cart));

	//update nav-cart
	function updateCartInfo(cart) {
		let cartInfo = 0;
		cart.forEach((product) => {
			cartInfo = cartInfo + product.noOfProducts;
		});
		document.querySelector('.cart-info').innerHTML = cartInfo;
	}
}

//search-bar
// let searchInput = document.getElementById('search-bar');
// let resultsContainer = document.querySelector('.products-container'); 
// let searchTerm = '';
// let searchProducts;

// searchInput.addEventListener('input', searchResults);

// async function searchResults(event) {
// 	searchInput = event.target;

// 	const searchURL = 'https://61f2da932219930017f50933.mockapi.io/Products/';
// 	const result = await fetch(searchURL);
// 	const productResult = await result.json();

// 	resultsContainer.innerHTML = '';

// 	resultsContainer.filter((product) =>
// 		product.name.toUpperCase().includes(searchTerm.toUpperCase())
// 	);
// 	resultsContainer.forEach((product) => {
// 		`<div class="card">
// 			 <div class="card-body">
// 			 <img class="card-img-top img-fluid" src="${product.image}" alt="Product Image"/>
// 			  <h5 class="card-title d-flex justify-content-center" style= "font-size: 1rem;">${product.name}</h5>
// 		    </div>
// 		    </div>`;
// 		resultsContainer.innerHTML = productResult;
// 		console.log(productResult)
// 	});
// }
