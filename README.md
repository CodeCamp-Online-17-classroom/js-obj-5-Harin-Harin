# js-lab-51
### Lab51 Object: Nested Object
- ให้เขียนโค้ดเพื่อ log province  ของ product1
- หากมี product2 เป็น object  ว่าง ให้ log province ของ  product2 โดยใช้คำสั่งเดียวกับ product1 (หาก Error ให้หาวิธีแก้)
- หริณ มาเบ้า
- product2 เป็น object ใช้ if product2.length === 0 ไม่ได้ จึงใช้ Object.keys(product2).length === 0 แทน

```JavaScript
const product1 = {
  name: 'Water',
  distributor: {
    name: 'Giraffe Water Company',
    address: {
      street: 'Phetchaburi',
      subdistrict: 'Thanonphetchaburi',
      district: 'Ratchathewi',
      province: 'Bangkok'
    }
  }
};
const product2 = {}
```
