# CUI Project

> [Next.js](https://nextjs.org) 기반의 UI 프로젝트
> [데모 사이트](https://cui-dun.vercel.app/)

## 1. 시작하기

### 환경 요구사항

- Node.js 22.16.0
- npm 10.9.2 이상

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

## 2. 프로젝트 구조

```plaintext
src/
├── app/                    # Next.js 앱 라우터 폴더 (루트)
│   ├── (pages)/            # 각 페이지 관련(라우팅 구조, URL에는 미표출)
│   │   ├── input/          # /input 경로 페이지
│   │   ├── searchBar/      # /searchBar 경로 페이지
│   │   ├── button/         # /button 경로 페이지
│   │   └── layout.js       # (pages)만의 레이아웃
│   ├── api/                # API 라우트
│   ├── layout.js           # 전체 레이아웃 컴포넌트
│   ├── page.js             # 메인 페이지 컴포넌트
│   └── robots.ts           # robots.txt 관련 파일
├── components/             # UI 컴포넌트
│   ├── base/               # 기본 UI 컴포넌트(더이상 쪼갤 수 없는 컴포넌트)
│   ├── common/             # base를 조합한 공통 컴포넌트
│   └── modules/            # common/base를 조합한 큰 UI 블록
├── routes/                 # 라우팅 관련 코드
│   ├── config.js           # 라우트 설정
│   ├── hooks.js            # 라우트 관련 훅
│   ├── utils.js            # 라우트 유틸리티 함수
│   ├── api.js              # 라우트 API 로직
│   └── index.js            # 통합 내보내기
├── styles/                 # 스타일(SCSS 등)
│   ├── abstracts/          # 변수, 믹스인 등 추상화 스타일
│   ├── base/               # 기본 스타일(Reset 등)
│   ├── layout/             # 레이아웃 스타일
│   ├── pages/              # 페이지별 스타일
│   └── main.scss           # 전체 스타일 진입점
└── utils/                  # 유틸리티 함수
```

## 3. 개발 가이드

### 3.1 컴포넌트 작성

- **구조**: 각 컴포넌트는 폴더 단위로 관리 (JS, SCSS, index.js)
- **스타일**: 컴포넌트 전용 스타일은 해당 컴포넌트 폴더에 작성
- **전역 스타일**: main.scss에서 import

### 3.2 클라이언트/서버 컴포넌트

- **클라이언트 컴포넌트**: useState, useEffect 등 사용 시 파일 최상단에 "use client" 선언
- **서버 컴포넌트**: 데이터 패칭, SEO 등 서버 전용 로직에 사용 (기본값)

### 3.3 코드 스타일

- **포맷팅**: Prettier, ESLint 설정 준수
- **임포트 경로**: 절대경로(@/...) 사용 (tsconfig.json에 설정됨)
- **컴포넌트 타입**: 함수형 컴포넌트만 사용

### 3.4 네이밍 컨벤션

- **폴더/파일/컴포넌트명**: camelCase 사용 (예: searchBar)
- **변수/함수명**: camelCase
- **SCSS 클래스명**: BEM 방식 권장

### 3.5 SCSS 사용 가이드

- **모듈 임포트**: `@use` 구문 사용 (예: `@use "sass:color";`)
- **색상 함수**: `color.adjust()` 함수 사용 (darken() 대신)
- **중첩 규칙**: 중첩 규칙 이후에 선언이 오지 않도록 주의

## 4. 라우트 관리

이 프로젝트는 중앙 집중식 라우트 관리 방식을 사용합니다.

### 4.1 새 페이지 추가 방법

1. `src/app` 폴더에 새 페이지 폴더와 `page.js` 파일을 생성
2. `src/routes/config.js` 파일의 `appRoutes` 배열에 새 라우트 정보 추가:

```javascript
export const appRoutes = [
    // 기존 라우트들...
    { path: '새로운경로', label: '표시할이름' },
];
```

### 4.2 라우트 관련 파일 구조

- `src/routes/config.js`: 모든 라우트 정의
- `src/routes/hooks.js`: 네비게이션 메뉴용 훅
- `src/routes/utils.js`: 라우트 관련 유틸리티 함수
- `src/routes/api.js`: 라우트 정보를 제공하는 API 로직
- `src/routes/index.js`: 모든 라우트 관련 기능을 내보내는 파일
- `src/app/api/routes/route.js`: 라우트 정보를 제공하는 API 엔드포인트

### 4.3 임포트 방식

성능 최적화를 위해 직접 임포트 방식을 사용합니다:

```javascript
// 권장: 직접 임포트 방식 (성능 최적화)
import { useAppRoutes } from '@/routes/hooks';
import { getRoutes } from '@/routes/api';

// 비권장: 간접 임포트 방식
// import { useAppRoutes, getRoutes } from '@/routes';
```

## 5. 협업 규칙

### 5.1 커밋 컨벤션 [🔗](https://www.conventionalcommits.org/ko/v1.0.0/)

- **형식**: [타입]: [내용] (예: `feat: 검색바 컴포넌트 추가`)
- **주요 타입**:
    - `feat`: 새로운 기능 추가
    - `fix`: 버그 수정
    - `style`: 코드 포맷팅, 세미콜론 누락 등
    - `refactor`: 코드 구조 개선 (기능 변화 X)
    - `docs`: 문서 작성/수정

### 5.2 브랜치 관리

> GitHub 규칙 추가 : Settings > Branches > Branch protection rules

- `main`: 배포(프로덕션)용 브랜치, 항상 안정적인 코드만 유지

### 5.3 자산 관리

- **정적 파일**: public/ 폴더에 저장
- **대용량 파일**: 불필요한 대용량 파일은 업로드 금지

### 5.4 접근성 & 반응형

- **접근성**: 기본적인 웹 접근성(aria, alt 등) 준수
- **반응형**: 모바일/데스크탑 반응형 스타일 필수

### 5.5 주의사항

- `robots.ts`, `next.config.mjs`로 검색 엔진 크롤링 방지(배포시 수정/삭제 필요)

## 6. 배포 가이드

- [Vercel Platform](https://vercel.com/)을 통한 자동 배포

## 7. 참고 자료

> Next.js에 대해 알아보려면, 아래 링크를 클릭하세요.

- [Next.js 공식 문서](https://nextjs.org/docs) - Next.js 기능과 API
- [Next.js 튜토리얼](https://nextjs.org/learn) - Next.js 학습 가이드

<!--
## PR(Pull Request) 규칙

- PR 제목과 설명에 변경사항, 목적, 테스트 방법 명확히 작성
- 작업 단위를 작게 쪼개서 PR 생성
- 리뷰어 지정 및 코드리뷰 필수
- 관련 이슈 번호(있다면) 명시
- CI(테스트, 린트 등) 통과 후 머지

## 브랜치 구조

> GitHub 규칙 추가 : Settings > Branches > Branch protection rules

- `main`: 배포(프로덕션)용 브랜치, 항상 안정적인 코드만 유지
- `feature/…`: 기능 개발용 브랜치 (예: feature/login)
- `hotfix/…`: 긴급 수정용 브랜치 (예: hotfix/login-bug)
- 브랜치 보호 설정: main 브랜치에 직접 push 금지, PR(코드리뷰)만 merge 가능하도록 설정

## 환경 변수 관리

- 환경 변수는 .env.local 등 환경 파일로 관리
- 민감 정보는 절대 커밋하지 않기
- .env\* 파일은 .gitignore에 반드시 추가

## 패키지 관리

- 패키지 추가/삭제 시 반드시 package.json, package-lock.json 동기화
- 불필요한 패키지 설치 금지

## 테스트

- 중요 로직/컴포넌트는 테스트 코드 작성 권장
- 테스트 파일은 **tests**/ 또는 \*.test.js(또는 .ts)로 관리

## CI/CD 및 보안

- main 브랜치 보호(직접 push 금지, PR만 merge)
- Dependabot, 코드/시크릿 스캔 등 GitHub 보안 기능 활성화
- 배포 전 lint, format, test 통과 필수
-->
