function solution(t, p) {
    const Np = Number(p)
    var answer = 0;
    for(let i =0; i < t.length - p.length +1; i++) {
      const sliceT = t.slice(i, i + p.length)
      const Nt = Number(sliceT)
        if(Nt <= Np){
          answer += 1
    }
    }
    return answer;
}