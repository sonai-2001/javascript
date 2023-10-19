# random color generator

## code link
[click here](https://stackblitz.com/edit/js-j2yhco?file=index.js)

## live demo link

[click here](https://js-j2yhco.stackblitz.io)


### code 
```javascript
const button =document.getElementById("button")
button.addEventListener("click",function(){
  let randomcolor=getRandomColor()
  document.body.style.backgroundColor=randomcolor
})

function getRandomColor()
{
  const letters="0123456789ABCDEF"
  let c="#"
  for(let i=0;i<6;i++)
  {
    c+=letters[Math.floor(Math.random()*10)]
  }
  return c;
}





```