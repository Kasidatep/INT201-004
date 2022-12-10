const product = require('./data.json');

//console.log(product)
function product(id){
    // ค้นหา Product ที่มี id ตรงกับที่ต้องการที่อยู่ใน array product return obj ของ product
    return product.find(p => p.id === id)
    
}

console.log(product(1))
// code here 
// สร้าง คลาส myCart เพื่อเก็บข้อมูลตะกร้าสินค้า
// มี constarctor 1 ตัวรับ firstname 
// และ id ที่ไม่ซ้ำกัน (เพิ่มอัตโนมัติ)
// สร้าง อาร์เรย์เก็บ Object ที่แสดงข้อมูล ชื่อ Product ราคา จำนวนของแต่ละรายการ

// สร้าง function ในการแสดงข้อมูลของผู้ใช้งาน

// สร้าง function ในการเปลี่ยนชื่อผู้ใช้งาน

// สร้าง function ในการเพิ่ม Product ไปในตระกร้าสินค้า

// สร้าง function ในการเพิ่มจำนวนสินค้าที่มีอยู่ในตะกร้าตามไอดี

// สร้าง function ในการลดจำนวนสินค้าที่มีอยู่ในตะกร้าตามไอดี

// สร้าง function ลบสินค้าสินค้าที่มีอยู่ในตะกร้าตามไอดี

// สร้าง function ค้นหาสินค้าที่มีในตะกร้าโดยรับไอดีเข้ามา

// สร้าง function แสดงสินค้าทั้งหมดในตะกร้า

// สร้าง function แสดงราคารวมของสินค้าทั้งหมดในตะกร้า