import { forwardRef } from 'react';
import { RadioContainer, RadioInput, RadioLabel } from './styles';

export interface RadioProps {
    children?: React.ReactNode;
    $title?: string;
    $variant?: 'default' | 'secondary' | 'outline' | 'filled' | string;
    $size?: 'sm' | 'md' | 'lg';
    $bgColor?: string;
    $textColor?: string;
    id: string;
    name: string;
    value: string;
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(
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
        const isDisabled = disabled || $variant === 'disabled';

        // 공통 스타일 props
        const styleProps = {
            $variant,
            $size,
            $bgColor,
            $textColor,
            $disabled: isDisabled,
        };

        // 라디오 인풋 props
        const radioInputProps = {
            type: 'radio',
            id,
            name,
            value,
            checked,
            onChange,
            disabled: isDisabled,
            ref,
            ...styleProps,
            ...props,
        };

        // 레이블이 있는 경우
        if (labelText) {
            return (
                <RadioContainer {...styleProps}>
                    <RadioLabel htmlFor={id} {...styleProps}>
                        <RadioInput {...radioInputProps} />
                        <span>{labelText}</span>
                    </RadioLabel>
                </RadioContainer>
            );
        }

        // 레이블이 없는 경우 (단순 라디오 버튼)
        return (
            <RadioContainer {...styleProps}>
                <RadioInput {...radioInputProps} />
            </RadioContainer>
        );
    }
);

Radio.displayName = 'Radio';

export default Radio;
