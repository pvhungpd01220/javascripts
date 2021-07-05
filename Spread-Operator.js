// Spread Operator (...)


const	a	=	[1,	2,	3]

const	b	=	[...a,	4,	5,	6]

const c = { a: 1 }

const d = { ...c, b: 2 }

// [1,2,3,4,5,6]

const [first,	second,	...others] = b


console.log(first)

console.log(second)


const user = {
  name: 'Dai',
  email: 'daipham1210@gmail.com',
  phone: 123123423423,
  address: 'abcasdasd'
}

// Destructure 
const { name, email, phone,  ...infos }  = user
console.log(name)
console.log(email)
console.log(infos)


arr = [1,2,3,4,5]
// vi tri
for(i in arr) {
  console.log(i)
}
// ket qua
for(i of arr) {
  console.log(i)
}


// toan tu 3 ngoi
// const rs = statement ? resultA : resultB
const result = arr.length === 5 ? 1 : arr.length === 3 ? 5 : 4



let message;
login = 'Director'

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'Director';
} else {
  message = '';
}

const messger = login == "Employee" ? "Hello" : login == 'Director'? "Greetings" : login == '' ?  'No login' : "" ;


// switch case
console.log("-----------------------------------------------------------")
login = 'abcd'
switch (login) {
  case "Employee":
    message = 'Hello'
  break;
  case "Director":
  case "abcd":
  case "abcd":
  case "abcd":
   message = 'Greetings'
  break;
  case "":
    message = 'Director'
    break;
  default: 
   message = ''
}


console.log(message)
function fc(a) {
  console.log('run function')
  return true
}

let val = 1

if (val || fc(val)) {
  console.log(true)
}


// if (A || B || C) => chi can A hoac B true, thi ket qua cau menh de la true

// A && B && C => can ca A, B, C true thi menh de moi la true


// A && (B || C) 


// const asss = (1 * 2) + ( 5 / 2 ) % 2



const Employee = {
  firstname: 'John',
  lastname: 'Doe'
};

delete Employee.firstname;


// i = 0
// // vong lap while thuong dung khi so vong lap ko xac dich truoc
// while (i < 10) {
//   i++ 
//   console.log(i)
// }

// while(true) {
//   if (A) {
//     break;
//   }
// }

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// kiem tra arr co phan tu 56 ko, dung break sau khi tim thay
// khi mo xong go ra day nghe
// co thi print ra co
arr = [15, 92, 34, 46, 56, 69, 78, 82, 95, 1860]
// hard code 
// let i = 0
// while(true) {
//   i 
//   if (i === 56) {
//     break;
//   }
// }

// dat ten bien tra ve true/false thi dat co chu is phia truoc
let isFound = false;
// for (const element of arr) {
//     console.log(element)
//     if (element === 57) {
//       isFound = true
//       break
//     }
// }

// break chi dung dc trong for i 1 -> n, ko dung dc trong for of
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
  if (arr[i] === 56) {
    isFound = true
  }
}
console.log("tim thay 56", isFound)


const students = [{ name: 'abc'}, { name: 'abcd'}, { name: 'abc1'}, { name: 'abc2'}]
// voi cai bai toan tim phan tu trong mang, dung 2 ham Array#some, Array#find
// find tra ve chinh phan tu do
const item = students.find((item => item.name === 'abc1' )) 
console.log(item)

// some tra ve true false
const isFound1 = students.some((item => item.name === 'abc1' )) 
console.log(isFound1 )