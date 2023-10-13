// look incase of forEach loop it does not return any thing autoamtically we have to return some thing 
// in case of return something by for loop but look we have to return it on a different array
// like we do solve a problem by forEach return some thing
arr=[2,3,4,53,3,45]

// const answer=[]
// arr.forEach((item)=>
// {
//  if(item>25)
//  {
//     answer.push(item)
//  }
// })
// console.log(answer)//[ 53, 45 ]


//we can do the above thing very  by filter method because it return something in nature

// let answer =arr.filter((item)=>item>25)// we dont need to use an braces inside  arrow function
 // console.log(answer)
 answer =arr.filter((item)=>{ return item>25})// because we use braces inside arrow function thats why 
 // use return
//console.log(answer)


friend=[
    {
    name:"sayan",
    stream:"btech",
    semester:4
},
    {
    name:"manish",
    stream:"bsc",
    semester:6
},
    {
    name:"apurba",
    stream:"mca",
    semester:3
}

]
const student=friend.filter((item)=>item.semester>4)
console.log(student[0].name)// to get only the name beacuse it returns the array from where
// i extrac the value



