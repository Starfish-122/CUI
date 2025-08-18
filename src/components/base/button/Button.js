'use client';

import { forwardRef } from 'react';
import { BasicButton } from './styles';

// 기본값 상수
const DEFAULT_PROPS = {
    className: '',
    $variant: 'filled',
    $size: 'md',
    disabled: false,
    $fullWidth: false,
    $text: '버튼',
};

const Button = forwardRef(
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
        const renderContent = () => (
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
