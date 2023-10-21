const promise2=new Promise(function(resolve,reject){
setTimeout(function(){
    let triggered=false
    if(!triggered)
    {
        console.log("done")
        resolve({username:"apurba",password:"22may2001"})
    }
    else
    {
        reject("some error occures")
    }
},1000)
})
promise2.then(function(user){
     console.log(user)
     return user.username
}).then(function(username){
      console.log(username)
}).catch(function(error){
     console.log(error)
})