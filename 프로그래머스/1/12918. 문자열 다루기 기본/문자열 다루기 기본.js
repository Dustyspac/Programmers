function solution(s) {
  // 길이가 4 혹은 6이 아니라면 false 반환
  if (s.length !== 4 && s.length !== 6) return false;
  // 각 자리를 검사해서 숫자가 아닌것이 있으면 false 반환
  for (let i = 0; i < s.length; i++) {
    if (isNaN(Number(s[i]))) return false;
  }
  // 위의 모든 조건에 해당되지 않으면 true 반환
  return true;
}