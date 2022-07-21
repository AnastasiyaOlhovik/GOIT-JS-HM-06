const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfIngredients = document.querySelector('ul#ingredients');

const elements = ingredients.map(ingredient => {
  const list = document.createElement('li');

  list.classList = 'item'
  list.textContent = ingredient;

  return list;
})

listOfIngredients.append(...elements)
console.log(listOfIngredients)
