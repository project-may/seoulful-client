# Seoulful

서울을 무대로 한 문화생활 정보 플랫폼, 서울풀(Seoulful)을 소개합니다. <br/>공공 API를 활용해 서울에서 열리는 다양한 문화행사 정보를 한눈에 확인할 수 있습니다. <br/>근처의 행사들을 손쉽게 찾아보고, 마음에 드는 행사를 북마크 기능을 통해 저장할 수 있습니다. <br />서울풀과 함께 풍성한 문화생활을 즐겨보세요!

접속해서 문화생활들을 확인해보세요!!

**접속 링크** : http://seoulful.site/

<br/>

# 🐻 실행방법

### 준비물

- Naver cloud platform에 회원가입 후 네이버 맵 이용신청 https://www.ncloud.com/product/applicationService/maps
  -> 이용신청 후에 Client ID -> NEXT_PUBLIC_NAVER_MAP_CLIENT_ID에 할당

- Naver Developers에 회원가입 후 네이버 로그인 이용신청 https://developers.naver.com/main/
- 이용신청 후에 Client ID -> NEXT_PUBLIC_NAVER_LOGIN_CLIENT_ID에 할당
- NEXT_PUBLIC_NAVER_STATE -> 임의의 난수값 생성 후에 할당

- kakao developers에 회원가입 후 이용신청 https://developers.kakao.com
  -> 이용신청 후에 rest api key -> NEXT_PUBLIC_KAKAO_REST_API에 할당

- 로컬 환경에서는 로컬 client 주소를 NEXT_PUBLIC_LOCAL_HOST 에할당.
- 배포 이후에는 client 주소를 NEXT_PUBLIC_CLIENT_URL에 할당

<br />

프로젝트를 clone 받습니다.

```bash
git clone https://github.com/project-may/seoulful-client
```

프로젝트 폴더로 이동합니다.

```bash
cd seoulful-client
```

프로젝트 의존성을 설치합니다.

```bash
npm install
```

개발 서버를 실행합니다.

```bash
npm run dev
```

# 📚 기술스택

## 클라이언트

### 프레임워크

![next](https://img.shields.io/badge/next-14.2.3-000000?logo=next.js) <br/>
다양한 렌더링 전략을 편리하게 사용할 수 있도록 지원하는 메타프레임워크 Next.js를 사용합니다.<br/>

### 정적 분석 <br/>

![typescript](https://img.shields.io/badge/typescript-5.2.2-3178C6?logo=typescript)
![eslint](https://img.shields.io/badge/eslint-8.52.0-4B32C3?logo=eslint)
![prettier](https://img.shields.io/badge/prettier-3.0.3-F7B93E?logo=prettier)

TypeScript, ESLint, Prettier를 사용하여 코드 품질을 관리합니다.

### 스타일링

![tailwindcss](https://img.shields.io/badge/tailwindcss-^3.4.1-000000?logo=tailwindcss)

### 상태관리

![jotai](https://img.shields.io/badge/jotai-2.8.0-000000?logo=jotai)

### Infra

<img src="https://img.shields.io/badge/Amazon%20EC2-FF9900?style=for-the-badge&logo=Amazon%20EC2&logoColor=white">
<br/>
<img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white"> 
<img src="https://img.shields.io/badge/GitHub Actions-2088FF?style=for-the-badge&logo=GitHub Actions&logoColor=white">
<img src="https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white">

## 서버

### 프레임워크

![NestJS](https://img.shields.io/badge/NestJS-10.x.x-%23E0234E?style=for-the-badge&logo=nestjs)

 <br/>
모듈기반 아키텍처를 제공하여 코드를 구조화해, 응집도를 높이고 관리하기 쉽게 사용하기 위해서 Nest.js를 사용합니다.<br/>

### 정적 분석 <br/>

![typescript](https://img.shields.io/badge/typescript-5.2.2-3178C6?logo=typescript)
![eslint](https://img.shields.io/badge/eslint-8.52.0-4B32C3?logo=eslint)
![prettier](https://img.shields.io/badge/prettier-3.0.3-F7B93E?logo=prettier)

TypeScript, ESLint, Prettier를 사용하여 코드 품질을 관리합니다.

### 데이터베이스

![MongoDB](https://img.shields.io/badge/MongoDB-8.4.0-%2347A248?style=for-the-badge&logo=mongodb)

### Infra

<img src="https://img.shields.io/badge/Amazon%20EC2-FF9900?style=for-the-badge&logo=Amazon%20EC2&logoColor=white">
<br/>
<img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white"> 
<img src="https://img.shields.io/badge/GitHub Actions-2088FF?style=for-the-badge&logo=GitHub Actions&logoColor=white">
<img src="https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white">
