'use client';
import styled from 'styled-components';

// 타입 정의
export interface IconProps {
    name: string;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    filled?: boolean;
    color?: string;
    clickable?: boolean;
    onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void;
    className?: string;
    [key: string]: any;
}

interface StyledIconProps {
    $size?: string;
    $filled?: boolean;
    $color?: string;
    $clickable?: boolean;
}

// 크기 상수 정의
const SIZES = {
    xs: '0.75rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '2.5rem',
    xxl: '3rem',
};

// 기본 색상
const DEFAULT_COLOR = '#374151';

const StyledIcon = styled.span<StyledIconProps>`
    /* Google Fonts Material Symbols 기본 설정 */
    font-family: 'Material Symbols Outlined', 'Material Icons', sans-serif !important;
    font-weight: 400;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    font-feature-settings: 'liga';
    -webkit-font-feature-settings: 'liga';
    -webkit-font-smoothing: antialiased;

    /* 크기 설정 */
    font-size: ${({ $size }) => SIZES[$size as keyof typeof SIZES] || SIZES.md};

    /* 색상 설정 */
    color: ${({ $color, theme }) => $color || theme?.colors?.gray700 || DEFAULT_COLOR};

    /* 클릭 가능한 경우 커서 변경 */
    cursor: ${({ $clickable }) => ($clickable ? 'pointer' : 'default')};

    /* 호버 효과 */
    ${({ $clickable }) =>
        $clickable &&
        `
        transition: all 0.2s ease;
        &:hover {
            transform: scale(1.1);
            opacity: 0.8;
        }
    `}

    /* FILL 변형 설정 */
    font-variation-settings: ${({ $filled }) =>
        $filled ? "'FILL' 1, 'GRAD' 0, 'opsz' 24" : "'FILL' 0, 'GRAD' 0, 'opsz' 24"};

    /* 폰트 로딩 실패 시 대체 스타일 */
    @supports not (font-variation-settings: normal) {
        font-family: 'Material Icons', sans-serif !important;
        font-size: ${({ $size }) => SIZES[$size as keyof typeof SIZES] || SIZES.md};
    }
`;

/**
 * Icon 컴포넌트
 * Google Fonts Material Symbols 아이콘을 렌더링합니다.
 *
 * @param {string} name - 아이콘 이름 (Google Fonts 아이콘 이름 사용)
 * @param {string} size - 아이콘 크기 ('xs', 'sm', 'md', 'lg', 'xl', 'xxl')
 * @param {boolean} filled - 채워진 스타일 여부
 * @param {string} color - 아이콘 색상
 * @param {boolean} clickable - 클릭 가능 여부
 * @param {function} onClick - 클릭 이벤트 핸들러
 * @param {string} className - 추가 CSS 클래스
 * @param {object} props - 기타 props
 */
const Icon = ({
    name,
    size = 'md',
    filled = false,
    color,
    clickable = false,
    onClick,
    className,
    ...props
}: IconProps) => {
    return (
        <StyledIcon
            $size={size}
            $filled={filled}
            $color={color}
            $clickable={clickable}
            onClick={onClick}
            className={`material-symbols-outlined ${className || ''}`}
            {...props}
        >
            {name}
        </StyledIcon>
    );
};

export default Icon;
