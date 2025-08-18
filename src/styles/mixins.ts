import { css } from 'styled-components';

// 타입 정의
interface FlexOptions {
    display?: string;
    direction?: string;
    justify?: string;
    align?: string;
    wrap?: string;
    gap?: string;
}

// 반응형 디자인을 위한 미디어 쿼리 헬퍼
export const media = {
    xs: (styles: any) => css`
        @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
            ${styles}
        }
    `,
    sm: (styles: any) => css`
        @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
            ${styles}
        }
    `,
    md: (styles: any) => css`
        @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
            ${styles}
        }
    `,
    lg: (styles: any) => css`
        @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
            ${styles}
        }
    `,
    xl: (styles: any) => css`
        @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
            ${styles}
        }
    `,
    xxl: (styles: any) => css`
        @media (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
            ${styles}
        }
    `,
};

/**
 * @param {object} options - flex 레이아웃 옵션
 * @param {string} options.direction - flex-direction 값 (기본값: 'row')
 * @param {string} options.justify - justify-content 값 (기본값: 'flex-start')
 * @param {string} options.align - align-items 값 (기본값: 'stretch')
 * @param {string} options.wrap - flex-wrap 값 (기본값: 'nowrap')
 * @param {string} options.gap - gap 값 (기본값: '0')
 * @returns {import('styled-components').FlattenSimpleInterpolation} CSS 스타일
 *
 * @example
 * ^ 기본 사용법
 * ${flex()}
 *
 * ^ 기존 flexCenter와 동일
 * ${flex({ justify: 'center', align: 'center' })}
 *
 * ^ 기존 flexBetween과 동일
 * ${flex({ justify: 'space-between', align: 'center' })}
 *
 * ^ 기존 flexColumn과 동일
 * ${flex({ direction: 'column' })}
 *
 * ^ 더 복잡한 예시
 * ${flex({ direction: 'column', justify: 'space-around', align: 'flex-end', wrap: 'wrap', gap: '1rem' })}
 */
export const flex = ({
    display = 'flex',
    direction = 'row',
    justify = 'flex-start',
    align = 'stretch',
    wrap = 'nowrap',
    gap = '0',
}: FlexOptions = {}) => css`
    display: ${display};
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
    flex-wrap: ${wrap};
    gap: ${gap};
`;

export const flexCenter = css`
    ${flex({ justify: 'center', align: 'center' })}
`;

export const flexBetween = css`
    ${flex({ justify: 'space-between', align: 'center' })}
`;

export const flexColumn = css`
    ${flex({ direction: 'column' })}
`;

export const inlineFlex = css`
    ${flex({ display: 'inline-flex', justify: 'center', align: 'center' })}
`;

// 텍스트 스타일링
export const ellipsis = css`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const multiLineEllipsis = (lines = 2) => css`
    display: -webkit-box;
    -webkit-line-clamp: ${lines};
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

// 절대 위치 중앙 정렬
export const absoluteCenter = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

// 애니메이션 트랜지션
export const transition = (property = 'all', duration = '0.3s', timing = 'ease-in-out') => css`
    transition: ${property} ${duration} ${timing};
`;

// 그림자 효과
export const boxShadow = (level: 'sm' | 'md' | 'lg' | 'xl' = 'md') => css`
    box-shadow: ${({ theme }) => theme.shadows[level]};
`;
