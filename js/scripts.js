// Create an array of Pokemon objects, each object containing the name, height, and type(s) of a Pokemon, properly indented code
let pokemonList = [
    { name: 'Jigglypuff', height: '0.5', type: ['Fairy, Normal'] },
    { name: 'Vileplume', height: '1.2', type: ['Grass, Poison'] },
    { name: 'Beedrill', height: '1', type: ['Bug, Poison'] },
    { name: 'Fearow', height: '1.2', type: 'Flying' },
    { name: 'Raichu', height: '0.8', type: 'Electric' },
    { name: 'Haunter', height: '1.6', type: ['Ghost, Poison'] }
];

// Iterate through the pokemonList array
for (let i = 0; i < pokemonList.length; i++) {
    // Create a string containing the Pokemon's name and height as an HTML paragraph
    let pokemonText = '<p>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')';

    // Check if the Pokemon's height is less than 1.5, and if so, add a comment about its size. Added 'else
    if (pokemonList[i].height < 1.5) {
        pokemonText += ' - That is a small Pokemon!';
    } else {
        pokemonText += ' - Wow, that is a big Pokemon!';
    }

    pokemonText += '</p>';

    // Write the constructed paragraph with the Pokemon information to the document
    document.write(pokemonText);
}
