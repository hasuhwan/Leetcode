/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary, sentence) {
  const answer = [];
  sentence = sentence.split(" ");
  const obj = {};
  dictionary.forEach((str) => {
    let idx = 0;
    let node = obj;
    while (idx < str.length) {
      if (!node[str[idx]]) {
        node[str[idx]] = {};
      }
      node = node[str[idx]];
      idx++;
    }
    node["end"] = true;
  });
    console.log(obj);
  sentence.forEach((el) => {
    let node = obj;
    for (let i = 0; i < el.length; i++) {
      if (node["end"]) {
        answer.push(el.slice(0, i));
        return;
      }
      if (!node[el[i]]) {
        answer.push(el);
        return;
      }
      node = node[el[i]];
    }
      answer.push(el);
  });
    return answer.join(" ");
};

