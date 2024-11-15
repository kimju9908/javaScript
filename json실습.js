// JSON 데이터
const jsonData = `
[
    {
        "name": "안유진",
        "age": 20,
        "isStudent": false,
        "courses": ["음악", "댄스", "연기"],
        "address": {
            "city": "서울",
            "zipcode": "12345"
        }
    },
    {
        "name": "가을",
        "age": 20,
        "isStudent": false,
        "courses": ["음악", "댄스", "연기"],
        "address": {
            "city": "서울",
            "zipcode": "12345"
        }
    },
    {
        "name": "레이",
        "age": 19,
        "isStudent": true,
        "courses": ["음악", "일본어", "연기"],
        "address": {
            "city": "서울",
            "zipcode": "12345"
        }
    }
]
`;

// 역직렬화를 해야함
const jsonObject = JSON.parse(jsonData);
const container = document.querySelector("#container");

const htmlContent = jsonObject
  .map(
    (person) => `
  <div class="person">
    <h2>이름:${person.name}</h2>
    <p>나이:${person.age}<p>
    <p>학생 여부:${person.isStudent ? "예" : "아니오"}</p>
    <p>과목: ${person.coursces.join(",")}</p>
    <p>주소: ${person.address.city},우편번호:${person.address.zipcode}</p>
  `
  )
  .join("");
