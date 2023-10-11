//singleton objects
const user=new Object()//here an object creates which is blank now
user.id="123"//here we can include some value in the object
//console.log(user)
const user2={
    id:"123",
    ob:{
        name:{
            firstname:"apurba",
            lastname:"bhadra"
        }
    }

}
//console.log(user2.ob.name["firstname"])//nesting objects print
const a={
    1:"a",
    2:"b"
}
const b={
    3:"a",
    4:"b"
}
const main={...a,...b}//merge two object into a single object using spread operator(...)
//console.log(main);
const arr=[{1:"a"},{2:"b"}]//array of objects
//console.log(arr[0]["1"])
const keys=Object.keys(a)//to get the keys of the objects
const values=Object.values(a)//to get the values of the objects for this case and above case it retrns array
const arr2=[...keys,...values]//merge two array
console.log(arr2)


