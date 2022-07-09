const json = require('../fu/json')
const s = json.dumps({one: 1, two: 2}, {encoding: 'utf8', indent: 2})
console.log(s);
const a = {one: 1, two: 2};
json.dump(a, 'haha.json');