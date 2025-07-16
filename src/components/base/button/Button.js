'use client';

import Link from 'next/link';
import { forwardRef } from 'react';
// import './button.scss';
import { BasicButton } from './button-styles';

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
            bgColor,
            textColor,
            ...props
        },
        ref
    ) => {
        const content = (
            <>
                {icon && <i>{icon}</i>}
                {children}
            </>
        );

        // href가 있으면 Link, 없으면 button으로 렌더링
        if (href && !disabled) {
            return (
                <Link href={href} className={className} ref={ref} {...props}>
                    {content}
                </Link>
            );
        }

        return (
            <BasicButton
                variant={variant}
                size={size}
                fullWidth={fullWidth}
                disabled={disabled}
                onClick={onClick}
                className={className}
                ref={ref}
                bgColor={bgColor}
                textColor={textColor}
                {...props}
            >
                {content}
            </BasicButton>
        );
    }
);

/*
<BasicButton
                className={allClasses}
                disabled={disabled}
                onClick={onClick}
                ref={ref}
                variant={variant}
                {...props}
            >
                {content}
            </BasicButton>
 */

Button.displayName = 'Button';

export default Button;
