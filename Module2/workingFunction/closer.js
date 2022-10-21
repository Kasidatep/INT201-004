function counter() {
    let count = 0
    function increment() {
      return count++
    }
    function decrement() {
      return count--
    }
    function getCount() {
      return count
    }
    return {
      increment,
      decrement,
      getCount
    }
  }
  const c = counter()
  c.increment()
  console.log(c.getCount())
  c.increment()
  console.log(c.getCount())
  c.decrement()
  console.log(c.getCount())