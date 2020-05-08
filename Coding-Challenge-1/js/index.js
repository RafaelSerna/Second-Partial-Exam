function fetchMeals(search) {
	let settings = {
		method : 'GET'
	}

	let url = "https://www.themealdb.com/api/json/v1/1/random.php"

	fetch(url, settings)
		.then(response => {
			if (response.status === 200) {
				return response.json();
			}
			else {
				throw new Error("Error retrieving meal");
			}
		})
		.then(responseJSON => {
			let meals = document.querySelector('.js-search-results');
			responseJSON.message.forEach(meal => {
				console.log(meal.strMeal);
				meals.innerHTML += `<p>${meal.strMeal}, ${meal.strArea}, ${meal.strInstructions}</p>`;
				meals.innerHTML += `<img src="${meal.strMealThumb}" />`;
			})
		})
		.catch(err => {
			console.log(err);
		})
}

function watchForm() {
	let submitButton = document.querySelector('.js-search-form');
	console.log(submitButton)
	submitButton.addEventListener('click', (event) => {
		event.preventDefault();
		let search = document.querySelector('#query').value;
		fetchMeals(search);
	});
}

function init() {
	watchForm();
}

init();