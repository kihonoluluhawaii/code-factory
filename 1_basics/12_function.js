/**
 * 2 라는 숫자에 * 10 /2 % 3 스트링으로 변환해서
 * 반환받고 싶다면?
 */

console.log((((2 * 10) / 2) % 3).toString());
console.log((((3 * 10) / 2) % 3).toString());

/**
 * DRY
 * dont repeat yourself
 */

function calculate() {
  console.log((((2 * 10) / 2) % 3).toString());
}

// calculate();

function calculate(number) {
  console.log((((number * 10) / 2) % 3).toString());
}

// 함수에서 입력받는 값에 대한 정의를 parameter
// 실제 입력하는 값은 argument

calculate(4);
calculate(5);

function multiply(x, y) {
  console.log(x * y);
}
multiply(3, 4);

function multiply(x, y = 10) {
  console.log(x * y);
}
multiply(2);

// 반환, return 받기

function multiply(x, y) {
  return x * y;
}
const result1 = multiply(2, 4);
console.log(result1);

const result2 = multiply(4, 5);
console.log(result2);

//  Arrow 함수

const multiply2 = (x, y) => {
  return x * y;
};
console.log(multiply2(3, 4));

const multiply3 = (x, y) => x * y;
console.log(multiply3(4, 5));

const multiply4 = (x) => x * 2;
console.log(multiply4(2));

const multiply5 = (x) => (y) => (z) => `x: ${x} y: ${y} z: ${z}`;
console.log(multiply5(2)(5)(7));

function multiply6(x) {
  return function (y) {
    return function (z) {
      return `x: ${x} y: ${y} z :${z}`;
    };
  };
}

console.log(multiply6(3)(4)(5));

const multiplyTwo = function (x, y) {
  return x * y;
};

console.log(multiplyTwo(4, 5));

const multiplyThree = function (x, y, z) {
  console.log(arguments);
  return x * y * z;
};

console.log(multiplyThree(4, 5, 6));

const multiplyAll = function (...args) {
  return Object.values(arguments).reduce((a, b) => a * b, 1);
};

console.log(multiplyAll(3, 4, 5, 6, 7, 8, 9, 10));

// i i f
(function (x, y) {
  console.log(x * y);
})(4, 5);

console.log(typeof multiply);
console.log(multiply instanceof Object);
