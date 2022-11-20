// 数组去重
const arr = [3, 3, 4, 5, 'a', 'a', {a: 1}, {a: 1}]

// function removeDuplicate(arr) {
//   return [...new Set(arr)]
// }

// 不用set如何去重

// function removeDuplicate(arr) {
//   return arr.filter((value, index) => {
//     return arr.indexOf(value) === index
//   })
// }

// 在原数组上去重

// function removeDuplicate(arr) {
//   let set = new Set()
//   for(let i = 0; i < arr.length; i++){
//     if(!set.has(arr[i])){
//       set.add(arr[i])
//     }else{
//       arr.splice(i, 1)
//       i--
//     }
//   }
// }
// removeDuplicate(arr)

// 去重相同对象
// 通过JSON.stringfy实现


console.log(arr);



