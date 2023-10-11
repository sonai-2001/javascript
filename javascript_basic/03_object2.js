const mysym=Symbol("key")

const ob={
    name:"apurba",
    age:22,
    "height":"good",
    [mysym]:"value"

}
ob.relation="in love"//here a another key value pairswe can add
//console.log(ob)//printing lika a  object at console
ob["mother"]="Sormistha Bhadra"//in this way also we can add key value pairs
//console.log(ob)
ob["height"]="decent"//here we can change any existense value also
//console.log(ob)
//Object.freeze(ob)//if you freeze any object then any change will not make any effect but incase of vhanges no error will come
ob.name="sonai"
//console.log(ob)
ob.fn=function()
{
    console.log(`hi my name is ${this.name}`)
}
console.log(ob)
ob.fn()