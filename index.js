function countdown(callback){
  window.setTimeout(2000)
  callback()
}

function createMultiplier(multiplierValue){
  function(given){
    return given * multiplierValue
  }
}
