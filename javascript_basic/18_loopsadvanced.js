//for of
// ---->>>> this are array specific and object specific loop
//[{},{},{},{}] array of pbjects
// string, array and objects all are iterative property.


// arr=[1,2,3,4,5]
// for(const num of arr)
// {
//     console.log(num)//1,2,3,4,5
// }


// name="apurba bhadra"
// for(const letter of name)
// {
//     if(letter==" ")
//     {
//         continue
//     }
//     console.log(letter)//apurbabhadra without space because of continue statement.
//     // above two example we understand that for of loop can run in any iterative prperty like array,string,
//     // object.

// }
programs=["java","c","js","python"]
for(const i in programs)
{
    console.log(i)
    /*
    0 this are key values of array which is index of java
    1
    2
    3
    */
}