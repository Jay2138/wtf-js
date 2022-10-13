let fs = require('fs')
const path = require('path')

// first error 错误优先原则
// 回调地狱    异步
// console.log(1);
// fs.readFile('./name.txt', 'utf-8', function(err, data){
//   fs.readFile(data, 'utf-8', function(err, data){
//     console.log(data);
//   })
// })
// console.log(2);

/***
 * 1.异步：-DOM冲突 （单线程）
 * 2.事件轮询
 * 3.回调函数
 */
/**
 * 因为JS是单线程， 解决方式--异步
 * 异步的解决方式---->事件轮询
 * 事件轮询的核心---->回调函数
 * 
 * 
 * 高阶函数----参数是回调函数
 * arr.sort(function(){})
 */

// function readFile(pathname) {
//   // executon  (执行器函数)
//   return new Promise((resolve, reject) => {
//     console.log(1);
//     fs.readFile(pathname, 'utf-8', function(err, data){
//       if(err){
//         reject(err)
//         return
//       }
//       resolve(data)
//     })
//   })
// }

// var promise = readFile('./number.txt')
// promise.then((data) => {
//   console.log(data);
// }, (err) => {
//   console.log(err);
// })

// let p1 = Promise.resolve(1)
// let p2 = Promise.reject(2)

// p1.then((data)=>{
//   console.log(data);
// })

// // p2.then(()=>{}, (err) => {
// //   console.log(err);
// // })
// p2.catch((err) => {
//   console.log(err);
// })

// thenable 对象
let obj = {
  then(resolve, reject) {
    // resolve(1)
    reject(1)
  }
}

let p1 = Promise.resolve(obj)
p1.then((data) => {
  console.log(data);
}, (err) => {
  console.log(err);
})