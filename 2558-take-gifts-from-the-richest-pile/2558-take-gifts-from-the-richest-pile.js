/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
class Heap{
    constructor(){
        this.heap=[];
    };
    
    insert(value){
        const heap=this.heap;
        heap.push(value);
        let index=heap.length-1;
        let parent = Math.floor((index - 1) / 2);
        while (index > 0 && heap[index] > heap[parent]) {
          [heap[index], heap[parent]] = [heap[parent], heap[index]];
          index = parent;
          parent = Math.floor((index - 1) / 2);
        }
    }
    pop(){
        const heap=this.heap;
        const result=heap[0];
        if(heap.length===1){
            return heap.pop();
        }
        heap[0]=heap.pop();
        let index = 0;

        while (index < heap.length) {
          let left = index * 2 + 1;
          let right = index * 2 + 2;
          let next = index;
          if (heap[next] < heap[left]) {
            next = left;
          }
          if (heap[right] > heap[next]) {
            next = right;
          }
          if (next === index) {
            break;
          }
          [heap[next], heap[index]] = [heap[index], heap[next]];
          index = next;
        }
        return result;
        
    }
}
var pickGifts = function(gifts, k) {
    const heap=new Heap();
    gifts.forEach(el=>{
        heap.insert(el);
    });
    while(k!==0){
        const temp=heap.pop();
        heap.insert(Math.floor(Math.sqrt(temp)));
        k--;
    };

    return heap.heap.reduce((acc,cur)=>acc+cur,0);
};