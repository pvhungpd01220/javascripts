// cho arr = [1 ,2,3]
// kiem tra neu arr có du lieu thi in ra true
arr = null;
// arr = [1 , 2, 3];

// if (Array.isArray(arr) && arr !== []  ) { //
//     console.log(true)
// } else {
//     console.log(false)
// }

let number  = "1"

if (number == 1) {
    number = number + 1
    console.log(number)
}

arr1 = [1,2,3]; // vung nho A
arr3 = arr1; // vung nho A
arr2 = [1,2,3]; // vung nho B
 
if (arr1 === arr3) { // so sanh vung nho chu ko so sanh gia tri cua array
   console.log(true)
} else {
    console.log(false)
}

// cach so sanh 2 array bang nhau
let isEqual = true
// kiem tra do dai cua 2 mang so sanh truoc
if (arr1.length !== arr2.length){
    isEqual = false
}

arr1.forEach((element, index) => {  //index la vi tri phan tu trong mang
    if(element != arr2[index]) {
        isEqual = false;
    }
});

console.log('isEqual', isEqual)


const rs = 0

switch(rs) {
    case 1:
        console.log(1)
        break
    case 2:
        console.log(2)
        break
    case 5:
        console.log(5)
        break
    default:
        console.log('default')
}

