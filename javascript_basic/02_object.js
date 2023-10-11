//singleton
//Object.create


//object literal
const mysym=Symbol("key1")
const ob={
    name:"apurba",
    age:22,
    gender:"male",
    "height":"good",
    [mysym]:"1"
}
console.log(ob.name)
console.log(typeof ob.name)
console.log(typeof ob.age)
console.log(ob["gender"])//it is ideal because if key value is string than it is only usable.
console.log(ob["height"])
console.log(ob[mysym])//print the symbol value.

