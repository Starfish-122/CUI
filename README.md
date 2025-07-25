# CUI Project

## 1. 시작하기

### 환경 요구사항

- **Node.js** : 22.16.0 (`.nvmrc` 파일 참조)
- **npm** : 10.9.2 이상

### 기술 스택

- **프레임워크**: Next.js (15.3.4)
- **언어**: JavaScript/TypeScript
- **UI 라이브러리**: React (19.0.0)
- **스타일링**: styled-components (6.1.19)
- **코드 품질**: ESLint 9, Prettier
- **패키지 관리**: npm
- **빌드 도구**: Next.js 내장 빌드 시스템
- **배포**: Vercel Platform

---

## 2. 프로젝트 구조

```plaintext
CUI/
├── .next/                  # Next.js 빌드 결과물 (자동 생성)
├── node_modules/           # npm 패키지 (자동 생성)
├── public/                 # 정적 파일
├── src/                   # 소스 코드
│   ├── app/               # Next.js 앱 라우터 폴더 (루트)
│   │   ├── (pages)/       # 페이지 관련 (라우팅 그룹, URL에 미표출)
│   │   │   ├── guide/     # 가이드 페이지
│   │   │   └── layout.js  # 페이지 레이아웃
│   │   ├── (ui)/          # UI 컴포넌트 페이지 (라우팅 그룹, URL에 미표출)
│   │   │   ├── all/       # 전체 컴포넌트 페이지
│   │   │   ├── button/    # 버튼 컴포넌트 페이지
│   │   │   ├── checkbox/  # 체크박스 컴포넌트 페이지
│   │   │   ├── radio/     # 라디오 버튼 컴포넌트 페이지
│   │   │   ├── search-bar/ # 검색바 컴포넌트 페이지
│   │   │   ├── switch/    # 스위치 컴포넌트 페이지
│   │   │   └── layout.js  # UI 페이지 레이아웃
│   │   ├── api/           # API 라우트
│   │   │   └── routes/    # 라우트 정보 API
│   │   │       └── route.js
│   │   ├── layout.js      # 전체 레이아웃 컴포넌트
│   │   ├── page.js        # 메인 페이지 컴포넌트
│   │   ├── not-found.js   # 404 페이지 컴포넌트
│   │   └── robots.ts      # robots.txt 관련 파일
│   ├── components/        # UI 컴포넌트
│   │   ├── base/          # 기본 UI 컴포넌트 (더이상 쪼갤 수 없는 컴포넌트)
│   │   │   ├── button/    # 버튼 컴포넌트
│   │   │   ├── checkBox/  # 체크박스 컴포넌트
│   │   │   ├── core/      # 핵심 컴포넌트 (H1, H2, UIBox, UIFlex 등)
│   │   │   ├── icon/      # 아이콘 컴포넌트
│   │   │   ├── radio/     # 라디오 버튼 컴포넌트
│   │   │   ├── SectionTitle/ # 섹션 제목 컴포넌트
│   │   │   └── switch/    # 스위치 컴포넌트
│   │   ├── common/        # base 컴포넌트를 조합한 큰 UI 블록
│   │   │   ├── labelRadio/ # 라벨이 있는 라디오 컴포넌트
│   │   │   └── searchBar/  # 검색바 컴포넌트
│   │   └── templates/     # 템플릿 컴포넌트
│   │       ├── Footer/    # 푸터 컴포넌트
│   │       ├── Guide/     # 가이드 템플릿 컴포넌트
│   │       ├── Header/    # 헤더 컴포넌트
│   │       ├── Main/      # 메인 컴포넌트
│   │       ├── Sidebar/   # 사이드바 컴포넌트
│   │       ├── UILayout/  # UI 레이아웃 컴포넌트
│   │       └── ClientLayout.js # 클라이언트 레이아웃 컴포넌트
│   ├── lib/               # 유틸리티 및 헬퍼 함수
│   │   └── registry.js    # 스타일 레지스트리
│   ├── playground/        # 컴포넌트 테스트 및 실험용 폴더
│   │   └── ButtonPL/      # 버튼 컴포넌트 플레이그라운드
│   ├── routes/            # 라우팅 관련 코드
│   │   ├── config.js      # 라우트 설정
│   │   ├── hooks.js       # 라우트 관련 훅
│   │   ├── utils.js       # 라우트 유틸리티 함수
│   │   ├── api.js         # 라우트 API 로직
│   │   └── index.js       # 통합 내보내기
│   └── styles/            # 스타일
│       ├── abstracts/     # SASS 추상화 스타일
│       │   ├── _functions.scss # SASS 함수
│       │   ├── _mixins.scss    # SASS 믹스인
│       │   ├── _theme.scss     # SASS 테마
│       │   └── _variables.scss # SASS 변수
│       ├── theme.js       # JavaScript 테마 설정
│       ├── utils.js       # 스타일 유틸리티 함수
│       ├── mixins.js      # JavaScript 믹스인 함수
│       └── globalStyles.js # 전역 스타일 설정
├── .gitignore             # Git 무시 파일 목록
├── .nvmrc                 # Node.js 버전 설정
├── .prettierignore        # Prettier 무시 파일 목록
├── .prettierrc            # Prettier 설정
├── eslint.config.mjs      # ESLint 설정
├── next-env.d.ts          # Next.js TypeScript 타입 정의
├── next.config.mjs        # Next.js 설정
├── package-lock.json      # npm 패키지 잠금 파일
├── package.json           # npm 패키지 설정
├── README.md              # 프로젝트 문서
└── tsconfig.json          # TypeScript 설정
```

