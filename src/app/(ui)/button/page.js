'use client';

import Button from '@/components/base/button/Button';
import UILayout from '@/components/templates/UILayout/UILayout';
import SectionTitle from '@/components/base/SectionTitle';
import { ButtonContainer } from './styles';
import Icon from '@/components/base/icon';
import ButtonPlayground from '@/playground/ButtonPL/ButtonPlayground';

export default function ButtonPage() {
    return (
        <UILayout title="Button 컴포넌트" subtitle="기본, 크기, 옵션, 커스텀 색상 버튼">
            <ButtonPlayground />

            <SectionTitle>버튼 변형</SectionTitle>

            <ButtonContainer>
                <Button $text="기본 버튼" />
                {/* <Button $variant="filled" $text="채워진 버튼" /> */}
                <Button $variant="outline" $text="테두리 버튼" />
                <Button $variant="text" $text="텍스트 버튼" />
            </ButtonContainer>

            <SectionTitle>버튼 크기</SectionTitle>

            <ButtonContainer>
                <Button $size="sm" $text="작음" />
                <Button $size="md" $text="중간임" />
                <Button $size="lg" $text="커버림" />
            </ButtonContainer>

            <SectionTitle>버튼 옵션</SectionTitle>

            <ButtonContainer>
                <Button $text="아이콘과 같이 사용">
                    <Icon name="search_off" size="lg" $color="white" />
                </Button>
                <Button disabled $text="비활성화" />
            </ButtonContainer>

            <Button $fullWidth $text="Full Width 버튼" style={{ marginTop: '1em' }} />

            <SectionTitle> 색상 </SectionTitle>

            <ButtonContainer>
                <Button $bgColor="primary" $text="primary" />
                <Button $bgColor="secondary" $text="secondary" />
                <Button $bgColor="success" $text="success" />
                <Button $bgColor="warning" $text="warning" />
                <Button $bgColor="error" $text="error" />

                <Button $bgColor="#FF5733" $textColor="white" $text="커스텀 색상" />
                <Button
                    $variant="outline"
                    $bgColor="#9C27B0"
                    $textColor="#1976d2"
                    $text="커스텀 + 테두리"
                />
            </ButtonContainer>
        </UILayout>
    );
}
