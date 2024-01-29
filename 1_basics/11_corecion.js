//  타입 변환
//  type conversion

// 1) 명시적
// 2) 암묵적

let age = 32;

//  명시적
let stringAge = age.toString();

console.log(typeof stringAge, stringAge);

//  암묵적
let test = age + "";
console.log(typeof test, test);

console.log("98" + 2);
console.log("98" * 2);
console.log("98" - 2);
console.log("98" / 2);

//   명시적 변환 몇가지 더 배우기

console.log(typeof (99).toString(), (99).toString());
console.log(typeof true.toString());
console.log(typeof Infinity.toString());

//   숫자타입으로 변환

console.log(typeof parseInt("0"), parseInt("0"));
console.log(typeof parseFloat("0.991231"), parseFloat("0.12312399"));
console.log(typeof +"1", +"1");

// Boolean 타입으로의 변환
//   stirng안에 값이 있으면 불리언 기준으로 트루

console.log(!!"x");
console.log(!!"");

console.log(!!"0");
console.log(!!false);
console.log(!!undefined);

console.log(!!{});
console.log(!![]);

/**
 * 1) 아무 글자도 없는 string은 모두 false 를 반환한다.
 * 2) 값이 없는경우
 * 3) 0
 */
