
// pokemon-model.js (NOVO)

class Pokemon {
    number;
    name;
    type;
    types = [];
    photo;
    
    // NOVOS CAMPOS PARA A TELA DE DETALHES
    abilities = [];
    height;
    weight;
    stats = {}; // Para armazenar HP, Attack, Defense, etc.
    species;
    baseExp; 
}