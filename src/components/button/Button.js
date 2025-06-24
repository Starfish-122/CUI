'use client';

import Link from 'next/link';
import { forwardRef } from 'react';
import './button.scss';

const variants = {
    primary: 'cui-button--primary',
    secondary: 'cui-button--secondary',
    outline: 'cui-button--outline',
};

const sizes = {
    sm: 'cui-button--sm',
    md: 'cui-button--md',
    lg: 'cui-button--lg',
};

const Button = forwardRef(
    (
        {
            children,
            className = '',
            variant = 'primary',
            size = 'md',
            href,
            disabled = false,
            icon,
            onClick,
            fullWidth = false,
            ...props
        },
        ref
    ) => {
        const baseClasses = 'cui-button';
        const variantClasses = variants[variant] || variants.primary;
        const sizeClasses = sizes[size] || sizes.md;
        const widthClass = fullWidth ? 'cui-button--full-width' : '';

        const allClasses = [baseClasses, variantClasses, sizeClasses, widthClass, className].join(
            ' '
        );

        // 버튼 내부 콘텐츠 (아이콘 + 텍스트)
        const content = (
            <>
                {icon && <span className="cui-button__icon">{icon}</span>}
                {children}
            </>
        );

        // href가 있으면 Link, 없으면 button으로 렌더링
        if (href && !disabled) {
            return (
                <Link href={href} className={allClasses} ref={ref} {...props}>
                    {content}
                </Link>
            );
        }

        return (
            <button
                className={allClasses}
                disabled={disabled}
                onClick={onClick}
                ref={ref}
                {...props}
            >
                {content}
            </button>
        );
    }
);

Button.displayName = 'Button';

export default Button;
