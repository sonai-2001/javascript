//immediately invoked function expression
// ++++++++++++++++++++++++++++example+++++++++++++++++++++++++++++++++++++++
(function fn(num1,num2)//it is named iife
{
  console.log(num1+num2)
})(1,4);//it invoked immediately
/*
if we wanr to run two iife then we have to terminate the first iife with a semicolon because it
 cant terminate by itself.
 */
((name)=>{
    console.log(`this is ${name}`)
})("apurba")//arrow function also can be iife. it is normal iife

// iife is used for two reason 
// 1)  for immediate execution
// 2)  do not come arount polluted global variable
