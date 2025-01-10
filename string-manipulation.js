function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);  // str charAt pega o primeiro caractere da str 
}                                                       // .toUpperCase deixa a primeira letra em maiuscula
// str.slice pega o resto dos caracteres da str a partir da 2 letra

console.log(capitalizeFirstLetter("javascript")); 
