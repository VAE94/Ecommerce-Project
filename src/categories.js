
let faceProducts = document.getElementById('face-products');

faceProducts.addEventListener('click', async () => {
    const productsURL = 'https://61fab05892093f0017ad99d0.mockapi.io/FACE';
	const result = await fetch(productsURL);
	const products = await result.json();

    const productContainer = document.querySelector('.products-container');

	const cards = products
		.map(
			(product) =>
				`<div class="card">
                 <div class="card-body">
                 <img class="card-img-top" src="${product.image}" alt="Product Image"/>
                  <h5 class="card-title d-flex justify-content-center" style= "font-size: 1rem;">${product.name}</h5>
                  <p class="card-text d-flex justify-content-center">${product.price} €</p>
                  <a href="details.html?product-id=${product.id}" class="main-btn">Details</a>
               </div>
            </div>`
		)
		.join('');
        

	productContainer.innerHTML = cards;


})

let makeUp = document.getElementById('makeup-products');

makeUp.addEventListener('click', async () => {
    const productsURL = 'https://61fab05892093f0017ad99d0.mockapi.io/MAKE-UP';
	const result = await fetch(productsURL);
	const products = await result.json();

    const productContainer = document.querySelector('.products-container');

	const cards = products
		.map(
			(product) =>
				`<div class="card">
                 <div class="card-body">
                 <img class="card-img-top" src="${product.image}" alt="Product Image"/>
                  <h5 class="card-title d-flex justify-content-center" style= "font-size: 1rem;">${product.name}</h5>
                  <p class="card-text d-flex justify-content-center">${product.price} €</p>
                  <a href="details.html?product-id=${product.id}" class="main-btn">Details</a>
               </div>
            </div>`
		)
		.join('');

	productContainer.innerHTML = cards;

})


let bodyProducts = document.getElementById('body-products');

bodyProducts.addEventListener('click', async () => {
    const productsURL = 'https://61fab05892093f0017ad99d0.mockapi.io/BODY';
	const result = await fetch(productsURL);
	const products = await result.json();

    const productContainer = document.querySelector('.products-container');

	const cards = products
		.map(
			(product) =>
				`<div class="card">
                 <div class="card-body">
                 <img class="card-img-top" src="${product.image}" alt="Product Image"/>
                  <h5 class="card-title d-flex justify-content-center" style= "font-size: 1rem;">${product.name}</h5>
                  <p class="card-text d-flex justify-content-center">${product.price} €</p>
                  <a href="details.html?product-id=${product.id}" class="main-btn">Details</a>
               </div>
            </div>`
		)
		.join('');

	productContainer.innerHTML = cards;

})

let hairProducts = document.getElementById('hair-products');

hairProducts.addEventListener('click', async () => {
    const productsURL = 'https://61fab05892093f0017ad99d0.mockapi.io/HAIR';
	const result = await fetch(productsURL);
	const products = await result.json();

    const productContainer = document.querySelector('.products-container');

	const cards = products
		.map(
			(product) =>
				`<div class="card">
                 <div class="card-body">
                 <img class="card-img-top" src="${product.image}" alt="Product Image"/>
                  <h5 class="card-title d-flex justify-content-center" style= "font-size: 1rem;">${product.name}</h5>
                  <p class="card-text d-flex justify-content-center">${product.price} €</p>
                  <a href="details.html?product-id=${product.id}" class="main-btn">Details</a>
               </div>
            </div>`
		)
		.join('');

	productContainer.innerHTML = cards;

})



