var fs = require('fs');
// const { resolve } = require('path/posix');
var n = 0
function readFile() {
  // var res
  // fs.readFile('./text.txt', 'utf-8', function(err, data) {
  //   res = data
  // })
  return n++
}


let urls = []

for(let i = 0; i < 20; i++){
  urls.push(readFile)
}

function concurRequest(urls, maxNum) {
  return new Promise(resolve => {
    if(urls.length === 0) {
      resolve([])
      return
    }
    const results = []
    let index = 0 // 下一个请求的下标
    let count = 0 // 当前请求的完成数量
    // 发送请求
    async function request() {
      if(index === urls.length) {
        return
      }
      const i = index
      const url = urls[index]
      index++
      try{
        // resq加入到 results
        const resq = await url()
        results[i] = resq
      }catch(err){
        // err加入到 results
        results[i] = err
      }finally{
        count++
        if(count === urls.length) {
          console.log('over');
          resolve(results)
        }
        request(results)
      }
    }
    const times = Math.min(maxNum, urls.length)
    for(let i = 0;i < times; i++) {
      request()
    }

  })
}

concurRequest(urls, 3).then((resqs)=>{
  console.log('----->',resqs);
})
