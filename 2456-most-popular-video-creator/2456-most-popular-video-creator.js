/**
 * @param {string[]} creators
 * @param {string[]} ids
 * @param {number[]} views
 * @return {string[][]}
 */
var mostPopularCreator = function (creators, ids, views) {
  const obj = {};
  const total = creators.map((el, idx) => [el, ids[idx], views[idx]]);
  const answer = [];
  let max = 0;
  total.forEach(([creator, id, view]) => {
    if (obj[creator]) {
      obj[creator].sum += view;
      const pop = obj[creator].pop;
      if (pop[1] < view) {
        obj[creator].pop = [id, view];
      } else if (pop[1] === view) {
        if (pop[0] > id) {
          obj[creator].pop = [id, view];
        }
      }
    } else {
      obj[creator] = { pop: [id, view], sum: view };
    }
    max = Math.max(max, obj[creator].sum);
  });
  for (let key in obj) {
    if (obj[key].sum === max) {
      answer.push([key, obj[key].pop[0]]);
    }
  }
  return answer;
};