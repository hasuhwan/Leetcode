/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    const map=new Map();
    paths.forEach((el)=>{
        map.set(el[0],1);
    });
  for(let i=0; i<paths.length; i++){
      if(!map.has(paths[i][1])){
          return paths[i][1];
      }
  }
};