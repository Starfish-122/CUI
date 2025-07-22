'use client';

import Radio from '@/components/base/radio';
import CheckBox from '@/components/base/checkBox';
import { useState } from 'react';
import styled from 'styled-components';
import { H2, H3, UIFlex, UIBox } from '@/components/base/core';

const RadioGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
    background-color: ${({ theme }) => theme.colors.light900};
    padding: 1rem;
    border-radius: ${({ theme }) => theme.borderRadius.md};
`;

const RadioRow = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const ResultBox = styled.div`
    margin-top: 1rem;
    padding: 0.5rem;
    background-color: ${({ theme }) => theme.colors.light900};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    font-size: ${({ theme }) => theme.fontSizes.lg};
`;

const StyledUIBox = styled(UIBox)`
    margin-bottom: 1.5rem;
`;

export default function InputPage() {
    const [selectedFruit, setSelectedFruit] = useState('apple');
    const [selectedSize, setSelectedSize] = useState('md');
    const [selectedVariant, setSelectedVariant] = useState('primary');

    return (
        <>
            <H2>Input </H2>

            <H2>Radio </H2>

            <H3>기본 라디오 버튼</H3>
            <RadioRow>
                <Radio
                    id="fruit-apple"
                    name="fruit"
                    value="apple"
                    $title="apple"
                    $variant="secondary"
                    checked={selectedFruit === 'apple'}
                    onChange={() => setSelectedFruit('apple')}
                />

                <Radio
                    id="fruit-banana"
                    name="fruit"
                    value="banana"
                    $title="바나나"
                    $variant="blue400"
                    checked={selectedFruit === 'banana'}
                    onChange={() => setSelectedFruit('banana')}
                />

                <Radio
                    id="fruit-orange"
                    name="fruit"
                    value="orange"
                    checked={selectedFruit === 'orange'}
                    onChange={() => setSelectedFruit('orange')}
                >
                    오렌지
                </Radio>
            </RadioRow>
            <ResultBox>선택된 과일: {selectedFruit}</ResultBox>

            <H3>크기 변형</H3>
            <RadioGroup>
                <RadioRow>
                    <Radio
                        id="size-sm"
                        name="size"
                        value="sm"
                        checked={selectedSize === 'sm'}
                        onChange={() => setSelectedSize('sm')}
                        $size="sm"
                    >
                        작은 크기
                    </Radio>

                    <Radio
                        id="size-md"
                        name="size"
                        value="md"
                        checked={selectedSize === 'md'}
                        onChange={() => setSelectedSize('md')}
                        $size="md"
                    >
                        중간 크기
                    </Radio>

                    <Radio
                        id="size-lg"
                        name="size"
                        value="lg"
                        checked={selectedSize === 'lg'}
                        onChange={() => setSelectedSize('lg')}
                        $size="lg"
                    >
                        큰 크기
                    </Radio>
                </RadioRow>
                <ResultBox>선택된 크기: {selectedSize}</ResultBox>
            </RadioGroup>

            <H3>변형</H3>
            <RadioGroup>
                <RadioRow>
                    <Radio
                        id="variant-primary"
                        name="variant"
                        value="primary"
                        checked={selectedVariant === 'primary'}
                        onChange={() => setSelectedVariant('primary')}
                        $variant="primary"
                    >
                        기본
                    </Radio>

                    <Radio
                        id="variant-secondary"
                        name="variant"
                        value="secondary"
                        checked={selectedVariant === 'secondary'}
                        onChange={() => setSelectedVariant('secondary')}
                        $variant="secondary"
                    >
                        보조
                    </Radio>
                </RadioRow>
                <ResultBox>선택된 변형: {selectedVariant}</ResultBox>
            </RadioGroup>

            <H2>Checkbox </H2>

            <H3>기본 체크박스</H3>

            <StyledUIBox $variant="outline">
                <UIFlex $gap="1rem">
                    <CheckBox id="checkbox-default" name="checkbox" type="checkbox" />
                    <CheckBox
                        id="checkbox-default"
                        name="checkbox"
                        type="checkbox"
                        $variant="outline"
                    />
                    <CheckBox
                        id="checkbox-default"
                        name="checkbox"
                        type="checkbox"
                        $variant="filled"
                    />
                    <CheckBox
                        id="checkbox-default"
                        name="checkbox"
                        type="checkbox"
                        $variant="blue500"
                    />
                </UIFlex>
            </StyledUIBox>

            <H3>크기 변형</H3>
            <StyledUIBox $variant="outline">
                <UIFlex $gap="1rem">
                    <CheckBox id="checkbox-default" name="checkbox" type="checkbox" $size="sm" />
                    <CheckBox id="checkbox-default" name="checkbox" type="checkbox" $size="md" />
                    <CheckBox id="checkbox-default" name="checkbox" type="checkbox" $size="lg" />
                </UIFlex>
            </StyledUIBox>
        </>
    );
}
