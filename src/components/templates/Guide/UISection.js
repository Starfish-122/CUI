'use client';

import React from 'react';
import styled from 'styled-components';
import { H3, H4, ContentSection, UIBox, UIFlex } from '@/components/base/core';

// 마진이 있는 UIBox
const StyledUIBox = styled(UIBox)`
    margin-bottom: 1.5rem;
`;

export default function UISection() {
    return (
        <>
            <H3>박스 컴포넌트</H3>
            <ContentSection>
                <StyledUIBox>
                    <H4>기본 박스</H4>
                    <p>기본 스타일의 박스 컴포넌트입니다.</p>
                </StyledUIBox>

                <StyledUIBox $variant="outline">
                    <H4>아웃라인 박스</H4>
                    <p>테두리가 있는 박스 스타일입니다.</p>
                </StyledUIBox>

                <StyledUIBox $variant="filled">
                    <H4>채워진 박스</H4>
                    <p>배경색이 있는 박스 스타일입니다.</p>
                </StyledUIBox>
            </ContentSection>

            <H3>색상 테마 박스</H3>
            <ContentSection>
                <StyledUIBox $variant="blue400">
                    <H4>파란색 박스</H4>
                    <p>테마 색상 blue400을 배경색으로 사용</p>
                </StyledUIBox>

                <StyledUIBox $variant="red300">
                    <H4>빨간색 박스</H4>
                    <p>테마 색상 red300을 배경색으로 사용</p>
                </StyledUIBox>

                <StyledUIBox $variant="green200">
                    <H4>초록색 박스</H4>
                    <p>테마 색상 green200을 배경색으로 사용</p>
                </StyledUIBox>
            </ContentSection>

            <H3>플렉스 컨테이너</H3>
            <ContentSection>
                <StyledUIBox>
                    <H4>기본 플렉스 컨테이너</H4>
                    <UIFlex $gap="1rem">
                        <p>버튼 1</p>
                        <p>버튼 2</p>
                        <p>버튼 3</p>
                    </UIFlex>
                </StyledUIBox>

                <StyledUIBox>
                    <H4>세로 방향 플렉스</H4>
                    <UIFlex $direction="column" $gap="0.5rem">
                        <p>버튼 1</p>
                        <p>버튼 2</p>
                        <p>버튼 3</p>
                    </UIFlex>
                </StyledUIBox>

                <StyledUIBox>
                    <H4>양쪽 정렬 플렉스</H4>
                    <UIFlex $justify="space-between" $gap="0.5rem">
                        <p>왼쪽</p>
                        <p>오른쪽</p>
                    </UIFlex>
                </StyledUIBox>
            </ContentSection>
        </>
    );
}
