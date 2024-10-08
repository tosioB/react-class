// React에는 두 종류의 컴포넌트가 있다.
// 1. Class 컴포넌트 - 객체를 만들기 위한 틀
// 2. 함수형 컴포넌트
class 사람 {
  constructor(이름, 나이, 성별) {
    this.이름 = 이름;
    this.나이 = 나이;
    this.성별 = 성별;
  }
  말하기 () {
    console.log(`${this.이름}: 안녕하세요!`)
  }
}

const 홍길동 = new 사람('홍길동', 30, '남')
console.log(홍길동); // { '이름': '홍길동', '나이': 30, '성별': '남' }
홍길동.말하기(); // 홍길동: 안녕하세요!

const 김아무개 = new 사람('김아무개', 40, '여');
console.log(김아무개); // { '이름': '김아무개', '나이': 40, '성별': '여' }
김아무개.말하기(); // 김아무개: 안녕하세요!

class 학생 extends 사람 { // 사람이라는 클래스를 상속해서 학생이라는 클래스를 만든다.
  constructor(이름, 나이, 성별, 성적) { // 성적이라는 새로운 속성을 추가
    super(이름, 나이, 성별);
    this.성적 = 성적;
  }
  공부하기() {
    console.log(`${this.이름}: 공부중...`);
  }
}

const 김학생 = new 학생('김학생', 17, '남', 90);
김학생.말하기(); // 김학생: 안녕하세요!
김학생.공부하기(); // 김학생: 공부중...

