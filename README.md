# lulu-lab 병원 예약 시스템 구축

### **[배포링크](https://tjwldnjs123.github.io/pre-onboarding-lulu-lab)**


## 1. 개발 기간 🗓

- **개발 기간** : 2022.10.15 ~ 2022.10.17(3일)
  <br />
  <br />


## 2. 프로그램 실행 방법 및 파일 프로젝트 구조 🚧

### 프로그램 실행 방법

<br />

1.  터미널을 키고 원하는 폴더 경로로 이동해 레포지토리를 클론 받습니다.

```
git clone https://github.com/tjwldnjs123/pre-onboarding-lulu-lab.git
```

<br />

2.  클론이 다 받아지고 나면 패키지를 다운 받습니다.

```
npm i
```

<br />

3.  프로젝트를 실행합니다.

```
npm start
```

<br />

4. 브라우저가 켜지고 프로젝트를 확인 할 수 있습니다.
   <br />
   <br />

### 파일 프로젝트 구조


- `src/pages/main`: 메인 페이지 파일 폴더
- `src/pages/reservation`: 병원예약 페이지 파일 폴더
- `src/pages/lookup`: 예약내역 조회 관리 폴더

   <br />
   <br />

## 3. 적용 기술 및 구현 기능 🛠

<br />

### 3-1. 적용 기술

- JavaScript
- React.js
- react-router-dom
- styled-components
- react-datepicker
- moment (날짜 변환)
- gh-pages (배포라이브러리)

<br />

### 3-2. 구현 기능

- ✅ 메인 페이지 _(/ )_

    - 메인페이지
      - 진료예약, 예약조회 레이아웃
      - useNavigate()로 경로 이동

  <br />

- ✅ 예약 등록 페이지 

    - 회원 등록 _(/reservation)_
      - 이름, 휴대폰번호 입력으로 본인 확인
      - localstorage로 회원정보 저장
  <br />

    - 진료 과목 _(/registration)_
      - 목데이터로 구현한 진료과목 map()메서드로 적용
      - 진료과목 클릭 시 해당 병원으로 이동
      
  <br />
    - 해당 병원 _(/registration:id)_
      - useParams()로 id를 추출해 진료과목 id와 일치하면 해당 병원들 나오게 구현
      - 병원 클릭 시 달력모달창 구현
      - 날짜,시간 선택 후 예약완료 클릭하면 localstorage에 병원,날짜,시간 저장
   <br />
   
- ✅ 예약 조회 페이지    
    - 예약 조회 _(/lookup)_
      - 회원정보가 없으면 조건부렌더링으로 회원정보페이지로 이동하게 Link설정
      - localstorage에 저장된 정보 불러오기
      - 변경버튼 클릭 시 예약내역 수정 구현
      - 나가기 버튼 클릭 시 localstorge정보 
      
