# 🥪 샌드위치 블로그 웹사이트

샌드위치를 사랑하는 이들을 위한 샌드위치 정보 제공 & 한줄평 작성 웹사이트

✅ **[웹사이트 디자인]** 
- 심플하고 직관적인 UI로 사용자들이 편리하게 정보를 찾을 수 있는 디자인 구현
- 반응형 웹사이트로 다양한 디바이스에서 최적의 환경 제공

✅ **[로그인/회원가입 DB 연결]** 
- MySQL과의 연동을 통해 안전한 회원가입 및 로그인 기능 구현
- 사용자 정보를 안전하게 저장하고 관리하는 DB 시스템 구축

✅ **[사용자 이메일 전송 기능]** 
- NodeMailer 라이브러리를 활용하여 사용자 이메일 전송 기능 구현

✅ **[뉴스레터 페이지]** 
- 뉴스레터 페이지를 통해 로그인한 회원들에게 월간 샌드위치 정보 제공
- ReChart를 활용하여 전체 샌드위치 평점을 시각적으로 보여주는 기능 추가

<br />

- **개발 기간** : 2023년 12월 31일 ~ 2024년 1월 8일(약 1주)
  
<br />

# 🔧 개발환경
## Front
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## Back
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)

## Environment
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

### 그외 사용한 패키지
- axios, express-session, dotenv, nodemailer, rechart


<br />

## 🗂️ 디렉토리 구조
```
ReactProject/  
├── backend/  
│ ├── data/  
│ │ └── server.js
│ │ ├── package-lock.json  
│ │ └── package.json
├── .gitignore
├── public
│ ├── sandwich-images
│ │ └── index.html
│ ├── src/  
│ │ ├── components/
│ │ │ ├── Styles
│ │ │ │ ├──Game.css
│ │ │ │ ├── Navigation.cxss
│ │ │ │ ├── Sandwich.css  
│ │ │ │ └── SearchBar.css  
│ │ ├── Chart.js
│ │ ├── Game.js
│ │ ├── Navigation.js  
│ │ ├── Sandwich.js
│ │ ├── SearchBar.js 
├── routes/  
│ ├── styles/  
│ │ ├── About.css
│ │ ├── Detail.css  
│ │ ├── Home.css  
│ │ ├── MyPage.css  
│ │ ├── Write.css  
│ ├── About.js 
│ ├── Detail.js  
│ ├── Home.js  
│ ├── Login.js  
│ ├── MyPage.js  
│ ├── Register.js  
│ └── Write.js
├── App.cs
├── App.js  
├── index.js
├── .gitignore  
├── index.js  
├── package-lock.json  
├── package.json  
└── README.md
```

<br />

# 🖥️ 화면 구성 및 주요 기능
## 메인 페이지

<img width="500" alt="mainpage1" src="https://github.com/EunnyKoo/ReactProject/assets/139302489/56cecd67-2296-47d2-81b2-6aa763646e31">

- 전체 샌드위치 리스트 제공
- 편리한 샌드위치 검색 기능 구현
  
<br />

## 상세 페이지
<img width="500" alt="detailPage1" src="https://github.com/EunnyKoo/ReactProject/assets/139302489/4b36c9a3-ba8e-4446-89ac-16ab7fd66f2c">

- 선택한 샌드위치의 상세 정보 제공
- 사용자 코멘트 입력 및 확인 가능 
  
<br />

## 쉐어 샌드위치 페이지
<img width="500" alt="sharesandwich1" src="https://github.com/EunnyKoo/ReactProject/assets/139302489/3ce42d7f-4429-4501-a50d-c8e86df2557f">

- 사용자가 작성한 샌드위치 정보를 이메일로 수신 가능한 기능 제공

<br />

## 뉴스레터
<img width="500" alt="newsletter1" src="https://github.com/EunnyKoo/ReactProject/assets/139302489/865e9ab1-9c7d-499e-90df-35516841415d">

- 회원가입 및 로그인한 사용자를 위한 뉴스레터 페이지
- 월간 변경되는 샌드위치 정보 확인 가능
- ReChart를 활용하여 전체 샌드위치 평점 시각화
<br />

