'use client';

import Button from '@/components/base/button/Button';
import { H2, H3, ContentSection } from '@/components/base/core';

export default function button() {
    return (
        <>
            <H2>Button 컴포넌트 데모</H2>

            <div>
                <H3>버튼 변형</H3>
                <ContentSection>
                    <Button>기본 버튼</Button>
                    <Button $variant="secondary">Secondary</Button>
                    <Button $variant="outline">Outline</Button>
                    <Button $variant="text" href="/button">
                        Link
                    </Button>
                </ContentSection>
                <H3>버튼 크기</H3>
                <ContentSection>
                    <Button $size="sm">작음</Button>
                    <Button $size="md">중간임</Button>
                    <Button $size="lg">커버림</Button>
                </ContentSection>
                <H3>버튼 옵션</H3>
                <ContentSection>
                    <Button $fullWidth>풀로다가 쓰는 버튼</Button>
                    <Button disabled>
                        <span>비활성화</span>
                    </Button>
                    <Button icon="⚙️">
                        <span>이것은 설정</span>
                    </Button>
                </ContentSection>
                <H3>커스텀 색상 버튼</H3>
                <ContentSection>
                    <Button $bgColor="#FF5733" $textColor="white">
                        커스텀 색상 버튼
                    </Button>

                    <Button $variant="outline" $bgColor="#9C27B0" $textColor="#FFFFFF">
                        커스텀 색상 우선 적용
                    </Button>
                </ContentSection>
            </div>
        </>
    );
}
