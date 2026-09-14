const user = {
  name: 'Alex',
  role: 'USER',
  passwod: '111',
};

const admin ={
  name: 'Jhon',
  role: 'ADMIN',
  password: '222',
}
const aunthenticateUser  = user ;
if (aunthenticateUser.role === 'ADMIN') {
  console.log('Welcome Admin');
}else{
  console.log('Stop! You are not allowed to see this page');
}