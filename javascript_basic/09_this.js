console.log(this)//{}
function f()
{
    console.log(this.username)//undefined
    console.log(this)//some propertieds print
}
//f()
const ob={
    username:"apurba",
    password:123,
    fn:function()
    {
       console.log(`username is ${this.username}  and password is ${this.password}`) 
    }
}
//ob.fn()
if(true)
{
    console.log(this);//{}
}