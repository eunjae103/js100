//문제10 : 별 찍기

// 입력
// 5

// 출력
//     *
//    ***
//   *****
//  *******
// *********

const level = 5; 

for(let i = 1; i <= level; i++){
	let stars = "";
	// 공백 증가 for 문
	for(let k = 1; k <= level-i; k++){ // 점점 줄어두는 조건 확인
		stars = stars + " ";
	}
	// 별 증가 for 문
	for(let j = 1; j <= i*2-1; j++){ 
		stars = stars + "*";
	}
	console.log(stars);
}