export const importCode = `import Radio from '@/components/base/radio';`;

export const variantCode = `<Radio name="style" value="default">기본 스타일</Radio>
<Radio name="style" value="outline" $variant="outline">아웃라인 스타일</Radio>
<Radio name="style" value="filled" $variant="filled">채워진 스타일</Radio>
<Radio name="style" value="disabled" $variant="disabled" disabled>비활성화 스타일</Radio>`;

export const sizeCode = `<Radio name="size" value="sm" $size="sm">작은 크기</Radio>
<Radio name="size" value="md" $size="md">중간 크기</Radio>
<Radio name="size" value="lg" $size="lg">큰 크기</Radio>`;

export const colorCode = `<Radio name="color" value="custom1" $bgColor="#FF6B6B" $textColor="#d8d6d5">
    배경 + 텍스트 1
</Radio>
<Radio name="color" value="custom2" $bgColor="#4ECDC4">
    민트색 배경 + 자동 대비
</Radio>
<Radio name="color" value="custom3" $bgColor="#1F2937" $textColor="#A78BFA">
    어두운 배경 + 텍스트
</Radio>`;

export const eventCode = `const [selectedValue, setSelectedValue] = useState('');

const handleChange = (event) => {
    setSelectedValue(event.target.value);
    console.log('선택된 값:', event.target.value);
};

<Radio 
    name="fruit" 
    value="apple" 
    checked={selectedValue === 'apple'}
    onChange={handleChange}
>
    사과
</Radio>
<Radio 
    name="fruit" 
    value="banana" 
    checked={selectedValue === 'banana'}
    onChange={handleChange}
>
    바나나
</Radio>`;

export const groupCode = `const [selectedFruit, setSelectedFruit] = useState('apple');

const fruits = [
    { value: 'apple', label: '사과' },
    { value: 'banana', label: '바나나' },
    { value: 'orange', label: '오렌지' }
];

{fruits.map(fruit => (
    <Radio
        key={fruit.value}
        name="fruit"
        value={fruit.value}
        checked={selectedFruit === fruit.value}
        onChange={(e) => setSelectedFruit(e.target.value)}
    >
        {fruit.label}
    </Radio>
))}`;

export const radioProps = [
    {
        name: 'children',
        default: '-',
        type: 'ReactNode',
        description: '라디오 버튼 옆에 표시될 라벨',
    },
    {
        name: 'name',
        default: '-',
        type: 'String',
        description: '라디오 그룹의 이름 (필수)',
    },
    {
        name: 'value',
        default: '-',
        type: 'String',
        description: '라디오 버튼의 값 (필수)',
    },
    {
        name: 'checked',
        default: 'false',
        type: 'Boolean',
        description: '라디오 버튼의 선택 상태',
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
        description: '라디오 버튼 비활성화 여부',
    },
    {
        name: 'id',
        default: '-',
        type: 'String',
        description: '라디오 버튼의 고유 식별자',
    },
    {
        name: '$variant',
        default: 'code:default',
        type: 'String',
        description: '라디오 버튼의 스타일 변형.',
        options: ['default', 'outline', 'filled', 'disabled'],
    },
    {
        name: '$size',
        default: 'code:md',
        type: 'String',
        description: '라디오 버튼의 크기.',
        options: ['sm', 'md', 'lg'],
    },
    {
        name: '$bgColor',
        default: '-',
        type: 'String',
        description: '커스텀 배경색. CSS 색상값',
    },
    {
        name: '$textColor',
        default: '-',
        type: 'String',
        description: '커스텀 텍스트 색상. CSS 색상값',
    },
];
