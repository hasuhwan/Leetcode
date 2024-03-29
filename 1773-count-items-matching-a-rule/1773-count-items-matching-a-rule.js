/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    const obj={
        type:0,
        color:1,
        name:2
    };
    return items.filter(el=>el[obj[ruleKey]]===ruleValue).length;
};