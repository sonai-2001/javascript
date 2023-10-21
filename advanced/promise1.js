// setTimeout(function(){
//     console.log("hi")
// },2000)
// console.log("apurba") asynchronus js where some thing is happening after some time but meanwhile 
//normal code flow is happening.

const promise1=new Promise(function(resolve,reject){
       setTimeout(function()
       {
        console.log("hi")
        resolve()// if we use resolve later then the prommise works before the async task. 
       
       },1000)
       
       
})
promise1.then(function(){
    console.log("done")
})


const promise2=new Promise(function(resolve,reject){
     setTimeout(function(){
        console.log("hi")
        resolve({a:1,b:2})
     },2000)
})
promise2.then(function(obj){
console.log(obj)
})