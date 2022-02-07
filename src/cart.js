window.addEventListener('load', () => {
	const products = JSON.parse(localStorage.getItem('cart'));
	
	let total = 0;
	if(products){
		products.forEach((product) => {
			total = total + Number(product.price);
			console.log(product.price);
		});	
	
	const productCards = products
		.map(
			(product) =>
		`<div class="card w-75 mt-4">
        <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">${product.price} €</p>
        <p class="card-text">Number of products:
			<button class="add-products cart-btn"> + </button>
		    <span class="cart-products"> ${product.noOfProducts}</span>
			<button class="remove-products cart-btn"> - </button>
			</p>
        </div>
        </div>`
		)
		.join('');

	let totalPriceCard = `<div> TOTAL: ${total} €</div>`;
	document.querySelector('.cart-container').innerHTML =
		productCards + totalPriceCard;
	}
});
