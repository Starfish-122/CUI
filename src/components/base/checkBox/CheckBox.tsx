import { forwardRef, ReactNode, ChangeEvent } from 'react';
import { CheckBoxContainer, CheckBoxInput, CheckBoxLabel, CheckIcon, CheckPath } from './styles';

// 타입 정의
export interface CheckBoxProps {
    children?: ReactNode;
    $title?: string;
    $variant?: 'default' | 'secondary' | 'outline' | 'filled' | string;
    $size?: 'sm' | 'md' | 'lg';
    $bgColor?: string;
    $textColor?: string;
    id: string;
    name: string;
    value: string;
    checked: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    [key: string]: any;
}

const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(
    (
        {
            children,
            $title,
            $variant = 'default',
            $size = 'md',
            $bgColor,
            $textColor,
            id,
            name,
            value,
            checked,
            onChange,
            disabled,
            ...props
        },
        ref
    ) => {
        const labelText = $title || children;

        // 공통 props
        const commonProps = {
            $size,
            $textColor,
            $bgColor,
            $variant,
        };

        // 체크박스 인풋 props
        const inputProps = {
            type: 'checkbox' as const,
            id,
            name,
            value,
            checked,
            onChange,
            disabled,
            ref,
            'data-variant': $variant,
            ...commonProps,
            ...props,
        };

        // 체크 아이콘 렌더링 함수
        const renderCheckIcon = () => (
            <CheckIcon {...commonProps} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <CheckPath d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round" />
            </CheckIcon>
        );

        return (
            <CheckBoxContainer>
                <div style={{ position: 'relative' }}>
                    <CheckBoxInput {...inputProps} />
                    {renderCheckIcon()}
                </div>
                {labelText && (
                    <CheckBoxLabel htmlFor={id}>
                        <span>{labelText}</span>
                    </CheckBoxLabel>
                )}
            </CheckBoxContainer>
        );
    }
);

CheckBox.displayName = 'CheckBox';

export default CheckBox;
