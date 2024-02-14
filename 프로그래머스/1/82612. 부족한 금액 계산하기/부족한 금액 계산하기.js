function solution(price, money, count) {
    let answer = 0;
    let sumPrice = 0;

    for (let i=0; i <= count; i++) {
      sumPrice += price * i;
    }
    if(sumPrice <= money) {
      answer = 0;
    } else if(sumPrice > money) {
      answer = sumPrice - money;
    }
    return answer;
}