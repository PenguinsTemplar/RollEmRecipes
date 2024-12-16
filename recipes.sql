-- Create the recipes table
CREATE TABLE recipes (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    imageSrc VARCHAR(255),
    description TEXT,
    instructions TEXT,
    category VARCHAR(255)
);

-- Create the ingredients table
CREATE TABLE ingredients (
    id SERIAL PRIMARY KEY,
    recipe_id VARCHAR(255) REFERENCES recipes(id),
    amount VARCHAR(255),
    ingredient VARCHAR(255)
);

-- Insert data into the recipes table
INSERT INTO recipes (id, title, imageSrc, description, instructions, category) VALUES
('001', 'Scrambled Eggs', './Assets/ScrambledEggs.png', 'How to make fluffy eggs', 'whisk eggs and liquid together.  liquid will evaporate and create airier eggs place a sauce pan on the burner at medium low heat.  Melt the butter.  add eggs to the pan and whisk intermetantly, removing from heat occasionally to keep from cooking too fast.  remove from heat when curds form, while they''re still glossy', 'Entree'),
('002', 'Cottage Loaf', './Assets/cottageLoaf.png', 'Loaf of a Cottage', 'put everything together in a mixer and mix for 5 minutes on medium speed.  let rise for 2 hours.  shape into a loaf and let rise for another hour.  bake at 450 for 30 minutes', 'Side'),
('003', 'Instant Pot Tater Tot Casserole', 'Assets/TaterTotCasserole.png', 'Hearty American Comfort Food', 'brown beef, toss everything on top, cook', 'Entree'),
('004', 'Grilled Avacado Carrots', 'Assets/GrilledCarrots.png', 'Delightful Vegetable for Summer Grilling', 'rub carrots in olive oil salt and pepper to taste.  grill for 12 minutes, flipping half way.  Mix with min, maple and sliced avacado', 'Vegetable'),
('005', 'Roasted Veggies', 'Assets/RoastedVeggies.png', 'Easy way to make the Vegetables tastey', 'toss with olive oil, salt and pepper.  Place on cookie sheet covered with tinfoil.  Broil at 425 for 20-25 minutes', 'Vegetable'),
('006', 'Peanut Curry Stew', 'Assets/PeanutCurryStew.png', 'Sweet and Savory delight', 'Sear the meat, add the veggies, add the coconut milk and spices, simmer for 20 minutes', 'Entree'),
('007', 'Chicken and Waffles', 'Assets/ChickenAndWaffles.png', 'O boy are you in for a treat', 'Give the chicken waffles, it WILL know what to do', 'Side'),
('008', 'Twice Baked Potato', 'Assets/LoadedBakedPotato.png', 'All the good stuff', 'Bake it... twice?', 'Side'),
('009', 'Hot Wings', 'Assets/HotWings.png', 'If it burns your house down its just right', 'Make yer sauce, bread em, Fry em, dunk em, serve em', 'Side'),
('010', 'Steak with Chimichuri Sauce', 'Assets/SteakChimChuri.png', 'Delightful spicy topping to beef', 'Make yer sauce, bread em, Fry em', 'Entree'),
('011', 'Eggplant Parmasean', 'Assets/EggPlantParm.png', 'Somewhat healthier than the Chicken version', 'Cook the Eggplant till it is done', 'Vegetable');

-- Insert data into the ingredients table
INSERT INTO ingredients (recipe_id, amount, ingredient) VALUES
('001', '2', 'eggs'),
('001', '1 tbs', 'butter'),
('001', '1/4 cup', 'milk'),
('002', '150 g', 'sourdough starter'),
('002', '500 g', 'bread flour'),
('002', '10 g', 'salt'),
('002', '25 g', 'oil'),
('003', '1 lb', 'extra lean or lean ground beef or ground turkey'),
('003', '1 cup', 'diced onion'),
('003', '1/2 tsp', 'garlic powder'),
('003', '1/4 tsp', 'salt'),
('003', '1/4 tsp', 'black pepper'),
('003', '1 tsp', 'Worcesteshire'),
('003', 'three quarters', 'cup beef or chicken broth'),
('003', '1 12 oz', 'bag frozen cut green beans'),
('003', '1 14 oz', 'can corn drained or Frozen'),
('003', '1 10 oz', 'can cream of mushroom soup'),
('003', '1/4 cup', 'sour cream'),
('003', '16 oz', 'frozen tater tots half cups grated cheddar cheese'),
('004', '4', 'carrots'),
('004', '1', 'avacado'),
('004', '10 g', 'diced mint'),
('004', '1 cup', 'cup Maple Syrup'), 
('005', '4', 'carrots'),
('005', '1', 'head of Broccoli'),
('005', '2', 'Sweet Onions'),
('005', '1 lbs', 'Potatos'),
('005', '1/4 cup', 'Olive Oil'),
('006', '1/4 cup', 'Peanut butter'),
('006', '2 tbs', 'Curry Powder'),
('006', '1 tbs', 'Cumin'),
('006', '1 tbs', 'Fish Sauce'),
('006', '2 cups', 'Rice prepared'), 
('006', '1 can', 'Coconut Milk'),
('007', '1', 'Chicken Breast'),
('007', '2', 'Waffle'),
('008', '1', 'Potato'),
('008', '1', 'Bacon'),
('008', '1', 'Cheese'),
('008', '1', 'Sour Cream'),
('008', '1', 'Chives'),
('009', '2 lbs', 'Chicken Wings'),
('009', '2 stick', 'Butter'),
('009', '1 cup', 'Itallian Dressing'),
('009', '1 cup', 'Franks Hot Sauce'),
('009', '1 cup', 'HOT hot sauce'),
('009', '1 tbs', 'red pepper flakes'),
('009', '1 tbs', 'garlic powder'),
('009', '1 tbs', 'onion powder'),
('009', '1 tbs', 'curry powder'),
('009', '1 tbs', 'cumin'),
('009', '1 tbs', 'paprika'),
('009', '1 tbs', 'cayenne pepper'),
('010', '1 lbs', 'Steak'), 
('010', '1', 'green chili pepper'),
('010', '1 bunch', 'Parsley, or sub for cilantro if you must'),
('010', '1', 'Lime'),
('010', '1', 'Garlic clove'),
('010', '1 cup', 'Olive Oil'),
('010', 'to taste', 'Salt and Pepper'),
('011', '1', 'Eggplant'),
('011', '1 cup', 'Marinara Sauce'),
('011', '1 cup', 'Mozzarella Cheese'),
('011', '1 cup', 'Parmasean Cheese'),
('011', '1 cup', 'Bread Crumbs');

SELECT r.title, array_agg(i.ingredient || ' (' || i.amount || ')') AS ingredients
FROM recipes r
JOIN ingredients i ON r.id = i.recipe_id
GROUP BY r.title;