# CUI project

> [Next.js](https://nextjs.org)로 만들어진 프로젝트

## 버전

- Node.js 22.16.0 (specified in `.nvmrc`)
- npm 10.9.2 or higher

If you're using [nvm](https://github.com/nvm-sh/nvm) (recommended):

```bash
nvm use
```

## 시작하기

개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 클릭하여 실행하세요.

## 배워보기

Next.js에 대해 알아보려면, 아래 링크를 클릭하세요.

- [Next.js Documentation](https://nextjs.org/docs) - Next.js 기능과 API.
- [Learn Next.js](https://nextjs.org/learn) - Next.js 튜토리얼.

## 배포하기

- [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
- [Next.js 배포 문서 참고](https://nextjs.org/docs/app/building-your-application/deploying)

## 환경설정

`npm run lint` : exlint 실행
`npm run format` : 포맷팅 실행

## 폴더 구조

- `(folderName)` : 경로 그룹, 라우팅 구조에 영향을 주지만 URL에는 나타나지 않음, 주로 논리적 구성과 레이아웃 공유에 사용
- `_folderName` : 개인 폴더, 해당 폴더와 모든 하위 폴더가 라우팅에서 제외, 코드 구성과 재사용 가능한 모듈에 사용

## 주의사항

- `robots.ts`, `next.config.mjs`
    - 검색 엔진이 사이트를 크롤링하지 못하도록 이중으로 보호
    - 비공개 웹사이트 설정을 해둔 상태 -> 배포시 수정/삭제
