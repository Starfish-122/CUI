/**
 * 픽셀 값을 rem 단위로 변환하는 함수
 * @param {number} px - 픽셀 값
 * @param {number} base - 기본 폰트 사이즈 (default: 16px)
 * @returns {string} - rem 단위 문자열
 */
export const toRem = (px, base = 16) => {
    return `${px / base}rem`;
};

/**
 * 여러 픽셀 값을 rem 단위로 변환하는 함수 (CSS 단축 속성용)
 * @param {Array<number>} pxValues - 픽셀 값 배열
 * @param {number} base - 기본 폰트 사이즈 (default: 16px)
 * @returns {string} - rem 단위 문자열
 * @example
 * // 사용 예: padding, margin 등의 단축 속성
 * padding: ${toRems([10, 20, 15, 25])}; // => "0.625rem 1.25rem 0.9375rem 1.5625rem"
 */
export const toRems = (pxValues, base = 16) => {
    return pxValues.map((px) => toRem(px, base)).join(' ');
};

/**
 * 미디어 쿼리 유틸리티 함수
 * @param {string} breakpoint - 브레이크포인트 ('sm', 'md', 'lg', 'xl', 'xxl')
 * @returns {string} - 미디어 쿼리 문자열
 */
export const mediaQuery = (breakpoint) => {
    const breakpoints = {
        xs: '0px',
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        xxl: '1400px',
    };

    return `@media (min-width: ${breakpoints[breakpoint]})`;
};
