import { forwardRef } from 'react';
import { RadioContainer, RadioInput, RadioLabel } from './radio-styles';

/**
 * 라디오 버튼 컴포넌트
 *
 * @param {Object} props
 * @param {string} [props.$title] - 라디오 버튼 레이블 (children 대신 사용 가능)
 * @param {string} [props.$variant='primary'] - 버튼 스타일 변형 ('primary' | 'secondary')
 * @param {string} [props.$size='md'] - 버튼 크기 ('sm' | 'md' | 'lg')
 * @param {string} props.id - 라디오 버튼 고유 ID
 * @param {string} props.name - 라디오 버튼 그룹 이름
 * @param {string} props.value - 라디오 버튼 값
 * @param {boolean} props.checked - 선택 여부
 * @param {Function} props.onChange - 변경 이벤트 핸들러
 */
const Radio = forwardRef(
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
        const labelText = $title || children;

        // 라디오 인풋 기본 속성
        const radioInputProps = {
            type: 'radio',
            id,
            name,
            value,
            checked,
            onChange,
            $variant,
            $size,
            ref,
            ...props,
        };

        // 레이블이 있는 경우
        if (labelText) {
            return (
                <RadioContainer>
                    <RadioLabel htmlFor={id}>
                        <RadioInput {...radioInputProps} />
                        <span>{labelText}</span>
                    </RadioLabel>
                </RadioContainer>
            );
        }

        // 레이블이 없는 경우 (단순 라디오 버튼)
        return (
            <RadioContainer>
                <RadioInput {...radioInputProps} />
            </RadioContainer>
        );
    }
);

Radio.displayName = 'Radio';

export default Radio;
