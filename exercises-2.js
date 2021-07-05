let student = {
	name : "David Rayy",
	sclass : "VI",
	rollno : 12,
	address: ''
};
console.log("----------------------bai 1------------------")
console.log(Object.keys(student));
console.log("-------------------bai 2----------------------")
console.log(Object.values(student));
console.log("--------------------bai 3-----------------------")
const { name, sclass, ...infos }  = student
console.log("my name is",name)
console.log("----------------------bai 4-------------------------")
let student1 = {
	name : "David Rayy",
	sclass : "VI",
	rollno : 12,
	address: '1111'
};
console.log("studen1111111", student1) 
console.log(student1.name = "Micheal Chen")
// console.log(Object.values(student1));
console.log("----------------------bai 5-------------------------")
if (Object.keys(student) == "" &&  Object.values(student) == "" ) {
    console.log("All keys are not empty")
} else {
    console.log("have empty")
}
console.log("-----------------bai 6---------------------------")
const factorial = (n) => (n - 1) > 0 ? n * factorial(n - 1) : 1;
console.log("factorial",factorial(4))
console.log("-----------------bai 7---------------------------")
let arr = [2, 3 , 6 , 6 , 5]
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 5) {
        Output = "have number 5"
    } else {
        Output = "not number 5"
    }
  }
console.log("Output", Output)

console.log("-----------------bai 8---------------------------")

const arr1 = [
	{ 
	  x: 1,
	  y: 1,
	},
	{ 
	  x: 2,
	  y: 3,
	},
	{ 
	  x: 3,
	  y: 3,
	},
	{ 
	  x: 3,
	  y: 4,
	},
	{ 
	  x: 4,
	  y: 5,
	},
	{ 
	  x: 6,
	  y: 7,
	}
]

// function getCount(objects) {
//     return objects.reduce((target, item) => {
//         (item.x === item.y) && (target += 1);
        
//         return target;
//     }, 0);
// }
function getCount(objects) {
    let tmp = 0 
    for (i = 0; i < objects.length; i++) {
        if (objects[i].x == objects[i].y) {
            tmp++
        }
    }
    return tmp
}
console.log(tmp)
// function getCount(objects) {
//     var count = 0;
//     for (var index in objects){
//         if (objects[index].x == objects[index].y){
//             count++;
//         }
//     }
//     return count;
// }
// console.log("getCount",count )