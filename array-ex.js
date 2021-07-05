arr = []
console.log(arr)
arr1 = [1, 1, 1]
console.log(arr1)
arr2 = []
// bai 2,3,4,5
var arr3 = [1, 2, 3, 4, 5]
// b = arr3[0] + arr3.length[-1]
sum = arr3[0] + arr3[arr3.length - 1]
arr3.push(sum)
console.log(arr3)


console.log("===================bai3===============")
// TINH TONG ARRAY
console.log("cach 1")
var arr4 = [1, 2, 3, 4, 5, 6]
tmp = 0  
arr4.forEach((element) => {
    tmp += element 
});
console.log(tmp)

console.log("cach 2") // khuyen nen dung
const sum1 = arr4.reduce((tmp, currentValue) => tmp + currentValue, 100)
// cong thuc reduce( callback function, init value)
// callback function co params 1 la bien ket qua, 2 la bien duyet qua tung phan tu

console.log('sum1', sum1)

var averge = tmp / arr4.length;
console.log(tmp)
console.log('averge',averge)


var expect = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9,1, 2, 3, 4, 5, 
                6, 7, 8, 9,1, 2, 3, 4, 5, 6, 7, 8, 9,1, 2, 3, 4, 5, 6, 7, 8, 9,
                1, 2, 3, 4, 5, 6, 7, 8, 9,1, 2, 3, 4, 5, 6, 7, 8, 9,1, 2, 3, 4, 5, 6, 7, 8, 9,1, 2, 3, 4, 5, 6, 7, 8, 9,
                1, 2, 3, 4, 5, 6, 7, 8, 9,1, 2, 3, 4, 5, 6, 7, 8, 9,1, 2, 3, 4, 5, 6, 7, 8, 9,1, 2, 3, 4, 5, 6, 7, 8, 9,
                1, 2, 3, 4, 5, 6, 7, 8, 9,1, 2, 3, 4, 5, 6, 7, 8, 9,1, 2, 3, 4, 5, 6, 7, 8, 9,1, 2, 3, 4, 5, 6, 7, 8, 9,
                1, 2, 3, 4, 5, 6, 7, 8, 9,1, 2, 3, 4, 5, 6, 7, 8, 9,1, 2, 3, 4, 5, 6, 7, 8, 9,
                1, 2, 3, 4, 5, 6, 7, 8, 9,1, 2, 3, 4, 5, 6, 7, 8, 9,1, 2, 3, 4, 5, 6, 7, 8, 9,1, 2, 3, 4, 5, 6, 7, 8, 9,
                1, 2, 3, 4, 5, 6, 7, 8, 9,1, 2, 3, 4, 5, 6, 7]
        let tmp3 = 0
         for ( i =  expect.length - 10; i < expect.length; i++) {
             console.log( expect[i])
            tmp3 += expect[i];
            }
            console.log("tmp33333",tmp3)

            tmp3 += expect[i];


// map1 = expect.map(x => x * 2)
// console.log(map1)
// const lastElement = expect[expect.length - 2]
// console.log("lastElement", lastElement)