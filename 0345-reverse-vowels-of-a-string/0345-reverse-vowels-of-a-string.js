/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let answer=new Array(s.length).fill("z");
    let left=0;
    let right=s.length-1;
    const vowels=["a","e","i","o","u","A","E","I","O","U"];
    
    while(left<=right){
        if(vowels.indexOf(s[left])===-1){
            answer[left]=s[left];
            left++;
            continue;
        }
        if(vowels.indexOf(s[right])===-1){
            answer[right]=s[right];
            right--;
            continue;
        }
        if(vowels.indexOf(s[left])!==-1&&vowels.indexOf(s[right])!==-1){
            answer[left]=s[right];
            answer[right]=s[left];
            left++;
            right--;
        }
    }
    return answer.join("");
};