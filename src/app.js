// window.addEventListener('load', async () => {
// 	const productsURL = 'https://61fab05892093f0017ad99d0.mockapi.io/HAIR';
// 	const result = await fetch(productsURL);
// 	const products = await result.json();

// 	const productContainer = document.querySelector('.products-container');

// 	const cards = products
// 		.map(
// 			(product) =>
// 				`<div class="card">
//                  <div class="card-body">
//                  <img class="card-img-top" src="${product.image}" alt="Product Image"/>
//                   <h5 class="card-title d-flex justify-content-center" style= "font-size: 1rem;">${product.name}</h5>
//                   <p class="card-text d-flex justify-content-center">${product.price} €</p>
//                   <a href="details.html?product-id=${product.id}" class="btn btn-primary ">Details</a>
//                </div>
//             </div>`
// 		)
// 		.join('');

// 	productContainer.innerHTML = cards;
	
// });

