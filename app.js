const sum = (a,b) => {
    return a + b
}


const oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
};


const fromDollarToYen = (dollars) => {
    const euros = dollars / oneEuroIs["USD"];
    const yenes = euros * oneEuroIs["JPY"]; 
    return yenes;
};


const fromEuroToDollar = (euros) => {
    const dollars = euros * oneEuroIs["USD"];
    return dollars;
};


const fromYenToPound = (yen) => {
    const euros = yen / oneEuroIs["JPY"];
    const pounds = euros * oneEuroIs["GBP"];
    return pounds;
};


module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };
