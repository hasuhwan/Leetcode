/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function(chalk, k) {
    let answer=0;
for(let i=1; i<chalk.length; i++){
    chalk[i]+=chalk[i-1];
}
const div=k%chalk[chalk.length-1];
    for(let i=0; i<chalk.length; i++){
        if(div<chalk[i]){
            return i;
        }
    }
};