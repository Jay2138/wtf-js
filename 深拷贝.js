let obj = {a: 1, b: {c: 2}, d: [1, 2, 3]}
// 第一种
function deepClone(obj) {
  let ret = Array.isArray(obj) ? [] : {}
  for(let key in obj){
    if(typeof obj[key] === 'object' && obj[key] !== null){
      ret[key] = deepClone(obj[key])
    }else{
      ret[key] = obj[key]
    }
  }
  return ret
}
let obj2 = deepClone(obj)
obj2.b = 2

// 第二种
let obj3 = JSON.parse(JSON.stringify(obj))
obj3.b = 3

console.log(obj, obj2, obj3); // 两者修改值不影响


// 对于一个函数，如何深拷贝
function deepCloneFun(fn) {
  return fn.bind(null)
}

function sum(a, b){
  return a + b
}
let sum2 = deepCloneFun(sum)
console.log(sum2(1,2), sum === sum2);
