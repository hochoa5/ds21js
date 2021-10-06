//PRIMERO

NR = prompt("¿Cuántos numeros aleatorios desea?")
var cont = 0;
let inicio = new Date();
num = [];
setTimeout(function() {
    Iniciar(inicio);
}, 0);

const genram = (min, max) => {

    return Math.floor(Math.random() * (max - min)) + min

};

for (let x = 0; x < NR; x++) {
    num.push(genram(1, NR))
}

function sw(i, f) {
    t = num[i];
    num[i] = num[f];
    num[f] = t;
}

function Bubble(num) {
    for (let i = 0; i < num.length; i++) {
        for (let j = 0; j < num.length - 1; j++) {
            if (num[j] > num[j + 1]) {
                sw(j, j + 1)
                cont++;
            }

        }

    }

}

console.log("Array sin Ordenar: " + num);
Bubble(num);
console.log("Array Ordenado: " + num);
console.log("Los pasos que se realizaron fueron: " + cont);

function Iniciar(inicio2) {
    let fin = new Date();
    var diferencia = fin - inicio2;
    console.log("Tiempo de ejecucion: " + diferencia + "ms");
}

//SEGUNDO