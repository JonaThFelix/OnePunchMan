
const botoes = document.querySelectorAll(".botao");

const musica = new Audio('src/music/tema.mp3'); 
musica.play();


const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => { musica.play();
  botao.addEventListener("click", () => {

    desselecionarBotao();

    botao.classList.add("selecionado");

    desselecionarPersonagem();

    personagens[indice].classList.add("selecionado");
  });
});

function desselecionarPersonagem() { musica.play();
    // função para remover o personagem selecionado
    const personagemSelecionado = document.querySelector(
        ".personagem.selecionado"
    );
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() { musica.play();
    // função para remover o botão selecionado
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

