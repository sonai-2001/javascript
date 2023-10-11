
let a=9
if(true)
{
//console.log(a)//9 here a is trat as global for the ehole program because it is not under any braces
 
}
function fn1()
{
    let a =4
    console.log(a)
    function fn2()
    {
     let b=5
     console.log(a)
     console.log(b)
    }
    fn2()
    //console.log(b)   a children can takes icecream from its parent but a parent should
    //not take ice cream from their children
}
//fn1()

function f1()
{
    console.log("hi")
}
f1()
//f2() we can not call it before its defination in this type of fnction declaration some time this
// kind of function is known as expression and it is demo that in javascript variable hjas so much 
//power
const f2=function()
{
    console.log("hello")
}
f2()