/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
    let answer=[];
    const visited=[];
    function tracking(str,idxArr){
        if(str.length===tiles.length){
return;
        }
        for(let i=0; i<tiles.length; i++){
            if(!idxArr.includes(i)){
                answer.push(str+tiles[i]);
                idxArr.push(i);
                tracking(str+tiles[i],idxArr);
                idxArr.pop();
            }
        }
    }
    for(let i=0; i<tiles.length; i++){
        if(!visited.includes(tiles[i])){
            visited.push(tiles[i]);
            answer.push(tiles[i]);
            tracking(tiles[i],[i]);
        }
    }

    return new Set(answer).size;
};