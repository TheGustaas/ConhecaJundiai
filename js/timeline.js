$(function () {
  var divs = document.querySelectorAll(".container"); // Seleciona todos os elementos com a classe "container" e os armazena na variável "divs"
  var divs2 = document.querySelectorAll(".container2"); // Seleciona todos os elementos com a classe "container2" e os armazena na variável "divs2"
  var spans = document.querySelectorAll('.input'); // Seleciona todos os elementos com a classe "input" e os armazena na variável "spans"
  var paras = document.querySelectorAll('.description-flex-container p'); // Seleciona todos os elementos <p> dentro de elementos com a classe "description-flex-container" e os armazena na variável "paras"
  var select = document.querySelector('select'); // Seleciona o elemento <select> e o armazena na variável "select"

  // linha do tempo
  spans.forEach(function (span, index) {
    span.addEventListener("click", function () {
      var matchedPara = paras[index]; // Obtém o elemento <p> correspondente ao índice atual

      span.classList.add('active'); // Adiciona a classe "active" ao elemento clicado

      spans.forEach(function (otherSpan, otherIndex) {
        if (otherSpan !== span) {
          otherSpan.classList.remove('active'); // Remove a classe "active" de todos os elementos <span> diferentes do elemento clicado
        }
      });

      select.selectedIndex = index; // Define o índice selecionado no elemento <select> com base no índice do elemento clicado
    });
  });

  // muda linha do tempo com select
  select.addEventListener("change", function () {
    var selectedIndex = select.selectedIndex; // Obtém o índice selecionado no elemento <select>

    spans.forEach(function (span) {
      span.classList.remove('active'); // Remove a classe "active" de todos os elementos <span>
    });

    spans[selectedIndex].classList.add('active'); // Adiciona a classe "active" ao elemento <span> correspondente ao índice selecionado
  });

  // altera slide
  spans.forEach(function (span, index) {
    span.addEventListener("click", function () {
      divs.forEach(function (div, divIndex) {
        if (index === divIndex) {
          div.classList.remove("hidden"); // Remove a classe "hidden" do elemento correspondente ao índice
        } else {
          div.classList.add("hidden"); // Adiciona a classe "hidden" a todos os outros elementos
        }
      });
    });
  });

  // altera texto
  spans.forEach(function (span, index) {
    span.addEventListener("click", function () {
      divs2.forEach(function (div2, divIndex) {
        if (index === divIndex) {
          div2.classList.remove("hidden"); // Remove a classe "hidden" do elemento correspondente ao índice
        } else {
          div2.classList.add("hidden"); // Adiciona a classe "hidden" a todos os outros elementos
        }
      });
    });
  });

  // altera slide no select
  select.addEventListener("change", function () {
    var selectedIndex = select.selectedIndex; // Obtém o índice selecionado no elemento <select>
    divs.forEach(function (div, divIndex) {
      if (selectedIndex === divIndex) {
        div.classList.remove("hidden"); // Remove a classe "hidden" do elemento correspondente ao índice selecionado
      } else {
        div.classList.add("hidden"); // Adiciona a classe "hidden" a todos os outros elementos
      }
    });
  });

  // altera texto no select
  select.addEventListener("change", function () {
    var selectedIndex = select.selectedIndex; // Obtém o índice selecionado no elemento <select>
    divs2.forEach(function (div2, divIndex) {
      if (selectedIndex === divIndex) {
        div2.classList.remove("hidden"); // Remove a classe "hidden" do elemento correspondente ao índice selecionado
      } else {
        div2.classList.add("hidden"); // Adiciona a classe "hidden" a todos os outros elementos
      }
    });
  });
});


// Animação do menu
$(document).ready(function () {
  $(".pagina-futura").hover(function () {
    $(".pagina-atual").css({
      "transform": "translateX(0px) translateY(0px)",
      "box-shadow": "#533A71 3px 3px 0px",
      "background-color": "#b79bd6",
      "color": "white"
    });
  }, function () {
    $(".pagina-atual").removeAttr("style"); // Remove os estilos inline quando o mouse deixa a tag "rota"
  });
});
