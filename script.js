let botao = document.querySelector("#botao");

botao.addEventListener("click", mensagem);

function mensagem(){
    botao.innerHTML= "Seja bem-vindo(a) ao meu site!!";
    botao.style.background= "lightgreen";
};