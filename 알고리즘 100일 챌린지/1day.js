// 몫 구하기
function solution(num1, num2) {
    return ~~(num1 / num2);
}

// ~~(num1 / num2) 틸트 연산자 사용
// (num1 / num2) << 0  왼쪽 시프트 (Left Shift) 연산자
// Math.floor(num1 / num2)
// parseInt(num1 / num2)

console.log(solution(20, 7));
