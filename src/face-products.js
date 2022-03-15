//get face products
window.addEventListener('load', async () => {

	const productsURL = 'https://61fab05892093f0017ad99d0.mockapi.io/FACE';
	const result = await fetch(productsURL);
	const products = await result.json();

	const productsContainer = document.querySelector('.categories-container');
	
	const cards = products
		.map(
			(product) =>
				`<div class="card">
                 <div class="card-body">
                 <img class="card-img" src="${product.image}" alt="Product Image"/>
                  <h5 class="card-title">${product.name}</h5>
                  <p class="card-text price">${product.price} €</p>
                  <div class="buttons">
                  <a href="details.html?product-id=${product.id}" class="main-btn btn-responsive">Details</a>
				  <button data-product-id=${product.id} class="main-btn btn-responsive">Add to cart</button>
               </div>
               </div>
            </div>`
		)
		.join('');
		
	productsContainer.innerHTML = cards;
});

//add to cart
document.querySelector('.categories-container').addEventListener('click', addToCart);
async function addToCart(event) {
	const addToCartBtn = event.target;
	let productId = addToCartBtn.getAttribute('data-product-id');

	const productsURL = `https://61f2da932219930017f50933.mockapi.io/Products/${productId}`;
	const result = await fetch(productsURL);
	const product = await result.json();

	let cart;
	if (localStorage.getItem('cart') == null) {
		cart = [{...product, noOfProducts: 1}];
		updateCartInfo();
	} else {
		cart = JSON.parse(localStorage.getItem('cart'));
		const productInCart = cart.find((productFromCart) => productFromCart.id == product.id);
		if(productInCart != undefined){
			productInCart.noOfProducts++;
			updateCartInfo();
		}else{
			const productToBeAddedInCart = {...product, noOfProducts:1};
			cart.push(productToBeAddedInCart);
			updateCartInfo();
		}
	}

	if (cart.length > 0) localStorage.setItem('cart', JSON.stringify(cart));

	//update cart-info
	function updateCartInfo() {
		let cartInfo = 0;
		cart.forEach((product) => {
			cartInfo = cartInfo + product.noOfProducts;
		});
		document.querySelector('.cart-info').innerHTML = cartInfo;
	}
}


