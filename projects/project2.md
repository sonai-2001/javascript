# Bmi calculator

## code link
[click here](https://stackblitz.com/edit/js-wjtwdj?file=index.js)
 
 ## live demo

 [click here](https://js-wjtwdj.stackblitz.io)
 ## Main logic
 ```javascript
const form=document.querySelector("form")
form.addEventListener("submit",(e)=>
{
  const height=parseInt(document.querySelector("#height").value)
  const weight=parseInt(document.querySelector("#weight").value)
  const result=document.querySelector("#results")
  if(height===''||height<0||isNaN(height))
   { result.innerHTML="Invalid height"}
   else if(weight===''||weight<0||isNaN(weight))
   {
     result.innerHTML="Invalid weight"
   }
   else{
      const bim=(weight/((height*height)/1000)).toFixed(2)
      result.innerHTML=`<span> ${bim}</span>`
   }
})




 ```