const url = window.location.search.split("?")[1].split("=")[1];
console.log(url);
console.log() ;
const myRecipe = recipes.find(recipe => recipe.title === decodeURI(url));
console.log(myRecipe);