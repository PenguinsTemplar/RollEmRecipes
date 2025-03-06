const categories = ['Entree', 'Side', 'Vegetable'];

const cardContainer = document.querySelector('.cardContainer');

window.onload = function () {
	createCard(mainDish);
};

function createCard(recipeList) {
	for (let i = 0; i < recipeList.length; i++) {
		const newCard = document.createElement('div');
		newCard.classList.add('card');
		var item = recipeList[i].title;
		newCard.innerHTML = `
      <h2 id="cardTitle1">${recipeList[i].title}</h2>
      <img src="${recipeList[i].imageSrc}" alt="Recipe Image 1">
      <p class="textInformation showText ingredients">${recipeList[
				i
			].ingredients
				.map(
					(ingredient) => `${ingredient.amount} : ${ingredient.ingredient}<br>`
				)
				.join('')}
      </p>
      <div class="bottomBar">
        <i class="material-symbols-outlined ingredients" onclick="showRecipeSection('ingredients', ${i})">Checklist</i>
        <i class="material-symbols-outlined instructions" onclick="showRecipeSection('instructions', ${i})">Turn_Right</i>
        <i class="material-symbols-outlined servinginfo" onclick="showRecipeSection('servingInfo', ${i})">Timer</i>
      </div>
      <div class="cardIcon">
        <i class="rollCard material-symbols-outlined" onclick="randomRecipe('${item}', ${i})">deployed_code</i>
        <i class="lockCard material-symbols-outlined" onclick="lockCard(${i}, recipes)">Lock</i>
        <i class="loveCard material-symbols-outlined" onclick="favRecipe(${i}, recipes)">Favorite</i>
      </div>
      `;
		cardContainer.appendChild(newCard);
	}
}

function showRecipeSection(sectionName, index, recipe = mainDish) {
	const displayChange = document
		.querySelector('.cardContainer')
		.children[index].querySelector('.textInformation');
	const sections = ['ingredients', 'instructions', 'servingInfo'];

	const isCurrentlyVisible = displayChange.classList.contains('showText');

	if (
		sectionName === displayChange.dataset.currentSection &&
		isCurrentlyVisible
	) {
		console.log(`isCurrentlyVisible: ${isCurrentlyVisible}`);
		console.log(`sectionName: ${sectionName}, index: ${index}`);
		displayChange.classList.toggle('showText');
	} else if (sectionName === 'ingredients') {
		console.log(`sectionName: ${sectionName}, index: ${index}`);
		console.log(`else if ${displayChange.classList}`);
		displayChange.innerHTML = recipe[index].ingredients
			.map(
				(ingredient) => `${ingredient.amount} : ${ingredient.ingredient}<br>`
			)
			.join('');
		displayChange.dataset.currentSection = sectionName;
		displayChange.classList.remove(
			...sections.filter((section) => section !== sectionName)
		);
		displayChange.classList.add('showText');
	} else {
		console.log(`sectionName: ${sectionName}, index: ${index}`);
		console.log(
			`displayChange: ${displayChange}.dataset.currentSection: ${displayChange.dataset.currentSection}`
		);
		displayChange.classList.remove(
			...sections.filter((section) => section !== sectionName)
		);
		displayChange.innerHTML = mainDish[index][sectionName];
		displayChange.dataset.currentSection = sectionName;
		displayChange.classList.add('showText');
	}
}

const randomRecipe = (item, index) => {
	let newShuffleArr = [];

	const currentCard = recipes.find((recipe) => recipe.title === item);
	const newCategory = currentCard.category;
	console.log('currentItems', currentCard);
	console.log('newCategory', newCategory);

	newShuffleArr = recipes.filter(
		(recipe) => recipe.category === recipes[index].category
	);
	console.log('newShuffleArr', newShuffleArr);
	newShuffleArr = newShuffleArr.sort(() => Math.random() - 0.5);
	const cardItems = document.querySelectorAll('.cardContainer .card');
	cardItems[index].innerHTML = `
  <h2 id="cardTitle1">${newShuffleArr[0].title}</h2>
  <img src="${newShuffleArr[0].imageSrc}" alt="Recipe Image 1">
  <p class="textInformation showText ingredients">${newShuffleArr[0].ingredients
		.map((ingredient) => `${ingredient.amount} : ${ingredient.ingredient}<br>`)
		.join('')}
  </p>
  <div class="bottomBar">
    <i class="material-symbols-outlined ingredients" onclick="showRecipeSection('ingredients', ${index})">Checklist</i>
    <i class="material-symbols-outlined instructions" onclick="showRecipeSection('instructions', ${index})">Turn_Right</i>
    <i class="material-symbols-outlined servinginfo" onclick="showRecipeSection('servingInfo', ${index})">Timer</i>
  </div>
  <div class="cardIcon">
    <i class="rollCard material-symbols-outlined" onclick="randomRecipe('${
			newShuffleArr[0].title
		}', ${index})">deployed_code</i>
    <i class="lockCard material-symbols-outlined" onclick="lockCard(${index}, recipes)">Lock</i>
    <i class="loveCard material-symbols-outlined" onclick="favRecipe(${index}, recipes)">Favorite</i>
  </div>
  `;
};

const lockCard = (index) => {
	const currentCard = cardContainer.children[index];
	currentCard.classList.toggle('locked');
};

const favRecipe = (index) => {
	const currentCard = cardContainer.children[index];
	currentCard.classList.toggle('favorited');
};
