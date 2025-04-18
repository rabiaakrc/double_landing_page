const container = document.querySelector('.container');
const left = document.querySelector('.left');
const right = document.querySelector('.right');

// Sol tarafın üzerine gelindiğinde
left.addEventListener('mouseenter', () => {
  container.classList.add('hover-left');
  container.classList.remove('hover-right');
});

// Sağ tarafın üzerine gelindiğinde
right.addEventListener('mouseenter', () => {
  container.classList.add('hover-right');
  container.classList.remove('hover-left');
});

// Fare dışarı çıkınca eski haline dönsün
container.addEventListener('mouseleave', () => {
  container.classList.remove('hover-left');
  container.classList.remove('hover-right');
});
