import { forwardRef } from 'react';
import { RadioInput, RadioLabel, RadioContainer } from '@/components/base/radio/styles';

export interface LabelRadioProps {
    children?: React.ReactNode;
    $title?: string;
    $variant?: 'default' | 'secondary' | 'outline' | 'filled' | string;
    $size?: 'sm' | 'md' | 'lg';
    id: string;
    name: string;
    value: string;
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const LabelRadio = forwardRef<HTMLInputElement, LabelRadioProps>(
    (
        {
            children,
            $title,
            $variant = 'primary',
            $size = 'md',
            id,
            name,
            value,
            checked,
            onChange,
            ...props
        },
        ref
    ) => {
        // 레이블이 있는 경우
        if ($title || children) {
            return (
                <RadioContainer>
                    <RadioLabel htmlFor={id}>
                        <RadioInput
                            type="radio"
                            id={id}
                            name={name}
                            value={value}
                            checked={checked}
                            onChange={onChange}
                            $variant={$variant}
                            $size={$size}
                            ref={ref}
                            {...props}
                        />
                        <span>{$title || children}</span>
                    </RadioLabel>
                </RadioContainer>
            );
        }
    }
);

LabelRadio.displayName = 'LabelRadio';

export default LabelRadio;
