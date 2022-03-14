// search-bar
let searchInput = document.getElementById('search-bar');
let resultsContainer = document.querySelector('.products-container'); 


searchInput.addEventListener('input', searchResults);

async function searchResults(event) {
	event.target.searchInput;
	console.log(event.target);
	const searchURL = 'https://61f2da932219930017f50933.mockapi.io/Products/';
	const result = await fetch(searchURL);
	const productsResult = await result.json();


     const filterProducts = productsResult.filter((product) =>
		product.name.toUpperCase().includes('input')
	)


	  const cardsSearch = productsResult.map (
		(product) => 
			`<div class="card">
			 <div class="card-body">
			 <img class="card-img-top img-fluid" src="${product.image}" alt="Product Image"/>
			  <h5 class="card-title d-flex justify-content-center" style= "font-size: 1rem;">${product.name}</h5>
		    </div>
		    </div>`
	
	)
	.join('');
	resultsContainer.innerHTML = filterProducts + cardsSearch;
	console.log(filterProducts);
}

export default searchResults;