## 3. 코드 작성 및 프로젝트 규칙

### (1) 컴포넌트 작성

- **구조**: 각 컴포넌트는 폴더 단위로 관리
- **스타일**: styled-components를 사용한 스타일링
- **전역 스타일**: globalStyles.js에서 관리
- **컴포넌트 구조**:
    - `index.js`: 메인 컴포넌트 파일
    - `[ComponentName].js`: 컴포넌트 로직
    - `[component-name]-styles.js`: 스타일 파일

### (2) 클라이언트/서버 컴포넌트

- **클라이언트 컴포넌트**: useState, useEffect 등 사용 시 파일 최상단에 "use client" 선언
- **서버 컴포넌트**: 데이터 패칭, SEO 등 서버 전용 로직에 사용 (기본값)

### (3) 코드 스타일 및 네이밍 컨벤션

- **포맷팅**: Prettier, ESLint 설정 준수
- **임포트 경로**: 절대경로(@/...) 사용 (tsconfig.json에 설정됨)
- **컴포넌트 타입**: 함수형 컴포넌트만 사용
- **파일/컴포넌트명**: camelCase 사용 (예: searchBar)
- **폴더명**: PascalCase 사용 (예: Button/)
- **변수/함수명**: camelCase
- **스타일**: styled-components의 이름 규칙 준수
- **상태**: 접두어 사용(is-, has-)

    | 구분   | 예시                        |
    | ------ | --------------------------- |
    | 상태   | isLoading, isOpen, hasError |
    | 이벤트 | onClick, onChange, onSubmit |
    | 옵션   | variant, size, color        |
    | 접근성 | aria-, role                 |

### (4) 스타일링 가이드

- **styled-components**: 컴포넌트 기반 스타일링 사용
- **테마**: theme.js를 통한 일관된 디자인 시스템 적용
- **믹스인**: mixins.js에서 재사용 가능한 스타일 패턴 관리
- **커스텀 props**: DOM으로 전달되지 않아야 하는 props에는 `$` 접두어 사용

    ```javascript
    // 잘못된 사용법
    const Button = styled.button`
        width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
        background: ${(props) => props.bgColor || 'transparent'};
    `;

    // 올바른 사용법
    const Button = styled.button`
        width: ${(props) => (props.$fullWidth ? '100%' : 'auto')};
        background: ${(props) => props.$bgColor || 'transparent'};
    `;

    // 컴포넌트 사용
    <Button $fullWidth $bgColor="blue">
        버튼
    </Button>;
    ```

### (5) 커밋 및 브랜치 관리

