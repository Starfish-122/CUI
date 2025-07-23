'use client';

import { forwardRef } from 'react';
import { BasicButton } from './button-styles';

// 기본값 상수
const DEFAULT_PROPS = {
    className: '',
    $variant: 'default',
    $size: 'md',
    disabled: false,
    $fullWidth: false,
};

const Button = forwardRef(
    (
        {
            children,
            className = DEFAULT_PROPS.className,
            $variant = DEFAULT_PROPS.$variant,
            $size = DEFAULT_PROPS.$size,
            disabled = DEFAULT_PROPS.disabled,
            onClick,
            $text,
            $fullWidth = DEFAULT_PROPS.$fullWidth,
            $bgColor,
            $textColor,
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

        // 전달할 props 정리
        const buttonProps = {
            $variant,
            $size,
            $fullWidth,
            disabled,
            onClick,
            className,
            ref,
            $bgColor,
            $textColor,
            ...props,
        };

        return <BasicButton {...buttonProps}>{renderContent()}</BasicButton>;
    }
);

Button.displayName = 'Button';

export default Button;
