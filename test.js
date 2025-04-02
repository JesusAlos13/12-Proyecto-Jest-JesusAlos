const { sum } = require('./app.js');


test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);

    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    
    const { fromEuroToDollar } = require('./app.js'); 
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;

    
    expect(fromEuroToDollar(3.5)).toBe(expected); 
})

test ("One dolar shoud be 146.26 yen", function() {
    const { fromDollarToYen } = require('./app.js')
    const yen = fromDollarToYen (5)
    const expected = 5 * 146.26

    expect(fromDollarToYen(1)).toBeCloseTo(146.26, 2);
})

test ("One thousand yens should be 5.56 pounds", function() {
    const { fromYenToPound } = require('./app.js')
    const pounds = fromYenToPound (1000)
    const expected = 1000 * 0.00556

    expect(fromYenToPound(1000)).toBeCloseTo(5.56, 2)
})