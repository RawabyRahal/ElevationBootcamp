const family  = function () {
    const members = []
  
    const birth  = function (name) {
      members.push(name)
      console.log(members) //notice this inner function using the outer function's variable
    }
  
    return birth
  }

const giveBirth = family()

giveBirth("Fares")
giveBirth("Kawtar")
giveBirth("Roro")
giveBirth("UU")