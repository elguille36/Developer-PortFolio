
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


// let senha;
// let requisitos = "@#!*&%";

// do {
// //   senha = prompt("Cadastre sua senha (deve conter pelo menos um caractere especial)");
//   if (![...senha].some(c => requisitos.includes(c))) {
//     alert("Sua senha não cumpre os requisitos");
//   }
// } while (![...senha].some(c => requisitos.includes(c)));

// alert("Senha cadastrada com sucesso!");


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

// Formulario = document.getElementById("formContato");

// document.getElementById("formcontato").addEventListener("submit", function(e) {
//     e.preventDefault(); // impede envio imediato

//     // Mostra mensagem
//     const msg = document.getElementById("mensagemSucesso");
//     msg.innerText = "✔ Mensagem enviada com sucesso!";
//     msg.style.display = "block";

//     // Envia realmente o form depois de 1s
//     setTimeout(() => {
//         e.target.submit();
//     }, 1000);
// });








