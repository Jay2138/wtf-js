// 手写trim

function trim(str) {
  return str.replace(/(^\s+)|(\s+$)/g, '')
}

let str = '\n \t larry \t'
console.log(trim(str));