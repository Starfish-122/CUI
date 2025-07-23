import { forwardRef } from 'react';
import {
    CheckBoxContainer,
    CheckBoxInput,
    CheckBoxLabel,
    CheckIcon,
    CheckPath,
} from './checkBox-styles';

/**
 * 체크박스 컴포넌트
 *
 * @param {Object} props
 * @param {string} [props.$title] - 체크박스 레이블 (children 대신 사용 가능)
 * @param {string} [props.$variant='default'] - 체크박스 스타일 변형 ('default' | 'secondary' | 'outline' | 'filled' | theme color name)
 * @param {string} [props.$size='md'] - 체크박스 크기 ('sm' | 'md' | 'lg')
 * @param {string} [props.$bgColor] - 체크 시 배경색 (커스텀 색상)
 * @param {string} [props.$textColor] - 체크 아이콘 색상 (커스텀 색상)
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
            type: 'checkbox',
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
