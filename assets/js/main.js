const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 251
const limit = 10
let offset = 0;

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}" data-id="${pokemon.number}" onclick="showPokemonDetail(${pokemon.number})"">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </li>
    `
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})

// main.js (NOVA FUNÇÃO)

function convertPokemonDetailToHtml(pokemon) {
    // Para as barras de stats
    const statsHtml = Object.entries(pokemon.stats).map(([statName, statValue]) => `
        <div class="stat-item">
            <span>${statName}</span>
            <span>${statValue}</span>
            <div class="stat-bar">
                <div class="stat-bar-fill" style="width: ${Math.min(statValue / 2.55, 100)}%;"></div>
            </div>
        </div>
    `).join('');

    return `
        <div class="detail-screen ${pokemon.type}">
            <header>
                <button onclick="hidePokemonDetail()">X</button>
                <h2>${pokemon.name}</h2>
                <span>#${pokemon.number}</span>
            </header>
            <section class="main-info">
                <img src="${pokemon.photo}" alt="${pokemon.name}">
                
                <div class="tabs">
                    <button id="aboutTab" class="active">About</button>
                    <button id="baseStatsTab">Base Stats</button>
                </div>
                
                <div class="tab-content">
                    <div id="aboutContent" class="active">
                        <h3>About</h3>
                        <p><strong>Species:</strong> ${pokemon.species}</p>
                        <p><strong>Height:</strong> ${pokemon.height / 10} m</p>
                        <p><strong>Weight:</strong> ${pokemon.weight / 10} kg</p>
                        <p><strong>Abilities:</strong> ${pokemon.abilities.join(', ')}</p>
                    </div>

                    <div id="baseStatsContent">
                        <h3>Base Stats</h3>
                        ${statsHtml}
                    </div>
                </div>
            </section>
        </div>
    `;
}

function showPokemonDetail(pokemonId) {
    pokeApi.getPokemonById(pokemonId).then(pokemon => {
        const detailHtml = convertPokemonDetailToHtml(pokemon);
        const detailContainer = document.createElement('div');
        detailContainer.id = 'pokemonDetailContainer';
        detailContainer.innerHTML = detailHtml;
        document.body.appendChild(detailContainer);
        document.querySelector('.content').style.display = 'none';

        // LÓGICA DAS ABAS: Adiciona event listeners APÓS o elemento ser adicionado ao DOM
        const aboutTab = detailContainer.querySelector('#aboutTab');
        const baseStatsTab = detailContainer.querySelector('#baseStatsTab');
        const aboutContent = detailContainer.querySelector('#aboutContent');
        const baseStatsContent = detailContainer.querySelector('#baseStatsContent');

        function activateTab(tabToActivate, contentToShow, otherTab, otherContent) {
            tabToActivate.classList.add('active');
            contentToShow.classList.add('active');
            otherTab.classList.remove('active');
            otherContent.classList.remove('active');
        }

        aboutTab.addEventListener('click', () => {
            activateTab(aboutTab, aboutContent, baseStatsTab, baseStatsContent);
        });

        baseStatsTab.addEventListener('click', () => {
            activateTab(baseStatsTab, baseStatsContent, aboutTab, aboutContent);
        });

        // Garantir que a aba "About" esteja ativa por padrão ao abrir
        activateTab(aboutTab, aboutContent, baseStatsTab, baseStatsContent);
    });
}

function hidePokemonDetail() {
    // Remove a tela de detalhes e mostra a lista
    const detailContainer = document.getElementById('pokemonDetailContainer');
    if (detailContainer) {
        detailContainer.remove();
        document.querySelector('.content').style.display = 'block'; 
    }
}
    