const foo = function () {
  const x = 1

  const bar = function () {
    console.log(x) //notice this inner function using the outer function's variable
  }

  return bar
}

const baz = foo() //out here, x doesn't exist
baz() //but when we invoke baz, we're printing x!
console.log(baz)