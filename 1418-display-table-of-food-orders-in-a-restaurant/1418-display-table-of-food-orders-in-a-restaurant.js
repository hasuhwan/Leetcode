/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
var displayTable = function(orders) {
    orders.sort((a,b)=>Number(a[1])-Number(b[1]));
    const foodSet=new Set();
    const tableMap=new Map();
    orders.forEach(([customer,table,food])=>{
        foodSet.add(food);
        if(!tableMap.has(table)){
            tableMap.set(table,new Map());
        }
        const tableInfo=tableMap.get(table);
        tableInfo.set(food,(tableInfo.get(food)||0)+1);
    });
    const sorted=[...foodSet].sort();
    const title=["Table"].concat(sorted);
    const dataArr=[];
    for(let [tableId,data] of tableMap.entries()){
        const tempData=[tableId];
        sorted.forEach(food=>{
            tempData.push(data.has(food)?String(data.get(food)):"0");
        });
        dataArr.push(tempData);
    }
    return [title].concat(dataArr);
};