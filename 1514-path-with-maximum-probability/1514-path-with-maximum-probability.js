/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start_node
 * @param {number} end_node
 * @return {number}
 */
class Pqueue {
  constructor() {
    this.heap = [];
  }
  insert(value) {
    const heap = this.heap;
    heap.push(value);
    this.bubbleUp(heap);
  }
  bubbleUp(heap) {
    let index = heap.length - 1;
    let parent = Math.floor((index - 1) / 2);
    while (index > 0 && heap[index][1] > heap[parent][1]) {
      [heap[index], heap[parent]] = [heap[parent], heap[index]];
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }
  bulbbleDown(heap) {
    let index = 0;

    while (index < heap.length) {
      let left = index * 2 + 1;
      let right = index * 2 + 2;
      let next = index;
      if (heap[left]&&heap[next][1] < heap[left][1]) {
        next = left;
      }
      if (heap[right]&&heap[right][1] > heap[next][1]) {
        next = right;
      }
      if (next === index) {
        break;
      }
      [heap[next], heap[index]] = [heap[index], heap[next]];
      index = next;
    }
  }
  pop() {
    const heap = this.heap;
    const result = heap[0];
		if(heap.length===1){
		return heap.pop();
		}
		if(heap.length===0){
		return undefined;
		}
    heap[0] = heap.pop();
    this.bulbbleDown(heap);
    return result;
  }
    size(){
        return this.heap.length;
    }

  
}
var maxProbability = function(n, edges, succProb, start_node, end_node) {
    const map=new Map();
    edges.forEach(([one,two],idx)=>{
        if(!map.has(one)){
            map.set(one,[]);
        }
        if(!map.has(two)){
            map.set(two,[]);
        }
        map.get(one).push([two,succProb[idx]]);
        map.get(two).push([one,succProb[idx]]);
    });
    const queue=new Pqueue();
    queue.insert([start_node,1]);
    const visited=new Set();
    while(queue.size()!==0){

        const [node,val]=queue.pop();
        if(visited.has(node)){
            continue;
        }
        visited.add(node);
        if(node===end_node){
            return val;
        }
        if(map.has(node)){
            for(let [nextNode,mulVal] of map.get(node)){
                queue.insert([nextNode,val*mulVal]);
            }
        }
        
    }
    return 0;
};