//// maps
/*const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));
// Expected output: 1

map1.set('a', 97);

console.log(map1.get('a'));
// Expected output: 97

console.log(map1.size);
// Expected output: 3

map1.delete('b');

console.log(map1.size);
// Expected output: 2
*/
// in maps you cant  enter duplicate value.and it comes in serial order it will be useful for dsa

// const map= new Map()
// map.set(1,"a")
// //console.log(map)
// map.set(1,"a")
// console.log(map)
// console.log(map.get(1))// for getting valued by key
// map.delete(1)// deleting total element by key value.
// map.set(2,"a")
// console.log(map)
// console.log(map.size)//1  map.size is not a function it is only a property like in array







const map=new Map()
map.set(1,"a")
map.set(2,"b")
map.set(3,"c")
map.set(4,"d")
for(const key of map)
{
   // console.log(key)// [1,'a]  [2,'b]...... like this means separate array will come
}
for (const  [key , value] of map)
{
    console.log(key,":", value)
   /* 
    1 : a
    2 : b
    3 : c
    4 : d
    */
}