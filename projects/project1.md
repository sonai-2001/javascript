# project Of Dom

## project code  link
[click here](https://stackblitz.com/edit/js-kgqapy?file=index.js)

## project live demo link
[click here](https://js-kgqapy.stackblitz.io)

## main logic code
```javascript
const body=document.querySelector("body")
const buttons=document.querySelectorAll(".button")
buttons.forEach(function (button)
{
 button.addEventListener("click",function(e)
 {
console.log(e)
console.log(e.target)
if(e.target.id==="blue")
{
  body.style.backgroundColor=e.target.id
}
if(e.target.id==="yellow")
{
  body.style.backgroundColor=e.target.id
}
if(e.target.id==="red")
{
  body.style.backgroundColor=e.target.id
}
if(e.target.id==="green")
{
  body.style.backgroundColor=e.target.id
}
 })
})







```
