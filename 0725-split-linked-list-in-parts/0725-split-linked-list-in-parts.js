/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
    const answer=[];
    let val=0;
    let node=head;
    while(node){
        val++;
        node=node.next;
    }
    const width=Math.floor(val/k);
    let mod=val%k;
    for(let i=0; i<k; i++){
        const node=new ListNode();
        let temp=node;
        let dep=width;
        if(mod>0){
            dep+=1;
            mod--;
        }
        while(head&&dep!==0){
            temp.next=new ListNode(head.val);
            temp=temp.next;
            head=head.next;
            dep--;
        }
        answer.push(node.next);
    }
    return answer;
    
    
};