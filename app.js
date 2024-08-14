let search = document.querySelector('#searchInput');

let recipContainer = document.querySelector('.recipe-list');

search.addEventListener('keyup', (e) => {
    const searchValue = e.target.value.toLowerCase();

    if(searchValue.length === 0) {
        recipContainer.style.display = 'none';
        return;
    }
    const newRecipes = recipes.filter(recipe => {
        return recipe.title.toLowerCase().includes(searchValue);
    });
    const cardContainer = document.querySelector('.cardContainer');
    recipContainer.style.display = 'flex';
    
    const listContainer = document.createElement('ul');
    
    
    for(let i = 0; i < newRecipes.length; i++){
        console.log(newRecipes.length)
        const listItem = document.createElement('li');
        listItem.setAttribute('id', newRecipes[i].title);
        listItem.classList.add('recipe-list-item');
        listItem.addEventListener('click', (e) => {
            const index = e.target.id;
            console.log(e.target);
            // window.location.href = `recipeDetail.html?recipe=${index}`;
        });
        recipContainer.innerHTML = '';
        listItem.innerText = newRecipes[i].title;
        
        listContainer.appendChild(listItem);
    }
    recipContainer.appendChild(listContainer);
});