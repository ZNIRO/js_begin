//1부터 10까지 출력
document.write("1 2 3 4 5 6 7 8 9 10");
document.write("<br><br>");

//1부터 10까지 출력
let i = 1;
for (i = 1; i <= 10; i++) {
  document.write(i + " ");
}
document.write("<br><br>");
//for(let i = 1는 for 블락 안에서만 유효하기 때문에 출력되지 않음/
//블락 밖에서 i 선언하면 블락 밖에서 사용 가능

//1~100 3의 배수
let cnt = 0;
for (i = 1, cnt = 0; i <= 100; i++) {
  //초기식은 한번만 실행!됨
  if (i % 3 == 0) {
    document.write(i + " ");
    cnt++;
    if (cnt % 10 == 0) {
      document.write("<br>");
    }
  }
}
document.write("<br><br>");

//1~100 합
let hap;
for (i = 1, hap = 0; i <= 100; i++) {
  hap += i;
}
document.write("1~100 합" + "<br>" + "=" + hap);

document.write("<br><br>");
//1~100, 8의 배수의 합
for (i = 1, hap = 0; i <= 100; i++) {
  if (i % 8 == 0) {
    hap += i; //hap = hap + i
  }
}
document.write("1~100, 8의 합" + "<br>" + "=" + hap);

document.write("<br><br>");

//1~100, 처음으로 300을 넘는 숫자는
for (i = 1, hap = 0; i <= 100; i++) {
  hap += i;
  if (hap >= 300) {
    break;
  }
}
document.write("1~100, 300이상의 첫번째 합" + "<br>" + "=" + hap + "<br>");
document.write("1~100, 300이상의 첫번째 수" + "<br>" + "=" + i);
document.write("<br><br>");

//1~100 합 중의 8의 배수를 생략한 합
for (i = 1, hap = 0; i <= 100; i++) {
  if (i % 8 == 0) continue; //if를 만족할 때 밑에있는거 실행않한대
  //(8의배수이면 합에더하지말고 증감문실행하세요)
  hap += i;
}
document.write("1~100 합(8의 배수 생략)" + "<br>" + "=" + hap);
