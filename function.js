function myFunction(p1, p2) {
    return p1 * p2 
}

// console.log(myFunction(3))

// //default params

// function myFunction1(p1, p2 = 10) {
//     return p1 * p2 
// }

// console.log(myFunction1(3))

// //

// function myFunction1() {
//     return 'abc'
// }

 // function ko ten 
const a = function() {
    console.log('noname fucntion')
}


console.log(a())


// function torng js co the truyen vao function khac duoi dang params, co the dc chua trong object

const a1 = (n) => n*10

const a3 = (n) => n*50

const a2 = (i, fc) => fc(i) // fc la params duoi dang function

console.log('func trong func', a2(5, a3))

// ARROW FUNCTION, ES6

const myArrFunction = (a, b) => {
    return a * b
}

// neu fucntion chi co 1 dong, co the luot bo return
const myArrFunction1 = (a, b) => a * b

// neu chi co 1 parram
const myArrFunction2 = a => a * 10
// neu return object can co dau ( )
const myArrFunction3 = a => ({ a: a })

console.log(myArrFunction3(3)) 

// Cach bien this hoat dong



const car = {
    model: 'audi',
    year: 1990,
    fullName: function() {
        // cach noi chuoi 1 ( cu )
        // return this.model + " " + this.year
        // cach noi chuoi moi ES6
        return `${this.model} ${this.year}` // this ke thua
    },
    arrFunction: () => {
        return `${this.model} ${this.year}`
    }
}

console.log(car.fullName())
console.log(car.arrFunction())


// DOM 

// const link = document.querySelector('#link')

// const abc = 123
// link.addEventListener('click',	() => {
//     this o day la wwindow
// })

// const link = document.querySelector('#link')
// link.addEventListener('click',	function()	{	
//     this o day la link
// })

// arr = [1, 2, 3] 
// arr1 = 0
// // ra 6
// const myFunction4545 = (arr) => {
//     arr.forEach(element => {  
//         tmp += element 
//     }); 
//     return tmp
// }

// muc tieu: duyet qua tung phan tu, cong bien tam vs tung phan tu do, ket thuc vong lap, tra ve bien tam
// console.log(myFunction4545(arr))
var b = [1,2,3,4,5]
tmp1 = 0  
b.forEach((element) => {
    tmp1 += element 
});
console.log(tmp1)
