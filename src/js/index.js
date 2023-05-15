/*
    O que precisamos fazer? - quando clicarmos no botão de troca de tema temos que alterar a cor do tema da página para as cores do tema claro ou do tema escuro

    - objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem pra lua
        - passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
        - passo 2 - dar um jeito de pegar no JS o elemento HTML corresponde ao body
        - passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
        - passo 4 - adicionar a classe modo-escuro no body
        - passo 5 - trocar a imagem do botão de alterar tema pra lua
    
    - objetivo 2 - quando clicar no botão de troca de tema, caso o body já tenha a classe modo-escuro, remover a classe pra mudar pro modo claro e mudar a imagem pro sol
        - passo 6 - verificar se o body ja tem a classe modo escuro
        - passo 7 - remover a classe do modo-escuro do body
        - passo 8 - trocar a imagem do botão de alterar tema pra sol
*/

//OBJETIVO 1

//passo 1
const botaoAlterarTema = document.getElementById("b-alterar-tema");
//busca pelo ID

const imgBotaoTrocaDeTema = document.querySelector(".Img-botao")

//passo 2
const body = document.querySelector("body");
//busca o body todo

//body.classList.toggle("modo-escuro"); esse metodo alterna entre add e remover a classe

//passo 3
botaoAlterarTema.addEventListener("click", () => {
    //passo 6
    const modoEscuro = body.classList.contains("modo-escuro")
    if (modoEscuro) {
        //passo 7
        body.classList.remove("modo-escuro");

        //passo 8
        imgBotaoTrocaDeTema.setAttribute("src","./src/imagens/sun.png");
    } else {

        //passo 4
        body.classList.add("modo-escuro");

        //passo 5
        imgBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
    }


});

