/**
 * Super and Override
 */

class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  sayHello() {
    return `안녕하세요 ${this.name}입니다.`;
  }
}

class FemaleIdolMOdel extends IdolModel {
  //노래 춤 ㅊ특기
  part;
  constructor(name, year, part) {
    super(name, year);
    this.part = part;
  }
  sayHello() {
    // rerutn`안녕하세요 ${this.name}입니다. ${this.part} 를 맡고있습니다.`;
    return `${super.sayHello()} ${this.part}를 맡고 있습니다.`;
  }
}
const yuJin = new FemaleIdolMOdel("안유진", 2003, "보컬");
console.log(yuJin);

const wonYoung = new IdolModel("장원영", 2002);
console.log(wonYoung.sayHello());

console.log(yuJin.sayHello());
