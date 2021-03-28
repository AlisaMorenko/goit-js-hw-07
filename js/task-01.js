const categoriesEl = document.querySelectorAll('.item');
console.log(`В списке ${categoriesEl.length} категории.`);

const categoriesNameEl = document.querySelectorAll('h2');
for (let i = 0; i < categoriesNameEl.length; i += 1) {
    console.log(`Категория: ${categoriesNameEl[i].textContent}`);
}
