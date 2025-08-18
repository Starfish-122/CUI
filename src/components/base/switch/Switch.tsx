'use client';

import { forwardRef, useState, useCallback } from 'react';
import { SwitchContainer } from './styles';

export interface SwitchProps {
    className?: string;
    $variant?: 'default' | 'secondary' | 'outline' | 'filled' | string;
    $size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    checked?: boolean;
    onChange?: (
        event: React.ChangeEvent<HTMLInputElement> | { target: { checked: boolean } },
        checked?: boolean
    ) => void;
    label?: string;
    $bgColor?: string;
    $thumbColor?: string;
}

const Switch = forwardRef<HTMLDivElement, SwitchProps>(
    (
        {
            className = '',
            $variant = 'default',
            $size = 'md',
            disabled = false,
            checked: controlledChecked = false,
            onChange,
            label = '',
            $bgColor,
            $thumbColor,
            ...props
        },
        ref
    ) => {
        const [internalChecked, setInternalChecked] = useState(controlledChecked);
        const isControlled = onChange !== undefined;
        const isChecked = isControlled ? controlledChecked : internalChecked;

        // 토글 핸들러
        const handleToggle = useCallback(
            (event) => {
                event.preventDefault();
                event.stopPropagation();

                if (disabled) return;

                const newChecked = !isChecked;
                console.log('Toggle clicked, new state:', newChecked);

                if (!isControlled) {
                    setInternalChecked(newChecked);
                }

                if (onChange) {
                    onChange({ target: { checked: newChecked } }, newChecked);
                }
            },
            [disabled, isChecked, isControlled, onChange]
        );

        // 체크박스 변경 핸들러
        const handleCheckboxChange = useCallback(
            (event) => {
                event.preventDefault();
                event.stopPropagation();

                if (disabled) return;

                const newChecked = event.target.checked;
                console.log('Checkbox changed, new state:', newChecked);

                if (!isControlled) {
                    setInternalChecked(newChecked);
                }

                if (onChange) {
                    onChange(event, newChecked);
                }
            },
            [disabled, isControlled, onChange]
        );

        // 키보드 이벤트 핸들러
        const handleKeyDown = useCallback(
            (event) => {
                if (disabled) return;

                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    handleToggle(event);
                }
            },
            [disabled, handleToggle]
        );

        return (
            <SwitchContainer
                ref={ref}
                className={`${className} ${isChecked ? 'checked' : ''}`}
                $variant={$variant}
                $size={$size}
                disabled={disabled}
                $bgColor={$bgColor}
                $thumbColor={$thumbColor}
                onClick={handleToggle}
                onKeyDown={handleKeyDown}
                tabIndex={disabled ? -1 : 0}
                role="switch"
                aria-checked={isChecked}
                aria-disabled={disabled}
                data-disabled={disabled}
                {...props}
            >
                {label && <span className="switch-label">{label}</span>}
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    onClick={(e) => e.stopPropagation()}
                    disabled={disabled}
                    aria-hidden="true"
                    style={{ pointerEvents: 'none' }}
                />
                <div className="switch-track">
                    <div className="switch-thumb" />
                </div>
            </SwitchContainer>
        );
    }
);

Switch.displayName = 'Switch';

export default Switch;
