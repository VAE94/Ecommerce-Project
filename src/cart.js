window.addEventListener('load', () => {
	const products = JSON.parse(localStorage.getItem('cart'));

	let total = 0;
	if (products) {
		products.forEach((product) => {
			total = total + Number(product.price);
			console.log(product.price);
		});

		const productCards = products
			.map(
				(product) =>
			`<div class="card w-75 mt-4">
              <div class="card-body mx-auto">
			  <img class="card-img-top img-fluid" style="width:250px;" src="${product.image}" alt="Product Image"/>
               <h6 class="card-title text-center mt-2">${product.name}</h6>
              <p class="card-text text-center">${product.price} €</p>
              <p class="card-text text-center">Quantity:
			  <button  data-product-id=${product.id} class="remove-products cart-btn"> - </button>
		    <span class="cart-products"> ${product.noOfProducts}</span>
			<button  data-product-id=${product.id} class="add-products cart-btn"> + </button>
			
			</p>
        </div>
        </div>`
			)
			.join('');

		let totalPriceCard = `<div class="mt-2 border-total" style="width:100px;">TOTAL: ${total} €</div>`;
		document.querySelector('.cart-container').innerHTML =
			productCards + totalPriceCard;
	}
});

const cartContainer = document.querySelector('.cart-container');
cartContainer.addEventListener('click', handleCartEvents);

function handleCartEvents(event) {
	const targetButton = event.target;
	let cart = JSON.parse(localStorage.getItem('cart'));

	if (targetButton.classList.contains('add-products')) {
		const productInCart = cart.find(
			(productFromCart) =>
				productFromCart.id == targetButton.getAttribute('data-product-id')
		);
		console.log(productInCart, 'product in cart');
		productInCart.noOfProducts++;
	} else if (targetButton.classList.contains('remove-products')) {
		console.log('butonul de minus');
		const productInCart = cart.find(
			(productFromCart) =>
				productFromCart.id == targetButton.getAttribute('data-product-id')
		);
		productInCart.noOfProducts--;
	}
}
