const color = document.querySelectorAll(".color");
  for (let index = 0; index < color.length; index += 1) {
    color[index].addEventListener("click", function() {
      for (let cont = 0; cont < color.length; cont += 1) {
        color[cont].classList.remove("selected");
      }
      color[index].classList.add("selected");
    });
  }

const cores = document.getElementsByClassName("color");
  cores[0].style.backgroundColor = "black";
  cores[1].style.backgroundColor = "rgb(245, 92, 118)";
  cores[2].style.backgroundColor = "rgb(34, 140, 240)";
  cores[3].style.backgroundColor = "chartreuse";
const pixels = document.getElementsByClassName("pixel");
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener("click", function()  {
      const seletor = document.querySelector(".selected").style.backgroundColor;
      pixels[index].style.backgroundColor = seletor;
    });
  }
  
  function clickClear() {
    for (let index = 0; index < pixels.length; index += 1) {
      document.querySelectorAll(".pixel")[index].style.backgroundColor = "white";
    }
  }
  document.getElementById('clear-board').addEventListener("click", clickClear);


  