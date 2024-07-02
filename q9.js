//문제9 : concat을 활용한 출력 방법

//데이터
let year = '2019';
let month = '04';
let day = '26';
let hour = '11';
let minute = '34';
let second = '27';

let result = year.concat('/', month, '/',day);
let result2 = hour.concat(':', minute, ':', second);
console.log(result, result2)

// let arr = new Array();
// arr[0] = year;
// arr[1] = month;
// arr[2] = day;

// for(let i = 0; i<arr.length; i++){
//     arr[i] = i
// }

// console.log(arr);


// 출력
// 2019/04/26 11:34:27