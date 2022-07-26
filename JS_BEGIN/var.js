let x;
console.log(x);
function f() {
  let y; //y는 {}안에서만 정의된 변수
  x = 10;
  y = 20;
  z = 30; //변수 선언 안하고 쓰지마셈
  console.log(x);
  console.log(y);
  console.log(z);
  if (y == 20) {
    let b = 40;
    b++;
    console.log(b);
  }
}
f();
console.log(y); //중괄호 밖에서 사용할 수 없음
console.log(x);

//모든 영역에서 정의된 변수: global variable/전역변수 var, let 없이 선언 가능
//일부 함수/블록 내에서 let으로 정의된 변수: local variable/지역변수, 선언된 함수/블록 내에서만 사용 가능
//var로 선언된 전역 변수 호출: this.전역변수
