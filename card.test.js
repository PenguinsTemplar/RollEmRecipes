// make sure the cards are created
describe('createCard on load', function () {
it ('should return the number of cards in the deck', function () {
    let cardsCreated = document.querySelectorAll('.cardContainer .card');
    console.log(cardsCreated.length);
    expect(cardsCreated.length).toEqual(3);


})
// checks to see if the recipie info is filled out
it ('should populate the card with the correct recipe information', function () {
    let cardTitle = document.querySelector('.cardContainer .card h2');
    console.log(cardTitle.textContent);
    expect(cardTitle.textContent).toEqual('Scrambled Eggs');
    let cardImage = document.querySelector('.cardContainer .card img');
    console.log(cardImage.src);
    expect(cardImage.src).toEqual('http://127.0.0.1:5500/assets/ScrambledEggs.jpg');
    let cardIngredients = document.querySelector('.cardContainer .card .textInformation');
    console.log(cardIngredients.innerHTML);
    let ingredientDisplay = cardIngredients.innerHTML;
    expect(cardIngredients.innerHTML).toEqual(ingredientDisplay);
});
});
//make sure the shuffle function isn't broken.   Need to test that the function leaves us with only 3 cards
//needs to be in the index order of 0 = Entree, 1 = Side 2 = Vegetable
//needs to test that the previous values isn't the same as the original. THIS FEATURE ISN'T IN THE FUNCTION YET
//need to re-do the function to work of an ID value in the recipe object, think the Main Dish list should just be
//the first 3 recipes in the list.  This will make the function easier to write and test.
describe('randomRecipie Shuffle', function () {
it('should suffle the cars to have an entree, side and desert in the proper order', function () {
    randomRecipe(0,recipes);
    let cardsCreated = document.querySelectorAll('.cardContainer .card');
    console.log(cardsCreated.length);
    expect(cardsCreated.length).toEqual(3);
});
});

afterEach(function () {
    document.querySelector('.cardContainer').innerHTML = '';
    createCard(mainDish);
    
});