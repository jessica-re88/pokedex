<div align="center">

<img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="Pokedex Banner" width="160"/>

# 🧩 Pokedex Interativa  

> Uma Pokedex web interativa, responsiva e moderna — exibindo Pokémon da **1ª e 2ª geração** com dados dinâmicos da **PokeAPI**.

---

[![HTML5](https://img.shields.io/badge/HTML5-E44D26?style=for-the-badge&logo=html5&logoColor=fff)](#)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=fff)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7E018?style=for-the-badge&logo=javascript&logoColor=000)](#)
[![PokeAPI](https://img.shields.io/badge/PokeAPI-FF1B1B?style=for-the-badge&logo=pokemon&logoColor=fff)](https://pokeapi.co)

</div>

---

## 📖 Sobre o Projeto

A **Pokedex Interativa** é uma aplicação web que consome dados da **PokeAPI**, listando e detalhando Pokémon até o número **#251**.  
O design é **totalmente responsivo**, adaptando-se a qualquer dispositivo, com **temas dinâmicos por tipo de Pokémon**.

---

## 🚀 Tecnologias Utilizadas

| Tecnologia | Função |
|-------------|---------|
| 🧱 **HTML5** | Estrutura semântica e acessível. |
| 🎨 **CSS3** | Estilização moderna com *media queries* e temas dinâmicos. |
| ⚙️ **JavaScript (ES6+)** | Consumo de API, manipulação de DOM e paginação dinâmica. |

---

## 🎯 Conceitos-Chave e Aprendizados

### 🔹 1. Integração com APIs e HTTP
A aplicação é **100% dinâmica**, consumindo dados em tempo real da **PokeAPI**.

| Conceito | Aplicação Prática |
|-----------|-------------------|
| 🌐 **HTTP & Requisições** | Uso de `fetch()` para obter dados com método `GET`. |
| 🔁 **Promises e Async** | Manipulação assíncrona com `.then()` e `Promise.all()`. |
| 📊 **Query Params** | Implementação de `offset` e `limit` para paginação. |
| ✅ **Status Codes** | Tratamento de respostas (ex: `200 OK`). |

---

### 🔹 2. Manipulação de Dados e Arquitetura

- 🧩 **Classe `Pokemon`** → Conversão do formato cru da API em um modelo limpo e reutilizável.  
- 🔁 **Array.map()** → Transformações concisas de dados sem loops manuais.  
- 📜 **Paginação Dinâmica** → Carregamento incremental com botão “Load More” até o limite de 251 Pokémon.

---

### 🔹 3. Estilização e Responsividade

- 🎨 **CSS Modularizado:**  
  Separação em `global.css` e `pokedex.css` para melhor organização.  
- 🌈 **Cores Dinâmicas:**  
  Aplicação de temas conforme o tipo principal (`.fire`, `.grass`, `.water`...).  
- 📱 **Responsividade:**  
  Uso de **CSS Grid** e **@media queries** para ajustar colunas de 1 a 4.

---

## 🏗️ Estrutura do Projeto

```bash
.
├── assets/
│   ├── css/
│   │   ├── global.css        # Estilos globais (body, fontes, container)
│   │   └── pokedex.css       # Layout dos cards e detalhes dos Pokémon
│   └── js/
│       ├── main.js           # Manipulação do DOM, paginação e eventos
│       ├── poke-api.js       # Comunicação e tratamento da PokeAPI
│       └── pokemon-model.js  # Classe modelo para estrutura dos dados
└── index.html                # Estrutura principal da aplicação
````
            
## 🔗 Demonstração

🎮 Veja a Pokedex em ação:
👉 👉 [Clique aqui para ver minha Pokedex online](https://jessica-re88.github.io/Meu-Portfolio/)

<div align="center">
---

⭐ Se este projeto te inspirou, deixe uma estrela no repositório! ⭐

Feito com ❤️ usando HTML, CSS, JavaScript e PokeAPI.


---
🧩 Preview

![Site](https://github.com/jessica-re88/pokedex/blob/main/Pokedex1.png)
![Site](https://github.com/jessica-re88/pokedex/blob/main/Pokedex2.png)
![Site](https://github.com/jessica-re88/pokedex/blob/main/Pokedex3.png)

