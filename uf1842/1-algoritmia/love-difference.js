function loveDifference(age1, age2) {
    return Math.abs(age1 - age2);
}

// Prueba 1: Diferencia básica
console.log(loveDifference(25, 20)); // Resultado esperado: 5

// Prueba 2: Diferencia cuando los valores están invertidos
console.log(loveDifference(20, 25)); // Resultado esperado: 5

// Prueba 3: Edad iguales
console.log(loveDifference(30, 30)); // Resultado esperado: 0

// Prueba 4: Diferencia con edades grandes (el amor no tiene edad)
console.log(loveDifference(100, 80)); // Resultado esperado: 20
