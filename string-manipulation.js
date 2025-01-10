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
console.log(countWords("Eu gosto de programar em JavaScript")); // Deve imprimir 6

function replaceWord(sentence, oldWord, newWord) {
    const regex = new RegExp(oldWord, 'g'); // tira a primeira palavra
    return sentence.replace(regex, newWord); // coloca a ultima palava
}

console.log(replaceWord("Eu gosto de JavaScript", "JavaScript", "Python"));
// Deve imprimir "Eu gosto de Python"


function isPalindrome(str) {
    const strLimpa = str.replace(/\s+/g, '').toLowerCase();  // Remove espaços e converte para minúsculas
    const strInvertida = strLimpa.split('').reverse().join('');   // Inverte a string
    return strLimpa === strInvertida; //  // Verifica se a string limpa é igual à versão invertida
}
console.log(isPalindrome("arara")); // Deve imprimir true
console.log(isPalindrome("JavaScript")); // Deve imprimir false