// principal.ts
import { contar_nombres_con_letra } from './ayuda';
import * as readlineSync from 'readline-sync';

// Función para pedir los nombres y la letra al usuario
function iniciar_programa() {
    const nombres: string[] = [];
    
    console.log("Por favor, ingrese cinco nombres:");

    // Capturamos cada nombre y lo agregamos al array de nombres
    for (let i = 1; i <= 5; i++) {
        const nombre = readlineSync.question(`Nombre ${i}: `);
        nombres.push(nombre.trim());
    }
    
    // Pedimos la letra a buscar
    const letra = readlineSync.question("Ingrese una letra para buscar en los nombres: ").trim();

    // Llamamos a la función para contar los nombres que contienen la letra
    const resultado = contar_nombres_con_letra(nombres, letra);
    console.log(`Hay ${resultado} nombres que contienen la letra '${letra}'.`);
}

iniciar_programa(); // Ejecutamos el programa