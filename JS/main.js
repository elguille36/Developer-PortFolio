
const botao = document.getElementById("botao");
const texto = document.getElementById("texto");

botao.addEventListener("click", function() {
    if (texto.style.display === "none") {
        texto.style.display = "block";
        botao.textContent = "Ocultar Bem-Vindo(a)";
    } else {
        texto.style.display = "none";
        botao.textContent = "Mostrar Bem-Vindo(a)";
    }
});


const contenedor_projeto =document.querySelectorAll(".box-content-projet");

contenedor_projeto.forEach((divAtual) => {

  divAtual.addEventListener('mouseenter', () => {
    divAtual.classList.add('hovered');

    contenedor_projeto.forEach((outraDiv) => {
      if (outraDiv !== divAtual) {
        outraDiv.classList.add('desfocada');
      }
    });
  });

  divAtual.addEventListener('mouseleave', () => {
    divAtual.classList.remove('hovered');

    contenedor_projeto.forEach((outraDiv) => {
      outraDiv.classList.remove('desfocada');
    });
  });

});

document.getElementById("formContato").addEventListener("submit", function () {
    document.getElementById("msg-sucesso").style.display = "block";
    this.reset();
});









