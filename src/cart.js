window.addEventListener('load', () => {
	const products = JSON.parse(localStorage.getItem('cart'));

	let total = 0;
	products.forEach((product) => {
		total = total + Number(product.price);
		console.log(product.price);
	});

	console.log('test', total);

	const productCards = products
		.map(
			(product) =>
				`<div class="card w-75">
      <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">${product.price}</p>
      </div>
    </div>`
		)
		.join('');

	let totalPriceCard = `<div>${total}</div>`;
	document.querySelector('.cart-container').innerHTML =
		productCards + totalPriceCard;
});
