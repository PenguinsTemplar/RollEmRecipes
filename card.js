//this file is intended to generate the HTML elements for the cards that will be displayed on the main page.  it should iterate through the recipe.js
//file to get the text and images for each recipe.  it should also include the event listeners for the icons on the bottom bar of each card.
//the ingredients are a nested object in the recipe object.  they have to be handled differently than the other sections.
//poking this to see about synching it.

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
function createCard(recipe){
    for(let i =0; i < recipe.length; i++){
        const newCard = document.createElement('div');
        newCard.classList.add('card');
        newCard.innerHTML = `
        <h2 id="cardTitle1">${recipe[i].title}</h2>
        <img src="${recipe[i].imageSrc}" alt="Recipe Image 1">
        <p class="textInformation showText ingredients">${recipe[i].ingredients.map(ingredient => `${ingredient.amount} : ${ingredient.ingredient}<br>`).join('')}
        </p>
        <div class="bottomBar">
          <i class="material-symbols-outlined ingredients" onclick="showRecipeSection('ingredients', ${i})">Checklist</i>
          <i class="material-symbols-outlined instructions" onclick="showRecipeSection('instructions', ${i})">Turn_Right</i>
          <i class="material-symbols-outlined servinginfo" onclick="showRecipeSection('servingInfo', ${i})">Timer</i>
        </div>
        <div class="cardIcon">
          <i id="rollCard" class="material-symbols-outlined" onclick="randomRecipe(${i})">deployed_code</i>
          <i id="lockCard" class="material-symbols-outlined" onclick="lockCard(${i})">Lock</i>
          <i id="loveCard" class="material-symbols-outlined" onclick="favRecipe(${i})">Favorite</i>
        </div>
        `;
        cardContainer.appendChild(newCard);
    }
}

window.onload = function(){
    createCard(mainDish);
}