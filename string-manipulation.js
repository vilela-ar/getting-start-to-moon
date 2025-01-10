function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);  // str charAt pega o primeiro caractere da str 
}                                                       // .toUpperCase deixa a primeira letra em maiuscula
// str.slice pega o resto dos caracteres da str a partir da 2 letra

console.log(capitalizeFirstLetter("javascript")); 

function countWords(string) {
    const palavras = string.trim().split(/\s+/); //.trim remove espaços em branco do inicio ao final da string
    //.split(/\s+/) \s+ considera qualquer quantidade de espaços consecutivos.,  Divide a string usando espaços em branco (incluindo múltiplos espaços) como delimitador
    return palavras.length
}

// Teste a função:
console.log(countWords("Eu gosto de programar em JavaScript")); // Deve imprimir 6
