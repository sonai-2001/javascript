// for(let i=0;i<10;i++)
// {
//     console.log(i) 
// }

// for(let i=0;i<=10;i++)
// {
//     console.log(`the value of outer loop is ${i}`)
//     for(let j=0;j<=10;j++)
//     {
//       console.log(`inner loop value is ${j}`)
//     }
// }

// +++++++++++++++++++++++++ multiplication table of  numbers  ++++++++++++++++++++++++++++++++++++++
// for(let i=1;i<=10;i++)
// {
//     console.log(`table of ${i}`)
//     for(let j=1;j<=10;j++)
//     {
//         console.log(`${i} * ${j}= ${i*j}`)
//     }
// }

//loops in array
// const myArray=["apurba","ishika","sonai","molu"]
// for(let i=0;i<myArray.length;i++)
// {
//     console.log(myArray[i])
// }
// break use
// const myArray2=["apurba","ishika","sonai","molu"]
// for(let i=0;i<myArray2.length;i++)
// {
//     console.log(myArray2[i])
//     if(myArray2[i]=="ishika")
//     {
//         console.log(`dont need more`)
//         break
//     }//apurba ishika dont need more

// }
    //use of continue

    const myArray3=["apurba","ishika","sonai","molu"]
for(let i=0;i<myArray3.length;i++)
{
    
    if(myArray3[i]=="sonai")
    {
        console.log(`dont need to show it `)
        continue
    }

    console.log(myArray3[i])
}


//apurba ishika dont need to show it  molu