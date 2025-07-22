'use client';

import Button from '@/components/base/button/Button';
import UILayout from '@/components/templates/UILayout/UILayout';
import SectionTitle from '@/components/base/SectionTitle';
import { StyledContentSection, ButtonGrid, FullWidthSection, CustomColorSection } from './styles';

export default function ButtonPage() {
    return (
        <UILayout title="Button 컴포넌트" subtitle="기본, 크기, 옵션, 커스텀 색상 버튼">
            <div>
                <SectionTitle>버튼 변형</SectionTitle>
                <StyledContentSection>
                    <ButtonGrid>
                        <Button>기본 버튼</Button>
                        <Button $variant="secondary">Secondary</Button>
                        <Button $variant="outline">Outline</Button>
                        <Button $variant="text" href="/button">
                            Link
                        </Button>
                    </ButtonGrid>
                </StyledContentSection>

                <SectionTitle>버튼 크기</SectionTitle>
                <StyledContentSection>
                    <ButtonGrid>
                        <Button $size="sm">작음</Button>
                        <Button $size="md">중간임</Button>
                        <Button $size="lg">커버림</Button>
                    </ButtonGrid>
                </StyledContentSection>

                <SectionTitle>버튼 옵션</SectionTitle>
                <FullWidthSection>
                    <ButtonGrid>
                        <Button icon="⚙️">
                            <span>이것은 설정</span>
                        </Button>
                        <Button disabled>
                            <span>비활성화</span>
                        </Button>
                    </ButtonGrid>
                    <Button $fullWidth className="full-width-button" style={{ marginTop: '1em' }}>
                        풀로다가 쓰는 버튼
                    </Button>
                </FullWidthSection>

                <SectionTitle>커스텀 색상 버튼</SectionTitle>
                <CustomColorSection>
                    <ButtonGrid>
                        <Button $bgColor="#FF5733" $textColor="white">
                            커스텀 색상 버튼
                        </Button>
                        <Button $variant="outline" $bgColor="#9C27B0" $textColor="#FFFFFF">
                            커스텀 색상 우선 적용
                        </Button>
                    </ButtonGrid>
                </CustomColorSection>
            </div>
        </UILayout>
    );
}
