function solution(num) {
    var answer = 0;
    // 짝수인지 홀수인지 판단후 짝수라면 2를 나눔 아니라면 3을 곱하고 1을 더한다.
    for (let i = 0; i < 500; i++) {
        if (num !== 1) {
            num = num % 2 ? (num * 3) + 1 : num / 2 // 수식 계산 ~ 1
        } else {
            return answer = i;
        }
    }
    // num이 1이라면 0 을 리턴 -> else if
return answer = -1
}