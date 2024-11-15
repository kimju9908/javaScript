// 객체 : 자바스크립트에서는 원시타입을 제외한 모든 값이 객체 입니다.
// 객체는 중괄호 {}를 사용하여 만들며, 속성과 값으로 구성
// 객체는 객체리터럴을 사용하여 생성
const person = {
  name: "안유진",
  age: 21,
  addr: "서울시 강남구 삼성동",
  job: "아이브",
};

console.log(person.name);
console.loj(person["age"]);
console.log(person);

// 객체 속성 동적 추가하기
// 객체 속성에 키로 접근해 값을 재할당하면 기존 속성값을 변경 할 수 있음
// 키가 없는 경우, 키와 값으로 구성된 새로운 속성이 객체로 추가

const carInfo = {};

carInfo.name = "BMW X6";
carInfo.year = " 2023/04/15";
carInfo.maxSpeed = "250Km";

delete carInfo.maxSpeed;
console.log(carInfo);

// 생성자 : 자바스크립트에서는 클래스 대신 함수를 생성자를 통해서 객체로 만들수 있음

function person(name, age, addr) {
  this.name = name;
  this.age = age;
  this.addr = addr;
  this.info = function () {
    return `이름:${this.name}, 나이;${this.age},주소:${this.addr}`;
  };
}

const person1 = new person("안유진", 21, "서울시 강남구 역삼동");
const person2 = new person("장원영", 20, "서울시 강남구 청담동");
console.log(person1.info());

class person {
  constructor(name, age, addr) {
    this.name = name;
    this.age = age;
    this.addr = addr;
  }
  info() {
    return `이름:${this.name}, 나이;${this.age},주소:${this.addr}`;
  }
}

const Person1 = new Person("안유진", 21, "서울시 강남구 역삼동");
const Person2 = new Person("장원영", 20, "서울시 강남구 청담동");

console.log(Person1.info());
