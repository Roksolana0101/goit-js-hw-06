const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listElement = document.querySelector('#ingredients');
const elements = ingredients.map(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    listItem.classList.add('item');
    return listItem;
});
listElement.append(...elements);