window.addEventListener('load', async () => {
	let searchParamString = window.location.search;

	const searchParam = new URLSearchParams(searchParamString);
	const productId = searchParam.get('product-id');

	const productsURL = `https://61f2da932219930017f50933.mockapi.io/Products/${productId}`;
	const result = await fetch(productsURL);
	const product = await result.json();

	const productCard = `
            <div class="card-details">
			<div class="card-body-details">
            <img class="card-img" src="${product.image}" alt="Product Image"/>
	  			<h5 class="card-title-details">${product.name}</h5>
                <p class="card-text-details">${product.price}</p>
	  			<p class="card-description">${product.description}</p>
	  			<button data-product-id=${product.id} class="btn-cart">Add to cart</button>
			</div>
 		</div>`;

	document.querySelector('.product-details').innerHTML = productCard;
});

document.querySelector('.product-details').addEventListener('click', addToCart);
async function addToCart(event) {
	const addToCartBtn = event.target;
	let productId = addToCartBtn.getAttribute('data-product-id');
    
    const productsURL = `https://61f2da932219930017f50933.mockapi.io/Products/${productId}`;
	const result = await fetch(productsURL);
	const product = await result.json();

	let cart;
	if (localStorage.getItem('cart') == null) {
		cart = [product];
	} else {
		cart = JSON.parse(localStorage.getItem('cart'));
		cart.push(product);
	}

	console.log(cart);

	localStorage.setItem('cart', JSON.stringify(cart));
}

