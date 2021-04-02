const refs = {
  decrementValue: document.querySelector('[data-action="decrement"]'),
  incrementValue: document.querySelector('[data-action="increment"]'),
  countValue: document.querySelector('#value'),
};

refs.decrementValue.addEventListener('click', decrement);
refs.incrementValue.addEventListener('click', increment);

let count = 0;

function decrement() {
  count -= 1;
  refs.countValue.textContent = count;
}

function increment() {
  count += 1;
  refs.countValue.textContent = count;
}
