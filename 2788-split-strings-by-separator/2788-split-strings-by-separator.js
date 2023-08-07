/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
    return words.map(el=>el.split(separator).filter(el=>el!=="")).flat();

};