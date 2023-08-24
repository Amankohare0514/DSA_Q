var topKFrequent = function (words, k) {
    let map = new Map();
    for (let word of words) {
      map.set(word, (map.get(word) || 0) + 1);
    }
    let arr = [];
    for (let [word, count] of map.entries()) {
      arr.push({ word, count });
    }
    arr.sort((a, b) => {
      if (a.count === b.count) {
        return a.word.localeCompare(b.word);
      }
      return b.count - a.count;
    });
    return arr.slice(0, k).map((item) => item.word);
  };