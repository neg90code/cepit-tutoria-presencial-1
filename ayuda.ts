// ayudas.ts

/**
 * Cuenta cuántos nombres en un arreglo contienen una letra específica.
 * @param nombres - Un arreglo de nombres (strings).
 * @param letra - La letra a buscar en cada nombre.
 * @returns La cantidad de nombres que contienen la letra.
 */
export function contar_nombres_con_letra(nombres: string[], letra: string): number {
    let contador = 0; // Inicializamos el contador en 0
    
    for (let nombre of nombres) {
        if (nombre.toLowerCase().includes(letra.toLowerCase())) {
            contador++; // Incrementamos el contador si la letra está presente
        }
    }

    return contador; // Devolvemos el número total de nombres que contienen la letra
}