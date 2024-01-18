/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if(left===right){
        return head;
    }
    
    const start=new ListNode();
    let tempStart=start;
    const data=[];
    let dep=1;
    let temp=head;
    while(dep<=right){
        if(dep<left){
            tempStart.next=new ListNode(temp.val);
            temp=temp.next;
            dep++;
            tempStart=tempStart.next;
        }else{
            data.unshift(temp.val);
            temp=temp.next;
            dep++;
        }
    }
    const mid=new ListNode();
    let tempMid=mid;
    let i=0;
    while(i<data.length){
        tempMid.next=new ListNode(data[i]);
        tempMid=tempMid.next;
        i++;
    }
    tempStart.next=mid.next;
    tempMid.next=temp;
    return start.next;
};