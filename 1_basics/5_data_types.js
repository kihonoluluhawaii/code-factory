// //
// 1) Number (숫자)
// 2) String (문자열)
// 3) Boolean (불리언)
// 4) undefined ( 언디파인드 - 정리되지않음)
// 5) null (널)
// 6) Symbol (심볼)
// //primitive type
// 7) Object (객체)
//  Function
//  Arraty
//  Object

// Number

const age = 32;
const tempature = -10;

const pi = 3.14;
console.log(typeof age);
console.log(typeof tempature);
console.log(typeof pi);
console.log("--------------");

const infinity = Infinity;
const nInfinity = -Infinity;
console.log(typeof Infinity);
console.log(typeof nInfinity);
console.log("--------------");

// String

const codeFactory = "'코'드팩토리";
console.log(codeFactory);
console.log(typeof codeFactory);

// template literal
//  newline -> \n
// tab -> \t
const iveYuJin = "아이브\n안유진";
console.log(iveYuJin);
const iveWonYoung = "아이브\t장원영";
console.log(iveWonYoung);
const backSlash = "아이브\\코드팩토리";
console.log(backSlash);
const iveWonYoung2 = `아이브
장원영`;
console.log(iveWonYoung2);

console.log(typeof iveWonYoung2);

const groupName = "아이브";
console.log(groupName + " 안유진");
console.log(`${groupName} 안유진`);

// Boolean 타입

const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);

//Undefined
//사용자가 직접 값을 초기화하지 않았을때 지정되는값
// 직적 undefined로 값을 초기화하는일을 없도록 해라

let noInit;
console.log(typeof noInit);

/**
 * null 타입
 */
//  개발자가 명시적으로 없는 값으로 초기화할때 사용

let init = null;
console.log(init);
console.log(typeof init);
console.log("----------");

// Symbol 타입
//   유일무이한 값을 생성할때 사용
//   다른 프리미티브 값들과 다르게 Symbol 함수를 호출해서 사용

const test1 = "1";
const test2 = "2";
console.log(test1 === test2);

const symbol1 = Symbol("1");
const symbol2 = Symbol("1");

console.log(symbol1 === symbol2);

// Object 타입
// Map
// 키:밸류 쌍으로 이루어져있다.

const dic = {
  red: "빨간색",
  orange: "주황색",
  yellow: "노란색",
};
console.log(dic);

console.log(dic["red"]);
console.log(dic["orange"]);
console.log(dic["yellow"]);

// Array 타입

const iveMembersArray = ["안유진", "가을", "레이", "장원영", "이서", "리즈"];
console.log(iveMembersArray);
// index 0 부터 시작해서 1씩 올라갑니다.

console.log(iveMembersArray[1]);
console.log(iveMembersArray[5]);

iveMembersArray[0] = "코드팩토리";
console.log(iveMembersArray);

// static typing -> 변수를 선언할대 어떤 타입의 변수를 선언할지 명시를한다.

// dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 갑에 의해 타입을 "추론"한다.

//JS -> dynamic typing이다.
