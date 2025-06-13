//1
let arr = [1, 2, 3];
arr.push(4);

console.log(arr);

//2
let arr = [1, 2, 3];
arr.pop();

console.log(arr);

//3
let arr = [1, 2, 3];
arr.shift();

console.log(arr);

//4
let arr = [1, 2, 3];
arr.unshift(0);

console.log(arr);

//5
let arr1 = [1, 2];
let arr2 = [3, 4];

let merge = [...arr1, ...arr2];
console.log(merge);

//6
let arr = [40, 80, 75, 19, 80];
let index = arr.indexOf(80);

console.log(index);

//7
let arr = [40, 80, 75, 19, 75];
let index = arr.lastIndexOf(75);

console.log(index);

//8
let arr = [1, 2, 3, 4, , 5];
console.log(arr.includes(3));

//9
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let newArr = arr.slice(2, 6);

console.log(newArr);

//10
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
arr.splice(2, 3);

console.log(arr);

//11
let arr = [10, 20, 30, 40];
arr.forEach(function (element) {
  console.log(element);
});

//12
let arr = [1, 2, 3];
let double = arr.map(function (element) {
  return element * 2;
});
console.log(double);

//13
let arr = [1, 2, 3, 4, 5];
let single = arr.filter(function (element) {
  return element % 2 !== 0;
});
console.log(single);

//14
let arr = [1, 2, 3, 4, 5];

let collection = arr.reduce(function (collect, element) {
  return collect + element;
}, 0);

console.log(collection);

//15
let arr = [1, 2, 3, 4, 5];
let total = arr.reduceRight((hasil, element) => hasil * element, 1);
console.log(total);

//16
let arr = [1, 2, 3, 4, 5];
arr.sort((a, b) => a - b);

console.log(arr);

//17
let arr = [1, 2, 3, 4, 5, 6];
arr.reverse();

console.log(arr);

//18
let arr = [1, 2, 3, 4, 5];
let result = arr.join("-");
console.log(result);

//19
let arr = [1, 2, 3, 4, 5, 6];
let result = arr.find((element) => element < 3);
console.log(result);

//20
let arr = [1, 2, 3, 4, 5];
let index = arr.findIndex((element) => element < 4);

console.log(index);
