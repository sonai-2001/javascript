//for in
const ob={
    c:".c",
    java:".java",
    python:".python",
    javascript: ".js"
}
for(const i in ob)
{
    console.log(i)// only keys are come
    /*
    c
java
python
javascript
    */
}
for(const key in ob )
{
    console.log(`${key} extension is ${ob[key]}`)// for value ob[key]
}