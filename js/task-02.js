const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const liContainerEl = document.querySelector('#ingredients');
console.log(liContainerEl);

const elements = [];
for (let i = 0; i < ingredients.length; i += 1) {
    const liEl = document.createElement('li');
    liEl.textContent = ingredients[i];
    elements.push(liEl);
}
console.log(elements);
liContainerEl.append(...elements);
