## temparature converter

# code link
[click here](https://stackblitz.com/edit/js-iwmuum?file=index.js)

# live demo

[click here](https://js-iwmuum.stackblitz.io)

# main logic
```javascript
<script>
      //const input=document.querySelectorAll(".inp")
      //console.log(input)
      let cel=document.getElementById("inp1")
      let feh=document.getElementById("inp2")
      cel.addEventListener("input",function(){
        let c=this.value
        let f=c*(9/5)+32
        feh.value=f
      })
      feh.addEventListener("input",function(){
        let f=feh.value
        let c=(f - 32) * 5/9
        cel.value=c
      })
      </script>


```