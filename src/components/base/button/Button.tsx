'use client';

import { forwardRef, ReactNode } from 'react';
import { BasicButton } from './styles';

// 타입 정의
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
    [key: string]: any; // 추가 props를 위한 인덱스 시그니처
}

// 기본값 상수
const DEFAULT_PROPS: Partial<ButtonProps> = {
    className: '',
    $variant: 'filled',
    $size: 'md',
    disabled: false,
    $fullWidth: false,
    $text: '버튼',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            children,
            className = DEFAULT_PROPS.className,
            onClick,
            disabled = DEFAULT_PROPS.disabled,
            $variant = DEFAULT_PROPS.$variant,
            $size = DEFAULT_PROPS.$size,
            $fullWidth = DEFAULT_PROPS.$fullWidth,
            $bgColor,
            $textColor,
            $text,
            ...props
        },
        ref
    ) => {
        // 버튼 내용 렌더링
        const renderContent = (): ReactNode => (
            <>
                {children}
                {$text && <span>{$text}</span>}
            </>
        );

        // styled-components전달할 props 정리
        const buttonProps = {
            ref,
            className,
            onClick,
            disabled,
            $variant,
            $size,
            $fullWidth,
            $bgColor,
            $textColor,
            ...props,
        };

        return <BasicButton {...buttonProps}>{renderContent()}</BasicButton>;
    }
);

Button.displayName = 'Button';

export default Button;
