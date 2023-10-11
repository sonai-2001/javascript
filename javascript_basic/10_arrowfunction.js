
//f1(2,3) error
const f1=(num1,num2)=>{
   console.log(num1+num2)
   console.log(this)//{} so in any normal function this print some thing but in arrow function it prints 
   //{} like global
}
//f1(2,3) no error
const f2=(num1,num2)=>( num1+num2)//implicit return type arrow function
console.log(f2(4,7))
