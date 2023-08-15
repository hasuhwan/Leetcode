/**
 * @param {string[]} emails
 * @return {number}
 */
//@ 뒤는 완전하게 놔둘 것
// @ 앞은  .삭제 +뒤 아예 제거

var numUniqueEmails = function(emails) {
    const set=new Set();
    const regexp=new RegExp(/\.|\+[a-z\.]{1,}/,"g");
    emails.forEach(str=>{
        const [front,back]=str.split("@");
        const change=front.replace(regexp,"");
        set.add(`${change}@${back}`);
    });
    return set.size
};