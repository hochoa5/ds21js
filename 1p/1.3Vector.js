//PRIMERO

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function InputData(p, v) {
    nums.splice(p, 1, v);
};

p = prompt("Ingresa la posición: ");
v = prompt("Ingresa el valor: ");

console.log("Array antes: " + nums);
InputData(0, 12);
console.log("Array despues: " + nums);

//SEGUNDO

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Remove(p) {
    nums.splice(p, 1);
};

console.log("Array antes: " + nums);
Remove(0);
console.log("Array despues: " + nums);