# guess the number

## code link
[click here](https://stackblitz.com/edit/js-x6uwhv?file=index.js)

## live demo link
[click here](https://js-x6uwhv.stackblitz.io)

## main logic code
```javascript
// Import stylesheets
import './style.css';

// Write Javascript code!
let random=parseInt((Math.random()*100)+1)
//console.log(random)
const userinput=document.querySelector("#guessField")
const submit=document.querySelector("#subt")
const prevguess=document.querySelector(".guesses")
const lastresult=document.querySelector(".lastResult")
            
const lowOrHigh=document.querySelector(".lowOrHi")
const result=document.querySelector(".resultParas")
const p=document.createElement("p")
let prevguesses=[]
let guessno=1
let playgame=true

if(playgame)
{
  submit.addEventListener("click",function (e){
    e.preventDefault()
    const guess=parseInt(userinput.value)
    validation(guess)
  })
}

//methods
function validation(guess)
{// for validation of guess range between 1 to 100
 if(isNaN(guess))
 {
   alert("please enter a valid number")
 }
 else if(guess<1)
 {
   alert("please enter more than 1")
 }
 else if(guess>100)
 {
   alert("please enter less than 100")
 }
 else{
     prevguesses.push(guess)
     if(guessno==11)
     {
       displayGuess(guess)
       displayMessage(`you are out of move and the number was ${random}`)
       endGame()
     } 
     else
     {
       
       displayGuess(guess)
       checkGuess(guess)

     }
 }
}
function checkGuess(guess)
{// match with the random the number
  if(guess===random)
  { displayMessage(`the number is right you have won the match`)
endGame()
}
   else if(guess>random)
   {displayMessage(`the number is large than the number`)}
   else
   {displayMessage(`the number is small than the number `)}

}
function displayMessage(message)
{
  // according to the check display a message inside the low or high
  lowOrHigh.innerHTML=`${message}`
}
function displayGuess(guess)
{
 // show inside the resulr related data inside result section.
 userinput.value=''
 prevguess.innerHTML+=`${guess},`
 guessno++;
 lastresult.innerHTML=`${11-guessno}`
}
function endGame()
{
userinput.value=""
userinput.setAttribute("disable","")
p.classList.add("button")
p.innerHTML=`<h2 id="notun">start newgame</h2>`
result.appendChild(p)
playgame=false
newgame()


}
function newgame()
{
const notun=document.querySelector("#notun")
notun.addEventListener("click",function(e)
{
  userinput.value=""
  userinput.removeAttribute("disable")
   random=parseInt((Math.random()*100)+1)
  guessno=1
  prevguess.innerHTML=""
  lastresult.innerHTML=`${11-guessno}`
  playgame=true
  
  result.removeChild(p)
  

})
}



```