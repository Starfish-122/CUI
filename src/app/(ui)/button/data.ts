interface ButtonProp {
    name: string;
    default: string;
    type: string;
    description: string;
    options?: string[];
}

export const importCode: string = `import Button from '@/components/base/button/Button';`;

export const variantCode: string = `<Button>클릭하세요</Button>
<Button $text="기본 버튼" />
<Button $variant="outline" $text="테두리 버튼" />
<Button $variant="text" $text="텍스트 버튼" />`;

export const sizeCode: string = `<Button $size="sm" $text="작음" />
<Button $size="md" $text="중간임" />
<Button $size="lg" $text="커버림" />`;

export const optionCode: string = `<Button $text="아이콘과 같이 사용">
                    <Icon name="search_off" size="lg" color="white" />
</Button>

<Button disabled $text="비활성화" />

<Button $fullWidth $text="Full Width 버튼" />`;

export const colorCode: string = `<Button $bgColor="primary" $text="primary" />
<Button $bgColor="secondary" $text="secondary" />
<Button $bgColor="success" $text="success" />
<Button $bgColor="warning" $text="warning" />
<Button $bgColor="error" $text="error" />
<Button $bgColor="#FF5733" $textColor="white" $text="커스텀 버튼" />
`;

export const buttonProps: ButtonProp[] = [
    {
        name: 'children',
        default: '-',
        type: 'ReactNode',
        description: '버튼 내부에 표시할 내용',
    },
    {
        name: 'className',
        default: '',
        type: 'String',
        description: '추가 CSS 클래스명',
    },
    {
        name: 'onClick',
        default: '-',
        type: 'Function',
        description: '버튼 클릭 시 실행할 함수',
    },
    {
        name: 'disabled',
        default: 'false',
        type: 'Boolean',
        description: '버튼 비활성화 여부',
    },
    {
        name: '$variant',
        default: 'code:filled',
        type: 'String',
        description: '버튼의 스타일 변형.',
        options: ['filled', 'outline', 'text'],
    },
    {
        name: '$size',
        default: 'code:md',
        type: 'String',
        description: '버튼의 크기.',
        options: ['sm', 'md', 'lg'],
    },
    {
        name: '$fullWidth',
        default: 'false',
        type: 'Boolean',
        description: '버튼을 부모 컨테이너의 전체 너비로 확장',
    },
    {
        name: '$bgColor',
        default: '-',
        type: 'String',
        description: '커스텀 배경색. 테마 색상명 또는 CSS 색상값',
        options: ['primary', 'secondary', 'success', 'warning', 'error'],
    },
    {
        name: '$textColor',
        default: '-',
        type: 'String',
        description: '커스텀 텍스트 색상. CSS 색상값',
    },
    {
        name: '$text',
        default: '-',
        type: 'String',
        description: '버튼에 추가로 표시할 텍스트',
    },
];
