const arr=[1,2,3,4,5]
// const answer=arr.reduce((acc,curval)=>acc+curval,0)
// console.log(answer)


// const answer=arr.reduce(function (acc,currval){ return acc+currval},0)
// console.log(answer)

const books=[
    {
        name:"java",
        price:700
    },
    {
        name:"python",
        price:709
    },
    {
        name:"js",
        price:1700
    }
    
]
const pricetopay=books.reduce((acc,currval)=>acc+currval.price,0)
console.log(pricetopay)