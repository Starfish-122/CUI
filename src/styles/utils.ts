// 스타일 유틸리티 함수들

/**
 * 픽셀 값을 rem 단위로 변환
 * @param px - 픽셀 값
 * @returns rem 단위 문자열
 */
export const toRem = (px: number): string => {
    return `${px / 16}rem`;
};

/**
 * 픽셀 값을 em 단위로 변환
 * @param px - 픽셀 값
 * @param baseFontSize - 기준 폰트 크기 (기본값: 16)
 * @returns em 단위 문자열
 */
export const toEm = (px: number, baseFontSize: number = 16): string => {
    return `${px / baseFontSize}em`;
};

/**
 * 색상 투명도 조정
 * @param color - 색상 값 (hex, rgb, rgba)
 * @param opacity - 투명도 (0-1)
 * @returns rgba 색상 문자열
 */
export const withOpacity = (color: string, opacity: number): string => {
    // hex 색상을 rgba로 변환
    if (color.startsWith('#')) {
        const hex = color.replace('#', '');
        const r = parseInt(hex.substr(0, 2), 16);
        const g = parseInt(hex.substr(2, 2), 16);
        const b = parseInt(hex.substr(4, 2), 16);
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }

    // rgb 색상을 rgba로 변환
    if (color.startsWith('rgb(')) {
        return color.replace('rgb(', 'rgba(').replace(')', `, ${opacity})`);
    }

    // 이미 rgba인 경우 투명도만 변경
    if (color.startsWith('rgba(')) {
        return color.replace(/[\d.]+\)$/, `${opacity})`);
    }

    return color;
};

/**
 * CSS 변수 생성
 * @param name - 변수명
 * @param value - 값
 * @returns CSS 변수 문자열
 */
export const cssVar = (name: string, value: string): string => {
    return `var(--${name}, ${value})`;
};

/**
 * 미디어 쿼리 브레이크포인트
 * @param breakpoint - 브레이크포인트 이름
 * @returns 미디어 쿼리 문자열
 */
export const breakpoint = (breakpoint: string): string => {
    const breakpoints = {
        xs: '320px',
        sm: '576px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
        xxl: '1400px',
    };

    return breakpoints[breakpoint as keyof typeof breakpoints] || breakpoint;
};

/**
 * 그림자 효과 생성
 * @param level - 그림자 레벨 (1-5)
 * @returns box-shadow 값
 */
export const shadow = (level: number = 1): string => {
    const shadows = {
        1: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
        2: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
        3: '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)',
        4: '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
        5: '0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22)',
    };

    return shadows[level as keyof typeof shadows] || shadows[1];
};

/**
 * 애니메이션 키프레임 생성
 * @param name - 애니메이션 이름
 * @param keyframes - 키프레임 객체
 * @returns CSS 키프레임 문자열
 */
export const keyframes = (
    name: string,
    keyframes: Record<string, Record<string, string>>
): string => {
    const frames = Object.entries(keyframes)
        .map(([percentage, styles]) => {
            const styleString = Object.entries(styles)
                .map(([property, value]) => `${property}: ${value};`)
                .join(' ');
            return `${percentage} { ${styleString} }`;
        })
        .join('\n');

    return `@keyframes ${name} {\n${frames}\n}`;
};

/**
 * 그라디언트 생성
 * @param direction - 방향 (to right, to bottom 등)
 * @param colors - 색상 배열
 * @returns linear-gradient 값
 */
export const gradient = (direction: string, ...colors: string[]): string => {
    return `linear-gradient(${direction}, ${colors.join(', ')})`;
};

/**
 * 테마 색상 가져오기
 * @param colorName - 색상명
 * @param theme - 테마 객체
 * @returns 색상 값
 */
export const getThemeColor = (colorName: string, theme: any): string => {
    return theme?.colors?.[colorName] || colorName;
};
