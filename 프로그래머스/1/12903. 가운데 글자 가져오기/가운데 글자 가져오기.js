function solution(s) {
    var answer = '';
    if (s.length % 2 == 0) {
      return s.substr(s.length/2-1, 2)
    }else{
      return s.substr(s.length/2, 1)
    }
    return answer;
}