/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let answer=letters[0];
    letters.sort();
    for(let i=0; i<letters.length; i++){
        if(target<letters[i]){
            return letters[i];
        }
    }
    return answer;
};