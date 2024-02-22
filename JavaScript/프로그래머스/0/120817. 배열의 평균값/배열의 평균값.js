function solution(numbers) {
    var answer = 0;
    // 배열을 반복한다.
    for (let i = 0; i < numbers.length; i++) {
        // 변수에 더한다.
        answer += numbers[i];
    }
    return answer / numbers.length;
};