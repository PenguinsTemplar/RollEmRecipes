// first section is for the initial dispaly.  Will be overritten by the lock button
// by placing the values locally, so what they had locked is there when they come back.
let mainDish = [
    {
        id: '001',
        title : 'Scrambled Eggs',
        imageSrc:  './assets\/ScrambledEggs.jpg',
        description : 'How to make fluffy eggs',
        ingredients: [
            {amount:'2',ingredient: 'eggs'},
            {amount: '1 tbs', ingredient: 'butter'},
            {amount: '1/4 cup', ingredient: 'milk'}],
        instructions: 'whisk eggs and liquid together.  liquid will evaporate and create airier eggs place a sauce pan on the burner at medium low heat.  Melt the butter.  add eggs to the pan and whisk intermetantly, removing from heat occasionally to keep from cooking too fast.  remove from heat when curds form, while they\'re still glossy',
        servingInfo: 'Serves 2, 10 minutes to prepare, 5 minutes to cook, 500 calories per serving',
        category:'Entree'
    },
{
    id: '002',
    title : 'Cottage Loaf',
    imageSrc:  '.\/assets\/cottageLoaf.jpg',
    description : 'Loaf of a Cottage',
    ingredients: [
        {amount: '150 g',
        ingredient: 'sourdough starter'},
        {amount: '500 g',
        ingredient: 'bread flour'},        
        {amount: '10 g',
        ingredient: 'salt'},
        {amount: '25 g',
        ingredient: 'oil'
        }
    ],
    instructions: 'put everything together in a mixer and mix for 5 minutes on medium speed.  let rise for 2 hours.  shape into a loaf and let rise for another hour.  bake at 450 for 30 minutes',
    servingInfo: 'Serves 2, 10 minutes to prepare, 5 minutes to cook, 500 calories per serving',
    category:'Side'
},
{
    id: '003',
    title : 'Grilled Avacado Carrots',
    imageSrc:    '.\/assets\/GrilledCarrots.png',
    description : 'Delightful Vegetable for Summer Grilling',
    ingredients : [{amount: '4',
        ingredient: 'carrots'},
        {amount: '1',
        ingredient: 'avacado'},
        {amount: '10 g',
        ingredient: 'diced mint'},
        {amount: '1 cup',
        ingredient: 'cup Maple Syrup'}],
    instructions: 'rub carrots in olive oil salt and pepper to taste.  grill for 12 minutes, flipping half way.  Mix with min, maple and sliced avacado',
    servingInfo: 'Serves 2, 10 minutes to prepare, 5 minutes to cook, 500 calories per serving',
    category:'Vegetable'
}
]

