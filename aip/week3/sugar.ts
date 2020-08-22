
let list = ['hello', 'there'];
let [a, b] = list;
let obj = { a, b };
let newList = [...list, 'developer'];
let newObj = { ...obj, c: 'developer' };
let { c } = newObj;