- **커밋 컨벤션** [🔗](https://www.conventionalcommits.org/ko/v1.0.0/)
- **커밋 형식**: [타입]: [내용] (예: `feat: 검색바 컴포넌트 추가`)
- **커밋 타입**:
    - `feat`: 새로운 기능 추가
    - `fix`: 버그 수정
    - `style`: 코드 포맷팅, 세미콜론 누락 등
    - `refactor`: 코드 구조 개선 (기능 변화 X)
    - `docs`: 문서 작성/수정
- **브랜치 관리**: `main` 브랜치는 배포(프로덕션)용으로, 항상 안정적인 코드만 유지
    > GitHub 규칙 추가 : Settings > Branches > Branch protection rules

### (6) 프로젝트 운영

- **자산 관리**
    - **정적 파일**: public/ 폴더에 저장
    - **대용량 파일**: 불필요한 대용량 파일은 업로드 금지
- **접근성 & 반응형**
    - **접근성**: 기본적인 웹 접근성(aria, alt 등) 준수
    - **반응형**: 모바일/데스크탑 반응형 스타일 필수
- **주의사항**
    - `robots.ts`, `next.config.mjs`로 검색 엔진 크롤링 방지(배포시 수정/삭제 필요)

## 4. 라우트 관리

이 프로젝트는 중앙 집중식 라우트 관리 방식을 사용합니다.

### (1) 새 페이지 추가 방법

1. `src/app` 폴더에 새 페이지 폴더와 `page.js` 파일을 생성
2. `src/routes/config.js` 파일의 `appRoutes` 배열에 새 라우트 정보 추가:

```javascript
export const appRoutes = [
    // 기존 라우트들...
    { path: '새로운경로', label: '표시할이름' },
];
```

### (2) 라우트 관련 파일 구조

- `src/routes/config.js`: 모든 라우트 정의
- `src/routes/hooks.js`: 네비게이션 메뉴용 훅
- `src/routes/utils.js`: 라우트 관련 유틸리티 함수
- `src/routes/api.js`: 라우트 정보를 제공하는 API 로직
- `src/routes/index.js`: 모든 라우트 관련 기능을 내보내는 파일
- `src/app/api/routes/route.js`: 라우트 정보를 제공하는 API 엔드포인트

### (3) 현재 라우트 구성

**메인 라우트**:

- `/`: 홈 페이지
- `/guide`: 가이드 페이지
- `/all`: 전체 컴포넌트 페이지

**UI 컴포넌트 라우트**:

- `/button`: 버튼 컴포넌트
- `/checkbox`: 체크박스 컴포넌트
- `/radio`: 라디오 버튼 컴포넌트
- `/search-bar`: 검색바 컴포넌트
- `/switch`: 스위치 컴포넌트

### (4) 임포트 방식

성능 최적화를 위해 직접 임포트 방식을 사용합니다:

```javascript
// 권장: 직접 임포트 방식 (성능 최적화)
import { useAppRoutes } from '@/routes/hooks';
import { getRoutes } from '@/routes/api';

// 비권장: 간접 임포트 방식
// import { useAppRoutes, getRoutes } from '@/routes';
```

## 5. 개발 환경 설정

```bash
# 개발 서버 시작
npm run dev

# 빌드
npm run build

# 프로덕션 서버 시작
npm run start

# 린트 검사
npm run lint

# 코드 포맷팅
npm run format
```

## 6. 배포

- [Vercel Platform](https://vercel.com/)을 통한 자동 배포
- `next.config.mjs`에서 검색 엔진 크롤링 방지 설정 (배포시 수정 필요)

## 7. 플레이그라운드

프로젝트에는 `src/playground/` 폴더가 있어 컴포넌트를 테스트하고 실험할 수 있습니다.

- `ButtonPL/`: 버튼 컴포넌트 플레이그라운드

## 8. 참고 자료

> Next.js에 대해 알아보려면, 아래 링크를 클릭하세요.

- [Next.js 공식 문서](https://nextjs.org/docs) - Next.js 기능과 API
- [Next.js 튜토리얼](https://nextjs.org/learn) - Next.js 학습 가이드
- [styled-components 문서](https://styled-components.com/docs) - 스타일링 라이브러리
- [SASS 문서](https://sass-lang.com/documentation) - CSS 전처리기

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
