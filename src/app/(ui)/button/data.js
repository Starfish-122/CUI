export const importCode = `import Button from '@/components/base/button/Button';`;

export const variantCode = `<Button $text="기본 버튼" />
<Button $variant="outline" $text="테두리 버튼" />
<Button $variant="text" $text="텍스트 버튼" />`;

export const sizeCode = `<Button $size="sm" $text="작음" />
<Button $size="md" $text="중간임" />
<Button $size="lg" $text="커버림" />`;

export const optionCode = `<Button $text="아이콘과 같이 사용">
    <Icon name="search_off" size="lg" $color="white" />
</Button>

<Button disabled $text="비활성화" />

<Button $fullWidth $text="Full Width 버튼" />`;

export const colorCode = `<Button $bgColor="primary" $text="primary" />
<Button $bgColor="secondary" $text="secondary" />
<Button $bgColor="success" $text="success" />
<Button $bgColor="warning" $text="warning" />
<Button $bgColor="error" $text="error" />
<Button $bgColor="#FF5733" $textColor="white" $text="커스텀 버튼" />
`;
