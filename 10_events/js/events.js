const button = document.getElementById('colorChanger')

function eventFunction(color) {
  document.body.style = `background-color: ${color}`;
}

button.addEventListener("click", () => eventFunction('red'), {once: true});
button.addEventListener("dblclick", () => eventFunction('green'))
button.addEventListener("mouseover", () => eventFunction('blue'))