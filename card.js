//this file is intended to generate the HTML elements for the cards that will be displayed on the main page.  it should iterate through the recipe.js
//file to get the text and images for each recipe.  it should also include the event listeners for the icons on the bottom bar of each card.
//the ingredients are a nested object in the recipe object.  they have to be handled differently than the other sections.
//poking this to see about synching it.
const categories = ['Entree', 'Side', 'Vegetable']
// ******* I think setting the recipe to mainDish is a mistake, it needs to be the mainDish onload, after that it should all be recipes. can this be an or?*******
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
    console.log(`sectionName: ${sectionName}, index: ${index}`)
    console.log(`displayChange: ${displayChange}.dataset.currentSection: ${displayChange.dataset.currentSection}`)
    displayChange.classList.remove(...sections.filter(section => section !== sectionName));
    displayChange.innerHTML = mainDish[index][sectionName];
    displayChange.dataset.currentSection = sectionName;
    displayChange.classList.add('showText');
  }
}

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

window.onload = function(){
    createCard(mainDish);
}



const lockCard = (index) => {
    const currentCard = cardContainer.children[index];
    currentCard.classList.toggle('locked');
}

const favRecipe = (index) => {
    const currentCard = cardContainer.children[index];
    currentCard.classList.toggle('favorited');

}



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

