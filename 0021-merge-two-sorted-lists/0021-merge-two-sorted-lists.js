/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const list=new ListNode();
    let temp=list;
    while(list1&&list2){
        if(list1.val>list2.val){
            temp.next=new ListNode(list2.val);
            list2=list2.next;
            temp=temp.next;
        }else{
            temp.next=new ListNode(list1.val);
            list1=list1.next;
            temp=temp.next;
        }
    }
    if(list1){
        temp.next=list1;
    }else if(list2){
        temp.next=list2;
    }
    return list.next;
};