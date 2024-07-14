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
console.log('Product1 province = ',product1.distributor.address.province);
if (Object.keys(product2).length === 0) {
  console.log('Product2 province = ', product1.distributor.address.province);
}
