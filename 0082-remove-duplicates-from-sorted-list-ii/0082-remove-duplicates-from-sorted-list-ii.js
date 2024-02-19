/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    const map=new Map();
    while(head){
        map.set(head.val,(map.get(head.val)||0)+1);
        head=head.next;
    }
    const arr=[...map.entries()].filter((el)=>el[1]===1).map((el)=>el[0]).sort((a,b)=>a-b);
    const list=new ListNode();
    let temp=list;
    arr.forEach(num=>{
        temp.next=new ListNode(num);
        temp=temp.next;
    });
    return list.next;
    
};