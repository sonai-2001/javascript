// difference between == & ===
/*

== checked only value
=== checked the type and value
*/
// if("2"==="2")
// {
//     console.log(`ji`)
// }
//truthy and falsy value
// const name="apurba"
// if(name)// it checks with out conditional operator because its assume the name string is true.
// {
// console.log("yes");
// }
// else
// {
// console.log("no")
// }
//truthy value
//  "0","false"," ",{},function(){}(empty function)
//falsy value
// false,0,-0,BigInt 0n, "",null,undefined,nan

//how to check wheather an array is empty ot not
// const arr =[4]
// if(arr.length==0)
// {
// console.log("empty");
// }
// else
// {
//     console.log("not empty")
// }

// check wheather an object is empty or not
const ob={
  1: "a"
}
if(Object.entries(ob).length==0)
{
    console.log("empty")

}
else{
    console.log("not empty");
}