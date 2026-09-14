function updateProduct(product, newPrice, user) {
  if (canUpdate(user)) {
    product.price = newPrice;
  } else{
    console.log('Операция запрещена!');
  }
}
// function canUpdate(user){
//   if (user.role === 'ADMIN' || user.role === 'MANAGER') {
//     return true;
//   }
//   return false;
// }
// function canUpdate(user){
//   if (user.role === 'ADMIN'){
//     return true;
//   }
//   if(user.role === 'MANAGER'){
//   return false;
// }Неудачная версия 

function canUpdate(user){
  return["ADMIN", "MANAGER"].includes(user.role);
}
const user = {
    name: 'Alex',
    role: 'USER'
};
const admin = {
    name: 'John',
    role: 'ADMIN'
};

const manager = {
  name: 'Jack',
  role: 'MANAGER'
};


const product = {
  title: 'Banana',
  price: 20,
};
console.log(product);
updateProduct(product, 0.75,user);
console.log(product);