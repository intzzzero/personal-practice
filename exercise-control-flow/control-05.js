// while문을 사용하여 0부터 10 미만의 정수 중에서 짝수만을 작은 수부터 출력
// 0이 출력 안 됨.
// 증감 위치를 출력 이후로 조정하여 수정 완료

let i = 0;

while (i < 10) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i += 1;
}