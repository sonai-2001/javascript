
//map is used to perform some opearation on each element of array and return the values.
const arr=[1,2,3,4,5]
// const answer=arr.map((item)=>item+2)
// console.log(answer)

 
// nested 
const answer=arr.map((item)=>item+2).filter((item)=>item<5)// nesting
console.log(answer)

