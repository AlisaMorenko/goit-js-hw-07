const categoriesEl = document.querySelectorAll('.item');
console.log(`В списке ${categoriesEl.length} категории.`);

for (let i = 0; i < categoriesEl.length; i += 1) {
  const categoriesNameEl = document.querySelectorAll('h2');
  console.log(`Категория: ${categoriesNameEl[i].textContent}`);

  const categoriesElements = categoriesEl[i].querySelector('ul').children
    .length;
  console.log(`Количество элементов: ${categoriesElements}`);
}
