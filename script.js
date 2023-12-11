// Ejercicio 1
function ejercicio1() {
    let array = [];
    for(let i = 0; i < 10; i++) {
        array.push(Math.floor(Math.random() * 100));
    }
    console.log(array);
}

// Ejercicio 2
function ejercicio2() {
    const string = prompt("Ingresa palabras separadas con comas \",\"");
    let array = string.split(",");
    console.log(array);
}

// Ejercicio 3
function ejercicio3() {
    let array = [10, 40, 30, 20, 15, 5]
    let minimo = array.reduce(function (a,b) { return Math.min(a,b); },)
    let maximo = array.reduce(function (a,b) { return Math.max(a,b); },)

    console.log(`
Array original: ${array}
Array ordenado: ${array.sort(function(a,b) {return a - b})}
Numero mayor: ${maximo}
Numero menor: ${minimo}    
    `);
}