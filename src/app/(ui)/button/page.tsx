'use client';

import Button from '@/components/base/button/Button';
import UILayout from '@/components/templates/UILayout/UILayout';
import SectionTitle from '@/components/utils/SectionTitle';
import CodeBlock from '@/components/utils/CodeBlock';
import { ButtonContainer } from './styles';
import Icon from '@/components/base/icon';
// import ButtonPlayground from '@/playground/ButtonPL/ButtonPlayground';
import ButtonPlayground from './Playground';
import { importCode, variantCode, sizeCode, optionCode, colorCode, buttonProps } from './data';
import PropsTable from '@/components/utils/PropsTable';

export default function ButtonPage(): React.JSX.Element {
    return (
        <UILayout title="Button 컴포넌트" subtitle="기본, 크기, 옵션, 커스텀 색상 버튼">
            <ButtonPlayground />

            <SectionTitle>사용법</SectionTitle>
            <CodeBlock code={importCode} language="javascript" title="Import" />

            <SectionTitle>버튼 변형</SectionTitle>
            <ButtonContainer>
                <Button>클릭하세요</Button>
                <Button $text="기본 버튼" />
                <Button $variant="outline" $text="테두리 버튼" />
                <Button $variant="text" $text="텍스트 버튼" />
            </ButtonContainer>
            <CodeBlock code={variantCode} language="jsx" title="Variants" />

            <SectionTitle>버튼 크기</SectionTitle>
            <ButtonContainer>
                <Button $size="sm" $text="작음" />
                <Button $size="md" $text="중간임" />
                <Button $size="lg" $text="커버림" />
            </ButtonContainer>
            <CodeBlock code={sizeCode} language="jsx" title="Sizes" />

            <SectionTitle>버튼 옵션</SectionTitle>
            <ButtonContainer>
                <Button $text="아이콘과 같이 사용">
                    <Icon name="search_off" size="lg" color="white" />
                </Button>
                <Button disabled $text="비활성화" />
            </ButtonContainer>
            <Button $fullWidth $text="Full Width 버튼" style={{ marginTop: '1em' }} />
            <CodeBlock code={optionCode} language="jsx" title="Options" />

            <SectionTitle> 색상 </SectionTitle>
            <ButtonContainer>
                <Button $bgColor="primary" $text="primary" />
                <Button $bgColor="secondary" $text="secondary" />
                <Button $bgColor="success" $text="success" />
                <Button $bgColor="warning" $text="warning" />
                <Button $bgColor="error" $text="error" />

                <Button $bgColor="#FF5733" $textColor="white" $text="커스텀 버튼" />
            </ButtonContainer>
            <CodeBlock code={colorCode} language="jsx" title="Colors" />

            <SectionTitle>Props</SectionTitle>
            <PropsTable props={buttonProps} />
        </UILayout>
    );
}
