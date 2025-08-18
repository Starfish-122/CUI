# TypeScript 마이그레이션 가이드

## 개요

이 프로젝트를 JavaScript에서 TypeScript로 점진적으로 마이그레이션하는 방법을 안내합니다.

## 현재 상태

- ✅ TypeScript 및 필요한 타입 정의들이 설치됨
- ✅ `tsconfig.json` 설정 완료
- ✅ `allowJs: true`로 설정되어 JavaScript와 TypeScript 파일 공존 가능
- ✅ 핵심 컴포넌트 일부 TypeScript 변환 완료

## 마이그레이션 단계

### 1단계: 자동 파일 변환

```bash
npm run migrate:ts
```

이 명령어는 모든 `.js` 파일을 `.tsx` 또는 `.ts`로 복사합니다.

### 2단계: 수동 타입 정의 추가

각 컴포넌트에 타입 정의를 추가해야 합니다.

#### 예시: Button 컴포넌트

```typescript
// Button.tsx
export interface ButtonProps {
    children?: ReactNode;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    $variant?: 'filled' | 'outlined' | 'text';
    $size?: 'sm' | 'md' | 'lg';
    $fullWidth?: boolean;
    $bgColor?: string;
    $textColor?: string;
    $text?: string;
    [key: string]: any;
}
```

### 3단계: import/export 문 업데이트

```typescript
// index.ts
import Button from './Button';
export type { ButtonProps } from './Button';

export { Button };
export default Button;
```

### 4단계: 타입 체크 및 빌드 테스트

```bash
npm run type-check
npm run build
```

## 우선순위별 마이그레이션 순서

### 높은 우선순위 (핵심 컴포넌트)

1. ✅ Button
2. ✅ CheckBox
3. ✅ SearchBar
4. Radio
5. Switch
6. Icon

### 중간 우선순위 (공통 컴포넌트)

1. LabelRadio
2. CodeBlock
3. CopyButton
4. PropsTable

### 낮은 우선순위 (템플릿 컴포넌트)

1. Header
2. Footer
3. Sidebar
4. Main
5. Guide 컴포넌트들

### 마지막 (페이지 컴포넌트)

1. app 디렉토리의 모든 페이지
2. 라우트 설정 파일들

## 타입 정의 패턴

### 1. Props 인터페이스 정의

```typescript
export interface ComponentProps {
    // 필수 props
    requiredProp: string;

    // 선택적 props
    optionalProp?: string;

    // 이벤트 핸들러
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;

    // 스타일 props (styled-components용)
    $variant?: 'primary' | 'secondary';
    $size?: 'sm' | 'md' | 'lg';

    // 추가 props를 위한 인덱스 시그니처
    [key: string]: any;
}
```

### 2. forwardRef 사용

```typescript
const Component = forwardRef<HTMLDivElement, ComponentProps>(
    ({ children, ...props }, ref) => {
        return <div ref={ref} {...props}>{children}</div>;
    }
);
```

### 3. 제네릭 타입 사용

```typescript
export interface ApiResponse<T = any> {
    success: boolean;
    data?: T;
    message?: string;
}
```

## 주의사항

### 1. styled-components 타입

```typescript
// styled-components props 타입 정의
interface StyledProps {
    $variant?: string;
    $size?: string;
}

const StyledComponent = styled.div<StyledProps>`
    // 스타일 정의
`;
```

### 2. 이벤트 핸들러 타입

```typescript
// 올바른 이벤트 타입 사용
onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
```

### 3. ReactNode 타입

```typescript
// children prop 타입
children?: ReactNode;
```

## 문제 해결

### 1. 타입 에러 해결

```bash
# 타입 체크 실행
npm run type-check

# 특정 파일만 체크
npx tsc --noEmit src/components/Button.tsx
```

### 2. 빌드 에러 해결

```bash
# 빌드 실행
npm run build

# 개발 서버 실행 (타입 체크 포함)
npm run dev
```

### 3. ESLint 설정 업데이트

TypeScript 파일에 대한 ESLint 규칙을 추가해야 할 수 있습니다.

## 완료 체크리스트

- [ ] 모든 컴포넌트에 타입 정의 추가
- [ ] import/export 문 업데이트
- [ ] 타입 체크 통과
- [ ] 빌드 성공
- [ ] 개발 서버 정상 실행
- [ ] 기존 기능 테스트 완료

## 추가 리소스

- [TypeScript 공식 문서](https://www.typescriptlang.org/docs/)
- [React TypeScript 가이드](https://react-typescript-cheatsheet.netlify.app/)
- [Next.js TypeScript 가이드](https://nextjs.org/docs/basic-features/typescript)
