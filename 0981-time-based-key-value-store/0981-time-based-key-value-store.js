
var TimeMap = function() {
    this.map=new Map();
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if(!this.map.has(key)){
        this.map.set(key,[]);
    }
    this.map.get(key).push([value,timestamp]);
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if(!this.map.has(key)){
        return "";
    }
    const curr=this.map.get(key);
    let left=0;
    let right=curr.length-1;
    let mid;
    let res="";
    while(left<=right){
        mid=Math.floor((left+right)/2);
        const [value,time]=curr[mid];
        if(time===timestamp){
            return value;
        }else if(time>timestamp){
            right=mid-1;
        }else{
            left=mid+1;
            res=value;
        }
    }
    return res;
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */