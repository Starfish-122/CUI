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
            background-color: ${({ theme }) => theme.colors.light900};
        }

        &.checked .switch-track {
            background-color: ${({ theme }) => theme.colors.blue400};
        }
    `,

    [VARIANTS.PRIMARY]: css`
        .switch-track {
            background-color: ${({ theme }) => theme.colors.gray200};
        }

        .switch-thumb {
            background-color: ${({ theme }) => theme.colors.light900};
        }

        &.checked .switch-track {
            background-color: ${({ theme }) => theme.colors.primary};
        }
    `,

    [VARIANTS.SUCCESS]: css`
        .switch-track {
            background-color: ${({ theme }) => theme.colors.green100};
        }

        .switch-thumb {
            background-color: ${({ theme }) => theme.colors.light900};
        }

        &.checked .switch-track {
            background-color: ${({ theme }) => theme.colors.success};
        }
    `,

    [VARIANTS.WARNING]: css`
        .switch-track {
            background-color: #fef3c7;
        }

        .switch-thumb {
            background-color: ${({ theme }) => theme.colors.light900};
        }

        &.checked .switch-track {
            background-color: ${({ theme }) => theme.colors.warning};
        }
    `,

    [VARIANTS.ERROR]: css`
        .switch-track {
            background-color: ${({ theme }) => theme.colors.red100};
        }

        .switch-thumb {
            background-color: ${({ theme }) => theme.colors.light900};
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
            background-color: ${$bgColor || '#dee2e6'};
        }

        .switch-thumb {
            background-color: ${$thumbColor || '#ffffff'};
        }
    `;
};

// 비활성화 스타일
const disabledStyles = css`
    opacity: 0.3 !important;

    .switch-track {
        background-color: ${({ theme }) => theme.colors.gray400} !important;
        cursor: not-allowed !important;
        /* pointer-events: none !important; */
    }

    .switch-thumb {
        background-color: ${({ theme }) => theme.colors.gray500} !important;
        box-shadow: none !important;
    }

    .switch-label {
        color: ${({ theme }) => theme.colors.gray500} !important;
    }

    &.checked .switch-track {
        background-color: ${({ theme }) => theme.colors.gray400} !important;
    }
`;

// 상호작용 스타일
const interactionStyles = css`
    // 포커스 스타일
    &:focus-within .switch-track {
        outline: 2px solid ${({ theme }) => theme.colors.blue400};
        outline-offset: 2px;
    }

    // 호버 효과 (비활성화 상태가 아닐 때만)
    &:hover:not(:disabled) .switch-track {
        opacity: 0.8;
    }
`;

export const SwitchContainer = styled.div`
    ${baseSwitchStyles}
    ${({ $size = SIZES.MD }) => sizeStyles[$size] || sizeStyles[SIZES.MD]}
    ${({ $variant = VARIANTS.DEFAULT }) =>
        variantStyles[$variant] || variantStyles[VARIANTS.DEFAULT]}
    ${({ $bgColor, $thumbColor }) => createCustomColorStyle({ $bgColor, $thumbColor })}
    ${interactionStyles}

    // 비활성화 상태 스타일 (최우선 적용)
    &:disabled,
    &[disabled="true"],
    &[disabled="disabled"],
    &[data-disabled="true"] {
        ${disabledStyles}
    }

    // 숨겨진 체크박스
    input[type='checkbox'] {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0;
        margin: 0;
        padding: 0;
    }

    // 스위치 트랙
    .switch-track {
        ${trackBaseStyles}
    }

    // 스위치 썸
    .switch-thumb {
        ${thumbBaseStyles}
    }

    // 라벨 스타일
    .switch-label {
        margin-left: 8px;
        font-size: 14px;
        color: ${({ theme }) => theme.colors.gray700};
    }
`;
