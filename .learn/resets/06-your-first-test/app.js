// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Objeto con las tasas de conversión de 1 EUR a otras monedas
const oneEuroIs = {
    "JPY": 156.5, // yenes japoneses
    "USD": 1.07,  // dólares estadounidenses
    "GBP": 0.87,  // libras esterlinas
};

// Función para convertir de dólares a yenes japoneses
const fromDollarToYen = (dollars) => {
    const euros = dollars / oneEuroIs["USD"]; // Primero convertimos los dólares a euros
    const yenes = euros * oneEuroIs["JPY"]; // Luego convertimos los euros a yenes
    return yenes;
};

// Función para convertir de euros a dólares
const fromEuroToDollar = (euros) => {
    const dollars = euros * oneEuroIs["USD"]; // Convertimos directamente de euros a dólares
    return dollars;
};

// Función para convertir de yenes japoneses a libras esterlinas
const fromYenToPound = (yen) => {
    const euros = yen / oneEuroIs["JPY"]; // Primero convertimos los yenes a euros
    const pounds = euros * oneEuroIs["GBP"]; // Luego convertimos los euros a libras esterlinas
    return pounds;
};

// Exportar las funciones para que puedan ser utilizadas en otros archivos
module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };
