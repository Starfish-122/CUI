export const importCode = `import CheckBox from '@/components/base/checkBox';`;

export const variantCode = `<CheckBox>기본 스타일</CheckBox>
<CheckBox $variant="outline">아웃라인 스타일</CheckBox>
<CheckBox $variant="filled">채워진 스타일</CheckBox>
<CheckBox $variant="disabled" disabled>비활성화 스타일</CheckBox>`;

export const sizeCode = `<CheckBox $size="sm">작은 크기</CheckBox>
<CheckBox $size="md">중간 크기</CheckBox>
<CheckBox $size="lg">큰 크기</CheckBox>`;

export const colorCode = `<CheckBox $bgColor="#FF6B6B" $textColor="#FFFFFF">
    빨간색 배경 + 흰색 아이콘
</CheckBox>
<CheckBox $bgColor="#4ECDC4">
    민트색 배경 + 자동 대비
</CheckBox>
<CheckBox $bgColor="#1F2937">
    어두운 배경 + 자동 대비
</CheckBox>`;

export const eventCode = `const [isChecked, setIsChecked] = useState(false);

const handleChange = (event) => {
    setIsChecked(event.target.checked);
    console.log('Checkbox 상태:', event.target.checked);
};

<CheckBox 
    checked={isChecked} 
    onChange={handleChange}
>
    상태 변경 감지
</CheckBox>`;

export const groupCode = `const [selectedItems, setSelectedItems] = useState([]);

const handleGroupChange = (itemId) => {
    setSelectedItems(prev => 
        prev.includes(itemId) 
            ? prev.filter(id => id !== itemId)
            : [...prev, itemId]
    );
};

{['apple', 'banana', 'orange'].map(item => (
    <CheckBox
        key={item}
        checked={selectedItems.includes(item)}
        onChange={() => handleGroupChange(item)}
    >
        {item}
    </CheckBox>
))}`;

export const checkboxProps = [
    {
        name: 'children',
        default: '-',
        type: 'ReactNode',
        description: '체크박스 옆에 표시될 라벨',
    },
    {
        name: 'checked',
        default: 'false',
        type: 'Boolean',
        description: '체크박스의 체크 상태',
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
        description: '체크박스 비활성화 여부',
    },
    {
        name: 'id',
        default: '-',
        type: 'String',
        description: '체크박스의 고유 식별자',
    },
    {
        name: 'name',
        default: '-',
        type: 'String',
        description: '폼 그룹에서 사용할 이름',
    },
    {
        name: '$variant',
        default: 'code:default',
        type: 'String',
        description: '체크박스의 스타일 변형.',
        options: ['default', 'outline', 'filled', 'disabled'],
    },
    {
        name: '$size',
        default: 'code:md',
        type: 'String',
        description: '체크박스의 크기.',
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
