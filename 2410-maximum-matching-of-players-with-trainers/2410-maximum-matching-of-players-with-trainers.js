/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
var matchPlayersAndTrainers = function(players, trainers) {
    players.sort((a,b)=>a-b);
    trainers.sort((a,b)=>a-b);
    let index=0;
    let answer=0;
    for(let i=0; i<players.length; i++){
        while(index<trainers.length){
            if(trainers[index]>=players[i]){
                answer++;
                index++;
                break;
            }
            index++;
        }
        if(index===trainers.length){
            return answer;
        }
    }
    return answer;
};