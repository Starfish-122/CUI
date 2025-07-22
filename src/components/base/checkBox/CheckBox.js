import { forwardRef } from 'react';
import { CheckBoxContainer, CheckBoxInput, CheckBoxLabel } from './checkBox-styles';

/**
 * 체크박스 컴포넌트
 *
 * @param {Object} props
 * @param {string} [props.$title] - 체크박스 레이블 (children 대신 사용 가능)
 * @param {string} [props.$variant='primary'] - 체크박스 스타일 변형 ('primary' | 'secondary')
 * @param {string} [props.$size='md'] - 체크박스 크기 ('sm' | 'md' | 'lg')
 * @param {string} props.id - 체크박스 고유 ID
 * @param {string} props.name - 체크박스 그룹 이름
 * @param {string} props.value - 체크박스 값
 * @param {boolean} props.checked - 선택 여부
 * @param {Function} props.onChange - 변경 이벤트 핸들러
 */
const CheckBox = forwardRef(
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
        const CheckBoxInputProps = {
            type: 'CheckBox',
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

        if (labelText) {
            return (
                <CheckBoxContainer>
                    <CheckBoxLabel htmlFor={id}>
                        <CheckBoxInput {...CheckBoxInputProps} />
                        <span>{labelText}</span>
                    </CheckBoxLabel>
                </CheckBoxContainer>
            );
        }

        return (
            <CheckBoxContainer>
                <CheckBoxInput {...CheckBoxInputProps} />
            </CheckBoxContainer>
        );
    }
);

CheckBox.displayName = 'CheckBox';

export default CheckBox;
