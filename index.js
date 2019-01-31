function countdown(callback){
  window.setTimeout(2000)
  callback()
}

function createMultiplier(multiplierValue){
  return function(given){
    return given * multiplierValue
  }
}
var doubler = createMultiplier(2)
var tripler = createMultiplier(3)