function solution (arr, divisor) {
    let answer = [];
    for (let i=0; i < arr.length; i++) {
        // 반복문과 조건문을 사용해서 divisor로 나누어 떨어지는 수를 구한다
        if (arr[i] % divisor == 0) answer.push(arr[i])
        // 구한 i값을 answer에 넣는다
    // 조건문을 하나 더 작성해서 0일 나오는 경우 -1를 리턴한다
}
if (answer.length == 0) {
    answer.push(-1);
}
return answer.sort((a, b) => a - b);
};