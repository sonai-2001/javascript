# live clock project

## code link
[click here](https://stackblitz.com/edit/js-mt7zzq?file=index.js)

## live demo
[click here](https://js-mt7zzq.stackblitz.io) 

## main logic code

``` javascript
const clock=document.getElementById("clock")

setInterval(function()
 {
     let time=new Date();
//     //console.log(time.toLocaleTimeString())
    
    clock.innerHTML=time.toLocaleTimeString();

  }
,1000 
)


```