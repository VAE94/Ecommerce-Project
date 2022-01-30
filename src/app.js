window.addEventListener('load', async () => {
	const productsURL = 'https://61f2da932219930017f50933.mockapi.io/Products';
	const result = await fetch(productsURL);
	const products = await result.json();

	const productContainer = document.querySelector('.products-container');

	const cards = products
		.map(
			(product) =>
				`<div class="card" style="width: 18rem;">
                 <div class="card-body">
                  <img src="${product.image}"/>
                  <h5 class="card-title">${product.name}</h5>
                  <p class="card-text">${product.price}</p>
                  <a href="details.html?product-id=${product.id}" class="btn btn-primary">Details</a>
               </div>
            </div>`
		)
		.join('');

	productContainer.innerHTML = cards;
});

