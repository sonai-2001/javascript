 function sum(number1,number2)
 {
   console.log( number1+number2)
 }
//  sum(2,3)//5
//  sum(1,2,3)//3 beacuse it takes only first two values
 function calculatecart(...number)
 {
   console.log(number)
 }
 calculatecart(23,45,1,234,45)//for any number of value ...this opeartor
 // is used and it translaye those values in to a
 //array
 const student ={
    name:"apurba",
    course:"MCA",   
    semester:3
 }
 function getobject(s)
 {
   console.log(`i am ${s.name}, and my course is ${s.course} and semester is ${s.semester}`)
 }
 //getobject(student)
 function getobjects(s)
 {
    const{name,course,semester}=s
   console.log(`i am ${name}, and my course is ${course} and semester is ${semester}`)
 }
 //getobjects(student)
 function getArray(ar)//a function which takes an array as a parameter
 {
  console.log(ar)
 }
 getArray([67,"6788",898.09])


