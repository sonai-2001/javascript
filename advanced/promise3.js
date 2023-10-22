fetch("https://api.github.com/users/hiteshchoudhary").then(function(response){
    //console.log(response)
    return response.json()

}).then(function(data){
  //console.log(data)
  return data.followers
}).then(function(followers){
    console.log(followers)
}).catch(function(error){
    console.log(error)
})