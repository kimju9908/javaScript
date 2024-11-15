// 문자열을 다루는 String 객체
const pwd = "1234567";
console.log(pwd.length); // 문자열의 길이 확인 length

// 특정 문자열의 포함 여부 확인 : includes("문자열") - 포함 여부를 true/falefh 반환
// indexOf("문자열") : 시작인덱스를 반환 하고 없으면 -1

const email = "test!naver.com";
if (!email.includes("@")) {
  console.log("올바른 이메일양식이 아닙니다.");
}

const email2 = "test!naver.com";
if (email2.indexOf("@") == -1) {
  console.log("올바른 이메일양식이 아닙니다.");
}

// lastIndexOf() : 찾고자하는 문자열이 둘 이상 발견되면 제일 마지막에 발견된 문자열의 index 반환

// slice() : 시작 위치와 종료 위치를 알려주면 해당 문자열을 잘라내서 반환

const fruits = "Apple,Banana, Orange";
const sliceVal = fruits.slice(7, 13); // 시작 인덱스, 종료 인덱스 미만 개념
console.log(sliceVal);

// substring() : 시작위치와 종료 위치를 주면 해당 문자열을 잘라내서 반환
const fruits2 = "Apple,Banana, Orange";
const sliceVal2 = fruits2.substring(7, 13); // 시작 인덱스, 종료 인덱스 미만 개념
console.log(sliceVal);

// replace() : 문자열 내의 문자열을 지정한 문자열로 바꾸는 함수

const names = "안유진, 이영지, 미미, 이은지, 나영석";
const newNames = names.replace("나영석", "안유진");
console.log(newNames);

//  toUpperCase() , toLowerCase() 대,소문자 변환

// 두개의 문자열을 합치기

let str1 = "hello ";
str1 += "word";
console.log(str1);

const str2 = "a";
const str3 = str2.concat("switch in");
const str4 = str3.concat("time saves nine.");
console.log(str4);

// trim() : 문자열의 앞,뒤 공백을 제거

// padStart() , padEnd() : 문자열 앞과 뒤에 지정된 문자를 길이만큼 추가하는 함수
const fixStr = "1234";
const newStr1 = fixStr.padStart(10, 0);
console.log(newStr1);

// charAt() : 문자열에서 특정 인덱스에 해당하는 문자 하나를 반환하는 함수

const addr = "서울시 강남구 역삼동";
console.log(addr.charAt(2));

// charCodeAt()
const addr2 = "서울시 강남구 역삼동";
console.log(addr2.charCodeAt(0));
