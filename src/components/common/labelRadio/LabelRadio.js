import { forwardRef } from 'react';
import { RadioInput, RadioLabel } from '@/components/base/radio/radio-styles';

const LabelRadio = forwardRef(
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
