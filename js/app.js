async function carregarJogadores() {

    const resposta = await fetch("data/elenco2025.json");

    const jogadores = await resposta.json();

    const album = document.getElementById("album");

    jogadores.forEach(jogador => {

        const card = document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `
            <div class="card-topo">
                VASCO 2025
            </div>
            <div class="card-imagem">
                <img src="${jogador.imagem}" alt="${jogador.nome}">
            </div>
            <div class="card-info">
                <h3>${jogador.nome}</h3>
                <p>${jogador.posicao}</p>
                <p class="stats">
                    👕 ${jogador.camisa} |
                    ⚽ ${jogador.gols} |
                    🎯 ${jogador.assistencias}
                </p>
            </div>
        `;

        album.appendChild(card);
    });

}

carregarJogadores();