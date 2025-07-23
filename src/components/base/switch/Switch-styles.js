import styled, { css } from 'styled-components';

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

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
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

// Variant별 색상 스타일
const variantStyles = {
    [VARIANTS.DEFAULT]: css`
        .switch-track {
            background-color: ${({ theme }) => theme.colors.gray300};
        }

        .switch-thumb {
            background-color: ${({ theme }) => theme.colors.light900};
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        &.checked .switch-track {
            background-color: ${({ theme }) => theme.colors.blue400};
        }
    `,

    [VARIANTS.PRIMARY]: css`
        .switch-track {
            background-color: ${({ theme }) => theme.colors.gray300};
        }

        .switch-thumb {
            background-color: ${({ theme }) => theme.colors.light900};
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
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
            background-color: ${({ theme }) => theme.colors.light900};
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
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
            background-color: ${({ theme }) => theme.colors.light900};
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
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
            background-color: ${({ theme }) => theme.colors.light900};
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        &.checked .switch-track {
            background-color: ${({ theme }) => theme.colors.error};
        }
    `,
};

// 커스텀 색상 스타일
const createCustomColorStyle = ({ $bgColor, $thumbColor }) => {
    if (!$bgColor && !$thumbColor) return null;

    return css`
        .switch-track {
            background-color: ${$bgColor || '#d1d5db'};
        }

        .switch-thumb {
            background-color: ${$thumbColor || '#ffffff'};
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
    `;
};

export const SwitchContainer = styled.div`
    ${baseSwitchStyles}
    ${({ $size = SIZES.MD }) => sizeStyles[$size] || sizeStyles[SIZES.MD]}
    ${({ $variant = VARIANTS.DEFAULT }) =>
        variantStyles[$variant] || variantStyles[VARIANTS.DEFAULT]}
    ${({ $bgColor, $thumbColor }) => createCustomColorStyle({ $bgColor, $thumbColor })}
    
    // 숨겨진 체크박스
    input[type="checkbox"] {
        position: absolute;
        opacity: 0;
        width: 0;
        height: 0;
        margin: 0;
        padding: 0;
    }

    // 스위치 트랙
    .switch-track {
        position: relative;
        border-radius: 12px;
        transition: background-color 0.2s ease;
        display: flex;
        align-items: center;
    }

    // 스위치 썸
    .switch-thumb {
        position: absolute;
        border-radius: 50%;
        transition: transform 0.2s ease;
        z-index: 1;
    }

    // 라벨 스타일
    .switch-label {
        margin-left: 8px;
        font-size: 14px;
        color: ${({ theme }) => theme.colors.gray700};
    }

    // 포커스 스타일
    &:focus-within .switch-track {
        outline: 2px solid ${({ theme }) => theme.colors.blue400};
        outline-offset: 2px;
    }

    // 호버 효과
    &:hover:not(:disabled) .switch-track {
        /* background-color: ${({ $bgColor }) => createCustomColorStyle({ $bgColor })}; */
        opacity: 0.5;
    }

    &:hover:not(:disabled).checked .switch-track {
        background-color: ${({ $bgColor }) => createCustomColorStyle({ $bgColor })};
    }
`;
