# Vue 프로젝트 템플릿

이 프로젝트는 Vue 웹 애플리케이션을 위한 템플릿입니다. 기본적인 프로젝트 구조와 설정이 포함되어 있어 빠르게 개발을 시작할 수 있습니다.

## 주요 기능

- Vue 3.x 기반
- Vue Router v4
- Store를 이용한 간편한 전역 상태 관리
- Bootstrap 5를 이용한 UI 프로토타이핑

## 프로젝트 구조

```
public/            # 정적 템플릿
src/
├─ api/            # Axios 인스턴스
├─ assets/         # 이미지·폰트 등
├─ class/
│  └─ api/         # API 서비스 클래스
├─ components/     # 재사용 UI(Button 등)
├─ layouts/        # MainLayout 등
├─ mixins/         # 재사용 로직
├─ pages/          # Route 매핑 페이지들
├─ routes/         # 화면 이동 정책
├─ store/          # 전역 상태 모듈
├─ utils/          # 헬퍼 함수
├─ App.vue         # 최상위 컨테이너
└─ main.js         # 진입점
```

## 샘플 모듈 설명

### UserService

- 개발자가 참고할 수 있는 가장 기본 샘플 업무 단위
- 사용자 관련 조회 기능 구현 과정을 보여주며 Service -> Component -> Page 흐름을 이해할 수 있음
- 실제 개발 시 업무 단위로 확장 가능

## 개발 가이드

### 1. 컴포넌트 & 페이지

공통 UI는 components에 둡니다. 이 컴포넌트들은 어디서든 호출될 수 있고 페이지에 종속되지 않습니다.<br />
pages에는 URL 라우트와 1:1로 대응되는 화면 단위를 둡니다.

### 2. 상태 관리(store)

전역 상태 필요 시 store 폴더에서 관리합니다.

### 3. API 호출

Axios 통신은 서비스 클래스에서 처리하며, 컴포넌트는 해당 서비스 클래스를 호출해 데이터를 로드합니다.

### 4. 코딩 컨벤션

React는 Javascript의 코딩 컨벤션을 그대로 따라가며, html, css 부분은 그 외의 코딩 컨벤션을 따라갑니다.<br />
네이밍 규칙의 종류는 아래와 같습니다. 이러한 네이밍 규칙을 사용하여 폴더, 파일, 변수 및 함수의 이름을 명명합니다.

- camelCase: 소문자로 시작하고, 모든 후속 단어는 대문자로 시작
- PascalCase: 모든 단어는 대문자로 시작
- snake_case: 밑줄로 구분된 단어
- kebab-case: 하이픈으로 구분된 단어

#### 폴더

- 폴더 이름은 모두 소문자
- child로 쓰일 파일들과 공통되는 이름으로 사용

#### 파일

- PascalCase 사용
- 복수 단어로 명명 (Login.jsx[x] -> LoginPage.jsx[o])
- javascript 파일 이름은 모두 소문자, \_ 혹은 - 사용
- scss, css 파일 이름은 모두 소문자, \_ 혹은 - 사용

#### 변수

- camelCase 사용
- javascript 변수 이름은 camelCase 사용

#### 함수

- camelCase 사용
- javascript 함수 이름은 camelCase 사용
- scss, css 함수 이름은 kebab-case 사용

## 시작하기

### 1. URL 변경

`env` 파일에서 URL 설정 정보를 변경합니다.

```
VUE_APP_NODE_ENV=development
VUE_APP_PATH=/
VUE_APP_PUBLIC_PATH=/
VUE_APP_BASE_URL=http://localhost:8082

VUE_APP_API=http://localhost:8082/your_url
```

### 2. 애플리케이션 실행

```
npm run serve
```
