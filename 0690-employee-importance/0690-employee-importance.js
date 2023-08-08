/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
    let answer=0;
    const obj={};
    employees.forEach(el=>{
        obj[el.id]={val:el.importance,child:el.subordinates};
    });
    const queue=[id];
    while(queue.length!==0){
        const temp=queue.shift();
        answer+=obj[temp].val;
        obj[temp].child.forEach(id=>{
            queue.push(id);
        })
    };
    return answer;
};