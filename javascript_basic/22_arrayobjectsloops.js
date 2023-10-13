codinginfo=[
{
    codingName: "c",
    speciality: "good for make foundation" 
},
{
    codingName: "java",
    speciality: "good for android development" 
},
{
    codingName: "js",
    speciality: "good for web development" 
}


]
codinginfo.forEach((item)=>{
console.log(`${item.codingName} is ${item.speciality}`)
/*
c is good for make foundation
java is good for android development
js is good for web development
*/
})


//for every forEach element there are three parameter for each function in forEach loop 
// array value and index and  total array.