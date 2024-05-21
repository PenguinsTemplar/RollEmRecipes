// first section is for the initial dispaly.  Will be overritten by the lock button
// by placing the values locally, so what they had locked is there when they come back.
let mainDish = [
    {
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
    title : 'Cottage Loaf',
    imageSrc:  './assets\/cottageLoaf.jpg',
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
        title : 'Instant Pot Tater Tot Casserole',
        imageSrc:    'Assets\/TaterTotCasserole.png',
        description : 'Hearty American Comfort Food',
        ingredients : '1 pound extra lean or lean ground beef or ground turkey 1 cup diced onion half tsp garlic powder quarter tsp salt        quarter tsp pepper        1 tsp Worcesteshire        three quarters cup beef or chicken broth        1 12 oz bag frozen cut green beans        1 14 oz can corn drained or Frozen        1 10 oz can cream of mushroom soup        1/4 cup sour cream       16 oz frozen tater tots half cups grated cheddar cheese',
        instructions: 'brown beef, toss everything on top, cook',
        category:'Entree'
    },
    {
        title : 'Grilled Avacado Carrots',
        imageSrc:    'Assets\/GrilledCarrots.png',
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
        category:'Vegetable'
    },
    {
        title : 'Roasted Veggies',
        imageSrc:    'Assets\/RoastedVeggies.png',
        description : 'Easy way to make the Vegetables tastey',
        ingredients : '1lb Broccoli 1 lb Brussle Sprouts 1 Onion 2 bell peppers 1 lb potatoes',
        instructions: 'toss with olive oil, salt and pepper.  Place on cookie sheet covered with tinfoil.  Broil at 425 for 20-25 minutes',
        category:'Vegetable'
    },
    {
        title : 'Peanut Curry Stew',
        imageSrc:    'Assets\/PeanutCurryStew.png',
        description : 'Sweet and Savory delight',
        ingredients : 'Peanut butter, Curry, Cumin, Fish Sauce, Rice, Protien of choice (Pork, Chicken, Tofu, Beef), Butter ',
        instructions: 'Sear the meat, ',
        category:'Entree'
    },
    {
        title : 'Chicken and Waffles',
        imageSrc:    'Assets\/ChickenAndWaffles.png',
        description : 'O boy are you in for a treat',
        ingredients : 'Chicken and Waffles',
        instructions: 'Give the chicken waffles',
        category:'Side'
    },
    {
        title : 'Twice Baked Potato',
        imageSrc:  'Assets\/LoadedBakedPotato.png',
        description : 'All the good stuff',
        ingredients : 'Potato Bacon Chives Cheese',
        instructions: 'Bake it... twice?',
        category:'Side'
    },
    {
        title : 'Hot Wings',
        imageSrc:  'Assets\/HotWings.png',
        description : 'If it burns your house down its just right',
        ingredients : 'Chicken, Franks Hot Sauce [Redacted]',
        instructions: 'Make yer sauce, bread em, Fry em',
        category:'Side'
    },
    {
        title : 'Steak with Chimichuri Sauce',
        imageSrc:  'Assets\/SteakChimChuri.png',
        description : 'Delightful spicy topping to beef',
        ingredients : 'Typically, its green hot peppers with vinegar and olive oil, and parsley for some bitterness and texture.  if you MUST, use Cilantro',
        instructions: 'Make yer sauce, bread em, Fry em',
        category:'Entree'
    },
    {
        title : 'Eggplant Parmasean',
        imageSrc:  'Assets\/EggPlantParm.png',
        description : 'Somewhat healthier than the Chicken version',
        ingredients : 'Eggplant Noodles Parmasean Marinara',
        instructions: 'Cook the Eggplant till it is done',
        category:'Vegetable'
    },
    {
        title : 'Eggplant Parmasean',
        imageSrc:  'Assets\/EggPlantParm.png',
        description : 'Somewhat healthier than the Chicken version',
        ingredients : 'Eggplant Noodles Parmasean Marinara',
        instructions: 'Cook the Eggplant till it is done',
        category:'Vegetable'
    },
]