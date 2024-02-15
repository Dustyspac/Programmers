function solution(n, m) {
    let answer = [];
    let maxNum = Math.max(n,m);
    let minNum = Math.min(n,m);

function gcd(minNum, maxNum){
    return(minNum % maxNum) === 0 ? maxNum : gcd(maxNum, minNum % maxNum)
}

function lcm(minNum, maxNum){
    return minNum * maxNum / gcd(minNum, maxNum)
}

return [gcd(n, m), lcm(n, m)];
    
}