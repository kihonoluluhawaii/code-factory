// 산술연산자

// console.log(10 * (10 + 10));

// let sample = "99";
// console.log(+sample);
// console.log(typeof +sample);

sample = false;
console.log(+sample);
console.log(typeof +sample);

sample = "99";
console.log(-sample);
console.log(typeof -sample);

//할당 연산자 (assignment operator)

number = 100;
console.log(number);

number += 10;
console.log(number);

number -= 10;
console.log(number);

//비교 연산자
//값의 비교 ==
//값과 타입의 비교 ===

console.log(5 == 5);
console.log(5 == "5");
console.log(5 === "5");
console.log(true == 1);
console.log(0 == "");
console.log(false == 0);

// 대소 관계 비교 연산자

console.log(`-------------`);

console.log(100 > 1);
console.log(100 < 1);
console.log(100 <= 1);
console.log(100 >= 1);

// 삼항 조건 연산자 ( ternary operator)

console.log(10 > 0 ? "10이 영보다 크당" : "10이 영보다 작당");

// 논리 연산자
// && ||

console.log(true && true); //모두 true여야 true를 반환한다
console.log(true && false);
console.log(true || true);

console.log(true || true);
console.log(false || true);
console.log(false || false);
console.clear();

console.log(10 > 1 && 20 > 2);
console.log(10 < 1 && 20 < 2);

console.log(10 > 1 || 20 > 2);
console.log(10 < 1 || 20 > 2);
console.log(10 < 1 || 20 < 2);

// 단축ㅍ평가
// && 를 사용했을때 좌측이 트루면 우측 값 반환

console.log(true && true && "아이브");

// 지수 연산자

console.log(2 ** 2);
console.log(10 ** 3);

// null 연산자

let name;
console.log(name);
name = name ?? "zhemvorxhf";
console.log(name);

name = name ?? "아이브";
let name2;
name2 ??= "코드팩토리";
console.log(name2);
