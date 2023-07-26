/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    return details.map(el=>el.split(/[a-zA-Z]/)[1].slice(0,2)).filter((el)=>Number(el)>60).length;
};