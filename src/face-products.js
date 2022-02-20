
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
                 <img class="card-img-top" src="${product.image}" alt="Product Image"/>
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
	} else {
		cart = JSON.parse(localStorage.getItem('cart'));
		const productInCart = cart.find((productFromCart) => productFromCart.id == product.id);
		if(productInCart != undefined){
			productInCart.noOfProducts++;
		}else{
			const productToBeAddedInCart = {...product, noOfProducts:1};
			cart.push(productToBeAddedInCart);
		}
	}

	localStorage.setItem('cart', JSON.stringify(cart));
}


