/**
 * Array Functions
 */

let iveMembers = ["안유진", "가을", "레이", "장원영", "리즈", "이서"];

//push()

console.log(iveMembers.push("코드팩토리"));
console.log(iveMembers);

//pop ()
console.log("-------");
console.log(iveMembers.pop());
console.log();

//shitf()
console.log(iveMembers.shift());
console.log(iveMembers);

console.log("-------");
//unshitf
console.log(iveMembers.unshift("안유진"));
console.log(iveMembers);
console.clear();
console.log(iveMembers.splice(0, 3));
// console.log(iveMembers);
console.log(iveMembers);

iveMembers = ["안유진", "장원영", "레이", "리즈", "가을"];

//concat
// 마지막에 콘캣으로 명명된 값을 넣어서 새로운 어레이를 만들어줌.(1회성)
console.log(iveMembers.concat("코드팩토리"));
console.log(iveMembers);

// slice()
console.log(iveMembers.slice(0, 3));
console.log(iveMembers);

// sprea operator
let iveMembers2 = {
  ...iveMembers,
};
console.log(iveMembers2);
let iveMembers3 = {
  iveMembers,
};
console.log(iveMembers3);
console.clear();
let iveMembers4 = iveMembers;

console.log(iveMembers3);

console.log(iveMembers4 === iveMembers);
console.log([...iveMembers] === iveMembers);

//join ()    // 배열들을 스트링으로 나열할때
console.log(iveMembers.join());
console.log(typeof iveMembers.join());
console.log(iveMembers.join(", "));

//sort ()    오름차순

iveMembers.sort();
console.log(iveMembers);

console.log(iveMembers.reverse());

let numbers = [1, 9, 7, 5, 3];
console.log(numbers);
// a,b 를 비교했을때
// 1) a 를 b 보다 나중에 정렬하려면 0보다 큰 숫자를 반환
// 2) a 를 b 보다 먼저 정렬하려면 0보다 작은 숫자를 반환
// 3)  원래 순서를 그대로 두려면 0을 반환
numbers.sort((a, b) => {
  return a > b ? 1 : -1;
});

console.log(numbers);
numbers.sort((a, b) => (a > b ? -1 : 1));
console.log(numbers);
console.clear();
// map ()  array에 있는 모든값들이 하나씩 들어가면서 반환됨
// 원래 array를 바꾸지않고 새로운 어레이를 만들어서 쓴다.
console.log(iveMembers.map((x) => x));
console.log(iveMembers.map((x) => `아이브: ${x}`));

console.log(
  iveMembers.map((x) => {
    if (x === "안유진") {
      return `아이브 ${x}`;
    } else {
      return x;
    }
  })
);

console.log(iveMembers);

//filter()

numbers = [1, 8, 7, 6, 3];
console.log(numbers.filter((x) => true));
console.log(numbers.filter((x) => false));
console.log(numbers.filter((x) => x % 2 === 0));
console.log(numbers.filter((x) => x % 2 !== 0));

//find()     조건중 가장 첫번째 해당되는값
// 값을 찾은 후 뒤에는 보지도 않는다.
console.log(numbers.find((x) => x % 2 === 0));

//findIndex()   find의 값중 인덱스로 계산해서 첫번째 해당되는값
console.log(numbers.findIndex((x) => x % 2 === 0));

//reduce ()
console.log(
  numbers.reduce((acc, cur) => acc + cur),
  0
);
