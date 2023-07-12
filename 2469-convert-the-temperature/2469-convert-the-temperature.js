/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    const position=Math.pow(10,5);
    const Kelvin=Math.round((celsius+273.15)*position)/position;
    const Fahrenheit=Math.round((celsius*1.80+32.00)*position)/position;
    return [Kelvin,Fahrenheit];
};