let recipes = [
    {
        id: '001',
        title : 'Scrambled Eggs',
        imageSrc:  '.\/Assets\/ScrambledEggs.png',
        description : 'How to make fluffy eggs',
        ingredients: [
            {amount: '2', ingredient: 'eggs'},
            {amount: '1 tbs', ingredient: 'butter'},
            {amount: '1/4 cup', ingredient: 'milk'}
        ],
        instructions: 'whisk eggs and liquid together.  liquid will evaporate and create airier eggs place a sauce pan on the burner at medium low heat.  Melt the butter.  add eggs to the pan and whisk intermetantly, removing from heat occasionally to keep from cooking too fast.  remove from heat when curds form, while they\'re still glossy',
        category:'Entree'
    },
    {
        id: '002',
        title : 'Cottage Loaf',
        imageSrc:  '.\/Assets\/cottageLoaf.png',
        description : 'Loaf of a Cottage',
        ingredients: [
            {amount: '150 g',ingredient: 'sourdough starter'},
            {amount: '500 g', ingredient: 'bread flour'},
            {amount: '10 g', ingredient: 'salt'},
            {amount: '25 g', ingredient: 'oil'}
        ],
        instructions: 'put everything together in a mixer and mix for 5 minutes on medium speed.  let rise for 2 hours.  shape into a loaf and let rise for another hour.  bake at 450 for 30 minutes',
        category:'Side'
    },
    {
        id: '003',
        title : 'Instant Pot Tater Tot Casserole',
        imageSrc:    'Assets\/TaterTotCasserole.png',
        description : 'Hearty American Comfort Food',
        ingredients : [{amount: '1 lb', ingredient: 'extra lean or lean ground beef or ground turkey',
        {amount: '1 cup',ingredient:'diced onion'},
        {amount: '1/2 tsp',ingredient:'garlic powder'},
        {amount:  '1/4 tsp',ingredient:'salt'},
        {amount: '1/4 tsp',ingredient:'black pepper'},
        {amount: '1 tsp',ingredient:'Worcesteshire'},
        {amount: 'three quarters',ingredient:'cup beef or chicken broth'},
        {amount: '1 12 oz', ingredient:' bag frozen cut green beans'},
        {amount: '1 14 oz', ingredient:' can corn drained or Frozen'},
        {amount: '1 10 oz', ingredient:' can cream of mushroom soup'},
        {amount: '1/4 cup', ingredient:' sour cream'},
        {amount: '16 oz', ingredient:' frozen tater tots half cups grated cheddar cheese'}
    ],
        instructions: 'brown beef, toss everything on top, cook',
        category:'Entree'
    },
    {
        id: '004',
        title : 'Grilled Avacado Carrots',
        imageSrc:    'Assets\/GrilledCarrots.png',
        description : 'Delightful Vegetable for Summer Grilling',
        ingredients : [{amount: '4', ingredient: 'carrots'},
            {amount: '1', ingredient: 'avacado'},
            {amount: '10 g', ingredient: 'diced mint'},
            {amount: '1 cup', ingredient: 'cup Maple Syrup'}],
        instructions: 'rub carrots in olive oil salt and pepper to taste.  grill for 12 minutes, flipping half way.  Mix with min, maple and sliced avacado',
        category:'Vegetable'
    },
    {
        id: '005',
        title : 'Roasted Veggies',
        imageSrc:    'Assets\/RoastedVeggies.png',
        description : 'Easy way to make the Vegetables tastey',
        ingredients : [{amount: '4',ingredient: 'carrots'},
            {amount: '1',ingredient: 'head of Broccoli'},
            {amount: '2', ingredient: 'Sweet Onions'},
            {amount: '1 lbs', ingredient: 'Potatos'},
            {amount: '1/4 cup', ingredient: 'Olive Oil'}],
        instructions: 'toss with olive oil, salt and pepper.  Place on cookie sheet covered with tinfoil.  Broil at 425 for 20-25 minutes',
        category:'Vegetable'
    },
    {
        id: '006',
        title : 'Peanut Curry Stew',
        imageSrc:    'Assets\/PeanutCurryStew.png',
        description : 'Sweet and Savory delight',
        ingredients : [{amount: '1/4 cup', ingredient: 'Peanut butter'},
        {amount: '2 tbs', ingredient:'Curry Powder'},
        {amount: '1 tbs', ingredient:'Cumin'},
        {amount:'1 tbs', ingredient:'Fish Sauce'},
        {amount:'2 cuips', ingredient:'Rice prepared'},
        {amount:'1 can', ingredient:'Coconut Milk'}],
        instructions: 'Sear the meat, add the veggies, add the coconut milk and spices, simmer for 20 minutes',
        category:'Entree'
    },
    {
        id: '007',
        title : 'Chicken and Waffles',
        imageSrc:    'Assets\/ChickenAndWaffles.png',
        description : 'O boy are you in for a treat',
        ingredients :[
            {amount: '1', ingredient: 'Chicken Breast'},
            {amount: '2', ingredient: 'Waffle'}
        ],
        instructions: 'Give the chicken waffles, it WILL know what to do',
        category:'Side'
    },
    {
        id: '008',
        title : 'Twice Baked Potato',
        imageSrc:  'Assets\/LoadedBakedPotato.png',
        description : 'All the good stuff',
        ingredients : 
        [{amount: '1', ingredient: 'Potato'},
        {amount: '1', ingredient: 'Bacon'},
        {amount: '1', ingredient: 'Cheese'},
        {amount: '1', ingredient: 'Sour Cream'},
        {amount: '1', ingredient: 'Chives'}],
        instructions: 'Bake it... twice?',
        category:'Side'
    },
    {
        id: '009',
        title : 'Hot Wings',
        imageSrc:  'Assets\/HotWings.png',
        description : 'If it burns your house down its just right',
        ingredients : [
            {amount: '2 lbs', ingredient: 'Chicken Wings'},
            {amount: '2 stick', ingredient: 'Butter'},
            {amount: '1 cup', ingredient: 'Itallian Dressing'},
            {amount: '1 cup', ingredient: 'Franks Hot Sauce'},
            {amount: '1 cup', ingredient: 'HOT hot sauce'},
            {amount: '1 tbs', ingredient: 'red pepper flakes'},
            {amount: '1 tbs', ingredient: 'garlic powder'},
            {amount: '1 tbs', ingredient: 'onion powder'},
            {amount: '1 tbs', ingredient: 'curry powder'},
            {amount: '1 tbs', ingredient: 'cumin'},
            {amount: '1 tbs', ingredient: 'paprika'},
            {amount: '1 tbs', ingredient: 'cayenne pepper'}
        ],
        instructions: 'Make yer sauce, bread em, Fry em, dunk em, serve em',
        category:'Side'
    },
    {
        id: '010',
        title : 'Steak with Chimichuri Sauce',
        imageSrc:  'Assets\/SteakChimChuri.png',
        description : 'Delightful spicy topping to beef',
        ingredients : [
            {amount: '1  lbs', ingredient: 'Steak'},
            {amount: '1', ingredient: 'green chili pepper'},
            {amount: '1 bunch', ingredient: 'Parsley, or sub for cilantro if you must'},
            {amount: '1', ingredient: 'Lime'},
            {amount: '1', ingredient: 'Garlic clove'},
            {amount: '1 cup', ingredient: 'Olive Oil'},
            {amount: 'to taste', ingredient: 'Salt and Pepper'},
        ],
        instructions: 'Make yer sauce, bread em, Fry em',
        category:'Entree'
    },
    {
        id: '011',
        title : 'Eggplant Parmasean',
        imageSrc:  'Assets\/EggPlantParm.png',
        description : 'Somewhat healthier than the Chicken version',
        ingredients : [
            {amount: '1', ingredient: 'Eggplant'},
            {amount: '1 cup', ingredient: 'Marinara Sauce'},
            {amount: '1 cup', ingredient: 'Mozzarella Cheese'},
            {amount: '1 cup', ingredient: 'Parmasean Cheese'},
            {amount: '1 cup', ingredient: 'Bread Crumbs'}
        ],
        instructions: 'Cook the Eggplant till it is done',
        category:'Vegetable'
    },
]