'use client';

import { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { media, flex, flexCenter, flexColumn } from '@/styles/mixins';
import { H2, H3, H4, UIFlex, UIBox } from '@/components/base/core';

// 애니메이션
const blink = keyframes`
  0%  { width: 0; }
  100% { width:100%; }
`;

// 스타일 컴포넌트들
const StyledH4 = styled(H4)`
    text-align: center;
`;

const StyledUIBox = styled(UIBox)`
    margin-bottom: 1.5rem;
`;

const ProgressBar = styled.div`
    width: 100%;
    height: 0.5rem;
    background-color: ${({ theme }) => theme.colors.gray400};
    border-radius: 8px;
    margin: 1rem 0;
    position: relative;
    ${flex({ justify: 'space-around', align: 'center' })};
`;

const ProgressFill = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background: linear-gradient(90deg, #0070f3, #00d4ff);
    border-radius: 8px;
    transition: width 0.5s ease-in-out;
    width: ${({ $progress }) => $progress}%;
    z-index: 1;
`;

const ProgressNumber = styled.button`
    position: relative;
    z-index: 2;
    font-weight: bold;
    border: 1px solid;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    ${flexCenter};
    ${({ $isActive, theme }) => {
        if ($isActive) {
            return `background-color: ${theme.colors.blue400};color: ${theme.colors.light900};border-color: ${theme.colors.blue400};`;
        }
    }}
`;

const ProgressText = styled.div`
    text-align: center;
    font-size: 0.9rem;
    color: #666;
    margin-top: 0.5rem;
`;

const List = styled.ul`
    ${flex({ direction: 'row', justify: 'space-between', gap: '1rem' })};
    padding-top: 1rem;

    li {
        flex: 1;
    }
`;

const CurriculumList = styled.ul`
    ${flex({ direction: 'column', gap: '0.2rem', align: 'flex-start' })};
    border-top: 1px solid ${({ theme }) => theme.colors.gray400};
    padding-top: 0.5em;
`;

const Item = styled.li`
    ${flex({ direction: 'column', align: 'flex-start' })};
    gap: ${({ $isCurrent }) => ($isCurrent ? '0.5em' : '0')};
    font-weight: ${({ $isCurrent }) => ($isCurrent ? 'bold' : 'normal')};
    color: ${({ $isCurrent }) => ($isCurrent ? '#0070f3' : '#444')};

    &:after {
        content: '';
        display: block;
        background-color: ${({ $isCurrent }) => ($isCurrent ? '#0070f3' : '#444')};
        height: 6px;
        width: 0;

        ${({ $isCurrent }) =>
            $isCurrent &&
            css`
                animation: ${blink} 5s infinite;
            `}
    }
`;

// 데이터 타입 정의
const initialCurriculum = [
    {
        label: '프로젝트 셋업 완료',
        done: true,
        current: false,
        content: [
            { label: 'Next.js 프로젝트 생성', done: true, current: false },
            {
                label: 'ESLint / Prettier / styled-components 환경 구성',
                done: true,
                current: false,
            },
            { label: '폴더 구조 설계 (Atomic Design 적용)', done: true, current: false },
        ],
    },
    {
        label: 'Button 컴포넌트 제작',
        done: true,
        current: true,
        content: [
            { label: 'Button 컴포넌트 기본 구조', done: true, current: false },
            { label: '다양한 variant 지원', done: false, current: true },
            { label: '스타일링 시스템 적용', done: false, current: false },
        ],
    },
    {
        label: 'Input 컴포넌트 제작',
        done: false,
        current: false,
        content: [
            { label: 'Input 컴포넌트 기본 구조', done: false, current: false },
            { label: '다양한 타입 지원', done: false, current: false },
            { label: '유효성 검사 기능', done: false, current: false },
        ],
    },
    {
        label: 'Playground 구성',
        done: false,
        current: false,
        content: [
            { label: '컴포넌트 데모 페이지', done: false, current: false },
            { label: '실시간 속성 변경 기능', done: false, current: false },
            { label: '코드 예제 표시', done: false, current: false },
        ],
    },
    {
        label: '디자인 시스템 적용',
        done: false,
        current: false,
        content: [
            { label: 'Theme 시스템 구축', done: false, current: false },
            { label: 'Typography 시스템', done: false, current: false },
            { label: 'Color 팔레트 정의', done: false, current: false },
        ],
    },
    {
        label: '배포 준비',
        done: false,
        current: false,
        content: [
            { label: 'npm 패키지 구성', done: false, current: false },
            { label: '문서화 작업', done: false, current: false },
            { label: '배포 스크립트 작성', done: false, current: false },
        ],
    },
];

// 유틸리티 함수들
const calculateProgress = (curriculum) => {
    const totalItems = curriculum.reduce((acc, item) => acc + item.content.length, 0);
    const completedItems = curriculum.reduce(
        (acc, item) => acc + item.content.filter((content) => content.done).length,
        0
    );
    const progressPercentage = Math.round((completedItems / totalItems) * 100);

    return { totalItems, completedItems, progressPercentage };
};

const handleStepClick = (index, curriculum, setCurriculum) => {
    const updatedCurriculum = curriculum.map((curItem, curIndex) => ({
        ...curItem,
        current: curIndex === index ? !curItem.current : false,
    }));
    setCurriculum(updatedCurriculum);
};

// 하위 컴포넌트들
const ProgressSection = ({ curriculum, setCurriculum }) => {
    const { totalItems, completedItems, progressPercentage } = calculateProgress(curriculum);

    return (
        <>
            <ProgressText>
                {completedItems} / {totalItems} 완료 ({progressPercentage}%)
            </ProgressText>
            <ProgressBar>
                <ProgressFill $progress={progressPercentage} />
                {curriculum.map((item, index) => (
                    <ProgressNumber
                        key={index}
                        $isActive={item.current}
                        onClick={() => handleStepClick(index, curriculum, setCurriculum)}
                    >
                        {index + 1}
                    </ProgressNumber>
                ))}
            </ProgressBar>
        </>
    );
};

const CurriculumItem = ({ item }) => (
    <li>
        <StyledH4>{item.label}</StyledH4>
        {item.current && (
            <CurriculumList>
                {item.content.map((contentItem, index) => (
                    <Item key={index} $isCurrent={contentItem.current}>
                        {contentItem.done ? '✅' : '⬜'} {contentItem.label}
                    </Item>
                ))}
            </CurriculumList>
        )}
    </li>
);

// 메인 컴포넌트
export default function Main() {
    const [curriculum, setCurriculum] = useState(initialCurriculum);

    return (
        <section>
            <H2>📌 진행 상황</H2>
            <ProgressSection curriculum={curriculum} setCurriculum={setCurriculum} />
            <List>
                {curriculum.map((item) => (
                    <CurriculumItem key={item.label} item={item} />
                ))}
            </List>
        </section>
    );
}
