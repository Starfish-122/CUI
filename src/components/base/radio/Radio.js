import { forwardRef } from 'react';
import { RadioContainer, RadioInput, RadioLabel } from './styles';

/**
 * 라디오 버튼 컴포넌트
 *
 * @param {Object} props
 * @param {React.ReactNode} [props.children] - 라디오 버튼 레이블
 * @param {string} [props.$title] - 라디오 버튼 레이블 (children 대신 사용 가능)
 * @param {string} [props.$variant='default'] - 버튼 스타일 변형 ('outline' | 'filled' | 'default' | 'disabled')
 * @param {string} [props.$size='md'] - 버튼 크기 ('sm' | 'md' | 'lg')
 * @param {string} [props.$bgColor] - 커스텀 배경색
 * @param {string} [props.$textColor] - 커스텀 텍스트 색상
 * @param {string} props.id - 라디오 버튼 고유 ID
 * @param {string} props.name - 라디오 버튼 그룹 이름
 * @param {string} props.value - 라디오 버튼 값
 * @param {boolean} props.checked - 선택 여부
 * @param {Function} props.onChange - 변경 이벤트 핸들러
 * @param {boolean} [props.disabled] - 비활성화 여부
 */
const Radio = forwardRef(
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
