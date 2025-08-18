import styled, { css } from 'styled-components';

// 타입 정의
interface SwitchContainerProps {
    $variant?: string;
    $size?: 'sm' | 'md' | 'lg';
    $bgColor?: string;
    $thumbColor?: string;
    disabled?: boolean;
}

// 상수 정의
const SIZES = {
    SM: 'sm',
    MD: 'md',
    LG: 'lg',
};

const VARIANTS = {
    DEFAULT: 'default',
    PRIMARY: 'primary',
    SUCCESS: 'success',
    WARNING: 'warning',
    ERROR: 'error',
};

// 기본 스위치 스타일
const baseSwitchStyles = css`
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    user-select: none;
`;

// 크기별 스타일
const sizeStyles = {
    [SIZES.SM]: css`
        .switch-track {
            width: 32px;
            height: 18px;
        }

        .switch-thumb {
            width: 14px;
            height: 14px;
            transform: translateX(2px);
        }

        &.checked .switch-thumb {
            transform: translateX(16px);
        }
    `,

    [SIZES.MD]: css`
        .switch-track {
            width: 44px;
            height: 24px;
        }

        .switch-thumb {
            width: 18px;
            height: 18px;
            transform: translateX(3px);
        }

        &.checked .switch-thumb {
            transform: translateX(23px);
        }
    `,

    [SIZES.LG]: css`
        .switch-track {
            width: 56px;
            height: 30px;
        }

        .switch-thumb {
            width: 22px;
            height: 22px;
            transform: translateX(4px);
        }

        &.checked .switch-thumb {
            transform: translateX(30px);
        }
    `,
};

// 공통 트랙 스타일
const trackBaseStyles = css`
    position: relative;
    border-radius: 12px;
    transition: background-color 0.2s ease;
    display: flex;
    align-items: center;
`;

// 공통 썸 스타일
const thumbBaseStyles = css`
    position: absolute;
    border-radius: 50%;
    transition: transform 0.2s ease;
    z-index: 1;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

// Variant별 색상 스타일
const variantStyles = {
    [VARIANTS.DEFAULT]: css`
        .switch-track {
            background-color: ${({ theme }) => theme.colors.gray300};
        }

        .switch-thumb {
            background-color: ${({ theme }) => theme.colors.white};
        }

        &.checked .switch-track {
            background-color: ${({ theme }) => theme.colors.primary};
        }
    `,

    [VARIANTS.PRIMARY]: css`
        .switch-track {
            background-color: ${({ theme }) => theme.colors.gray300};
        }

        .switch-thumb {
            background-color: ${({ theme }) => theme.colors.white};
        }

        &.checked .switch-track {
            background-color: ${({ theme }) => theme.colors.primary};
        }
    `,

    [VARIANTS.SUCCESS]: css`
        .switch-track {
            background-color: ${({ theme }) => theme.colors.gray300};
        }

        .switch-thumb {
            background-color: ${({ theme }) => theme.colors.white};
        }

        &.checked .switch-track {
            background-color: ${({ theme }) => theme.colors.success};
        }
    `,

    [VARIANTS.WARNING]: css`
        .switch-track {
            background-color: ${({ theme }) => theme.colors.gray300};
        }

        .switch-thumb {
            background-color: ${({ theme }) => theme.colors.white};
        }

        &.checked .switch-track {
            background-color: ${({ theme }) => theme.colors.warning};
        }
    `,

    [VARIANTS.ERROR]: css`
        .switch-track {
            background-color: ${({ theme }) => theme.colors.gray300};
        }

        .switch-thumb {
            background-color: ${({ theme }) => theme.colors.white};
        }

        &.checked .switch-track {
            background-color: ${({ theme }) => theme.colors.error};
        }
    `,
};

// 비활성화 스타일
const disabledStyles = css`
    opacity: 0.5;
    cursor: not-allowed;

    .switch-track {
        background-color: ${({ theme }) => theme.colors.gray300} !important;
    }

    .switch-thumb {
        background-color: ${({ theme }) => theme.colors.gray400} !important;
    }
`;

// 라벨 스타일
const labelStyles = css`
    .switch-label {
        font-size: ${({ theme }) => theme.fontSizes.md};
        color: ${({ theme }) => theme.colors.gray700};
        font-weight: 500;
    }
`;

// 체크박스 숨김 스타일
const checkboxStyles = css`
    input[type='checkbox'] {
        position: absolute;
        opacity: 0;
        width: 0;
        height: 0;
        margin: 0;
        padding: 0;
        border: 0;
    }
`;

// 커스텀 색상 스타일
const customColorStyles = css<SwitchContainerProps>`
    ${({ $bgColor, $thumbColor }) =>
        $bgColor &&
        css`
            .switch-track {
                background-color: ${$bgColor} !important;
            }
        `}

    ${({ $thumbColor }) =>
        $thumbColor &&
        css`
            .switch-thumb {
                background-color: ${$thumbColor} !important;
            }
        `}
`;

// 메인 스위치 컨테이너
export const SwitchContainer = styled.div<SwitchContainerProps>`
    ${baseSwitchStyles}
    ${labelStyles}
    ${checkboxStyles}

    // 크기별 스타일 적용
    ${({ $size = 'md' }) => sizeStyles[$size]}

    // Variant별 스타일 적용
    ${({ $variant = 'default' }) => {
        if ($variant && variantStyles[$variant]) {
            return variantStyles[$variant];
        }
        return variantStyles[VARIANTS.DEFAULT];
    }}

    // 커스텀 색상 적용
    ${customColorStyles}

    // 비활성화 스타일
    ${({ disabled }) => disabled && disabledStyles}

    // 포커스 스타일
    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.primary};
        outline-offset: 2px;
    }

    // 호버 효과
    &:not(:disabled):hover {
        .switch-track {
            opacity: 0.8;
        }
    }

    // 트랙 스타일
    .switch-track {
        ${trackBaseStyles}
    }

    // 썸 스타일
    .switch-thumb {
        ${thumbBaseStyles}
    }
`;
