// This code is for generating a card in the app, with the intent of displaying content from a recipie object from 
// the recipie.js file.  The recipie object is an array of objects, each object contains a title, image, ingredients, instructions, and servingInfo.
// Further, it has a randomRecipe function that shuffles the cards based on the category of the recipie object.  The shuffle is constrained by the category of the recipie object.
// there's also a category function that determines which card the recipie goes on, nominally the Entrer is index 0, 
// the Side is index 1, and the Vegetable is index 2.
Data and Constraints
const categories = ['Entree', 'Side', 'Vegetable']

function showRecipeSection(sectionName, index, recipe = mainDish) {
  const displayChange = document.querySelector('.cardContainer').children[index].querySelector('.textInformation');
  const sections = ['ingredients', 'instructions', 'servingInfo'];
  
  const isCurrentlyVisible = displayChange.classList.contains('showText');
  // Update content based on visibility
  
  if (sectionName === displayChange.dataset.currentSection && isCurrentlyVisible) {
    // if its the same section and already visibile, hide it.
    console.log(`isCurrentlyVisible: ${isCurrentlyVisible}`)
    console.log(`sectionName: ${sectionName}, index: ${index}`)
    displayChange.classList.toggle('showText');
  }
  // if it's the igredients button, it needs to itterate through the nexted ingredients object.  
  else if (sectionName === 'ingredients') {
    // Handle ingredients section specifically
    console.log(`sectionName: ${sectionName}, index: ${index}`)
    console.log(`else if ${displayChange.classList}`)
    displayChange.innerHTML = recipe[index].ingredients.map(ingredient => `${ingredient.amount} : ${ingredient.ingredient}<br>`).join('');
    displayChange.dataset.currentSection = sectionName;
    displayChange.classList.remove(...sections.filter(section => section !== sectionName));
    displayChange.classList.add('showText');
  }
  
  else{
    //in this section, I am trying to display the instructions and servingInfo sections.
    console.log(`sectionName: ${sectionName}, index: ${index}`)
    console.log(`displayChange: ${displayChange}.dataset.currentSection: ${displayChange.dataset.currentSection}`)
    displayChange.classList.remove(...sections.filter(section => section !== sectionName));
    displayChange.innerHTML = mainDish[index][sectionName];
    displayChange.dataset.currentSection = sectionName;
    displayChange.classList.add('showText');
  }
}
// this const is targeting the cardContainer div to allow for the creation of the cards.
const cardContainer = document.querySelector('.cardContainer');

function createCard(recipeList){
    for(let i =0; i < recipeList.length; i++){
        const newCard = document.createElement('div');
        newCard.classList.add('card');
        var item = recipeList[i].title
        newCard.innerHTML = `
        <h2 id="cardTitle1">${recipeList[i].title}</h2>
        <img src="${recipeList[i].imageSrc}" alt="Recipe Image 1">
        <p class="textInformation showText ingredients">${recipeList[i].ingredients.map(ingredient => `${ingredient.amount} : ${ingredient.ingredient}<br>`).join('')}
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
// the onload function is used to load the cards when the page is loaded, in this case, the mainDish array is loaded to 3
// cards for three seperate categories of recipies: Entree, Side, and Vegetable.
window.onload = function(){
    createCard(mainDish);
}


// this function is used to lock the the content from the recipie object with the specific button on the card
// it looks to the index of the card and toggles the locked class on the card.
const lockCard = (index) => {
    const currentCard = cardContainer.children[index];
    currentCard.classList.toggle('locked');
}

// this function is used to favorite the the content from the recipie object with the specific button on the card
const favRecipe = (index) => {
    const currentCard = cardContainer.children[index];
    currentCard.classList.toggle('favorited');

}


// this function is used to shuffle the cards when the shuffle button is clicked, constrained by their category
// which is determined by the title of the card.  This in turn comes from the mainDish array.  long term we probably
// need to use index, or a more explicit ID to determine the category.
const randomRecipe = (item, index) => {
  let newShuffleArr = []; //new array for the selected type.

  const currentCard = recipes.find(recipe => recipe.title === item);
  const newCategory =  currentCard.category;// Use const for element selection
  console.log("currentItems", currentCard)
  console.log("newCategory", newCategory)

  newShuffleArr = recipes.filter(recipe => recipe.category === recipes[index].category);
  console.log("newShuffleArr", newShuffleArr)
  newShuffleArr = newShuffleArr.sort(() => Math.random() - 0.5);
  // console.log(newShuffleArr)
  // console.log(newShuffleArr[0])
  // currentCard.innerHTML = createCard(newShuffleArr[0]);
  const cardItems = document.querySelectorAll('.cardContainer .card');
  cardItems[index].innerHTML = `
  <h2 id="cardTitle1">${newShuffleArr[0].title}</h2>
  <img src="${newShuffleArr[0].imageSrc}" alt="Recipe Image 1">
  <p class="textInformation showText ingredients">${newShuffleArr[0].ingredients.map(ingredient => `${ingredient.amount} : ${ingredient.ingredient}<br>`).join('')}
  </p>
  <div class="bottomBar">
    <i class="material-symbols-outlined ingredients" onclick="showRecipeSection('ingredients', ${index})">Checklist</i>
    <i class="material-symbols-outlined instructions" onclick="showRecipeSection('instructions', ${index})">Turn_Right</i>
    <i class="material-symbols-outlined servinginfo" onclick="showRecipeSection('servingInfo', ${index})">Timer</i>
  </div>
  <div class="cardIcon">
    <i class="rollCard material-symbols-outlined" onclick="randomRecipe('${newShuffleArr[0].title}', ${index})">deployed_code</i>
    <i class="lockCard material-symbols-outlined" onclick="lockCard(${index}, recipes)">Lock</i>
    <i class="loveCard material-symbols-outlined" onclick="favRecipe(${index}, recipes)">Favorite</i>
  </div>
  `;
};

