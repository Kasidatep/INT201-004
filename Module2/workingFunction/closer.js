//closer function
// คุณสมบัติ 
// 1. nested function                มีฟังก์ชันลูก เนสเนต อยู่ในฟังก์ชันแม่
// 2. outer return function (nested) ฟังกชันแม่รีเทรินฟังก์ชันปิดล้อม เนสเตดด
// 3. all closer function(nested) use same varieble of outter function ใช้ตัวแปรร่วมกัน 


function counter() {
    let count = 0      //3
    function increment() {  //1
      return count++
    }
    function decrement() {
      return count--
    }
    function getCount() {
      return count
    }
    return {    //2
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