interface SwitchProp {
    name: string;
    default: string;
    type: string;
    description: string;
    options?: string[];
}

export const importCode: string = `import Switch from '@/components/base/switch/Switch';`;

export const variantCode: string = `<Switch label="기본 스위치" />
<Switch $variant="primary" label="Primary 스위치" />
<Switch $variant="success" label="Success 스위치" />
<Switch $variant="warning" label="Warning 스위치" />
<Switch $variant="error" label="Error 스위치" />`;

export const sizeCode: string = `<Switch $size="sm" label="작은 스위치" />
<Switch $size="md" label="중간 스위치" />
<Switch $size="lg" label="큰 스위치" />`;

export const optionCode: string = `<Switch disabled label="비활성화된 스위치" />
<Switch 
    $bgColor="#9C27B0" 
    $thumbColor="#FFFFFF" 
    label="커스텀 색상 스위치" 
/>`;

export const eventCode: string = `const [isChecked, setIsChecked] = useState(false);

const handleChange = (event, checked) => {
    setIsChecked(checked);
    console.log('Switch 상태:', checked);
};

<Switch 
    checked={isChecked} 
    onChange={handleChange} 
    label="상태 변경 감지" 
/>`;

export const switchProps: SwitchProp[] = [
    {
        name: 'checked',
        default: 'false',
        type: 'Boolean',
        description: '스위치의 체크 상태',
    },
    {
        name: 'onChange',
        default: '-',
        type: 'Function',
        description: '상태 변경 시 호출되는 콜백 함수',
    },
    {
        name: 'disabled',
        default: 'false',
        type: 'Boolean',
        description: '스위치 비활성화 여부',
    },
    {
        name: 'label',
        default: '-',
        type: 'String',
        description: '스위치 옆에 표시될 라벨',
    },
    {
        name: '$variant',
        default: 'code:default',
        type: 'String',
        description: '스위치의 스타일 변형.',
        options: ['default', 'primary', 'success', 'warning', 'error'],
    },
    {
        name: '$size',
        default: 'code:md',
        type: 'String',
        description: '스위치의 크기.',
        options: ['sm', 'md', 'lg'],
    },
    {
        name: '$bgColor',
        default: '-',
        type: 'String',
        description: '커스텀 배경색. CSS 색상값',
    },
    {
        name: '$thumbColor',
        default: '-',
        type: 'String',
        description: '커스텀 썸(동그라미) 색상. CSS 색상값',
    },
];
