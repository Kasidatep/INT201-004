# test-findAllIndex

#### ข้อกำหนดในการสอบ

\*\*\* ให้ใส่คอมเมนต์เป็นรหัส ชื่อ-นามสกุล ลงใน source code ที่ submit นักศึกษาที่ไม่ใส่จะถูกหักคะแนน 50% ของคะแนนสอบ \*\*\*

ข้อ 1. ให้เขียน Function ชื่อ findAllIndex(yourString, yourSearch) เพื่อ return array ที่แสดงตำแหน่ง index ทุกตำแหน่งของ yourSearch ที่ปรากฎใน yourString (case sensitve) กรณีที่ไม่พบ ให้ return empty array []

ตัวอย่างเช่น

- findAllIndex('abcdefgh ijklmnop', 'abcdefghijklmnop')) จะได้ []
- findAllIndex('', 'a')) จะได้ []
- findAllIndex('abcdefghijklmnop', 'hi')) จะได้ [7]
- findAllIndex('abc bdz kbce', 'bc') จะได้ [ 1, 9 ]
- findAllIndex('ababababab', 'ab') จะได้ [ 0, 2, 4, 6, 8 ]
- findAllIndex('lorem or lorems', 'lorem') จะได้ [ 0, 9]
- findAllIndex(
  'be yourself and push yourself because no one else to do it for you', 'you') จะได้ [ 3, 21, 63 ]
