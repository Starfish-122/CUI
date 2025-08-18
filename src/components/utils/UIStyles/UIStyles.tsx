import styled from 'styled-components';
import { toRem } from '@/styles/utils';
import { flex, boxShadow } from '@/styles/mixins';

// 타입 정의
interface BoxProps {
    $variant?: string;
    $padding?: string;
}

interface FlexContainerProps {
    $justify?: string;
    $align?: string;
    $direction?: string;
    $gap?: string;
    $wrap?: string;
}

// 헤딩 태그 스타일
export const Heading = {
    H2: styled.h2`
        font-size: ${({ theme }) => theme.fontSizes.xxl};
        font-weight: 700;
        margin-bottom: ${({ theme }) => theme.spacing.lg};
        color: ${({ theme }) => theme.colors.black900};

        &.cui-section__title--h2 {
            margin-bottom: ${({ theme }) => theme.spacing.xl};
            padding-bottom: ${({ theme }) => theme.spacing.sm};
            border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
        }
    `,

    H3: styled.h3`
        font-size: ${({ theme }) => theme.fontSizes.xl};
        font-weight: 600;
        margin-bottom: ${({ theme }) => theme.spacing.md};
        color: ${({ theme }) => theme.colors.black800};

        &.cui-section__title--h3 {
            margin-top: ${({ theme }) => theme.spacing.lg};
            margin-bottom: ${({ theme }) => theme.spacing.md};
        }
    `,

    H4: styled.h4`
        font-size: ${({ theme }) => theme.fontSizes.lg};
        font-weight: 600;
        margin-bottom: ${({ theme }) => theme.spacing.sm};
        color: ${({ theme }) => theme.colors.black700};
    `,
};

// 섹션 컨테이너 스타일
export const Section = styled.section`
    margin-bottom: ${({ theme }) => theme.spacing.xl};

    &.cui-section__content {
        ${flex({
            gap: '1rem',
            wrap: 'wrap',
        })}
        padding: ${({ theme }) => theme.spacing.md};
        margin-bottom: ${({ theme }) => theme.spacing.lg};

        > * {
            margin-right: ${({ theme }) => theme.spacing.md};
            margin-bottom: ${({ theme }) => theme.spacing.md};
        }
    }
`;

// 카드 박스 스타일
export const Box = styled.div<BoxProps>`
    padding: ${({ theme }) => theme.spacing.lg};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    background-color: ${({ theme }) => theme.colors.light900};
    ${({ theme }) => boxShadow('sm')};

    ${({ $variant, theme }) => {
        switch ($variant) {
            case 'outline':
                return `
          border: 1px solid ${theme.colors.gray200};
          box-shadow: none;
        `;
            case 'filled':
                return `background-color: ${theme.colors.blue200};`;
            default:
                // theme.colors에서 해당 색상 키 검색
                if ($variant && theme.colors[$variant as keyof typeof theme.colors]) {
                    return `background-color: ${theme.colors[$variant as keyof typeof theme.colors]};`;
                }
                return '';
        }
    }}

    ${({ $padding }) => $padding && `padding: ${$padding};`}
`;

// 플렉스 컨테이너 스타일
export const FlexContainer = styled.div<FlexContainerProps>`
    ${({ $justify, $align, $direction, $gap, $wrap }) =>
        flex({
            justify: $justify || 'flex-start',
            align: $align || 'center',
            direction: $direction || 'row',
            gap: $gap || '0',
            wrap: $wrap || 'nowrap',
        })}
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    overflow: hidden;
    margin-bottom: ${({ theme }) => theme.spacing.lg};

    th,
    td {
        padding: ${({ theme }) => theme.spacing.md};
        border: 1px solid ${({ theme }) => theme.colors.gray400};
    }
    th {
        background-color: ${({ theme }) => theme.colors.gray100};
    }
    code {
        background-color: ${({ theme }) => theme.colors.gray100};
        padding: ${({ theme }) => theme.spacing.sm};
        border-radius: ${({ theme }) => theme.borderRadius.sm};
        display: inline-block;
    }
`;
