function solution(n, m) {
    let maxNum = Math.max(n,m);
    let minNum = Math.min(n,m);

function gcd(minNum, maxNum){
    console.log(minNum, maxNum)
    return(maxNum % minNum) === 0 ? minNum : gcd(maxNum % minNum, minNum)
}

function lcm(minNum, maxNum){
    return minNum * maxNum / gcd(minNum, maxNum)
}

return [gcd(n, m), lcm(n, m)];

}