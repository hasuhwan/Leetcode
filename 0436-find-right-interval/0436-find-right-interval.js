var findRightInterval = function(intervals) {
    const starts = intervals.map(([a, b], j) => [a, j]).sort(([a], [b]) => a - b)
    const res = Array(intervals.length).fill(-1);
    
    for(let i = 0; i < intervals.length; i++) {
        const curr = intervals[i][1];
        let left = 0, right = starts.length-1;
        
        while(left <= right) {
            const mid = Math.floor((left + right)/2);
            const [val, idx] = starts[mid];
            if(val == curr) { res[i] = idx; break; }
            if(val > curr) { res[i] = idx; right = mid - 1; } 
            else left = mid + 1;
        }
    }
    return res;
};