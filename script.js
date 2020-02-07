const menu = document.getElementById('menu');

menu.addEventListener('click', () => {
  document.getElementById("menu").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
})
