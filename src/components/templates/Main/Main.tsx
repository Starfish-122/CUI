'use client';

import { useState } from 'react';
import {
    MainContainer,
    HeaderSection,
    ProgressSection,
    ProgressText,
    ProgressBar,
    ProgressSteps,
    ProgressNumber,
    List,
    Card,
    CardHeader,
    CardTitle,
    CurriculumList,
    Item,
    ItemIcon,
    EmptyState,
} from './styles';

export interface CurriculumItem {
    label: string;
    done: boolean;
    current: boolean;
}

export interface Curriculum {
    label: string;
    done: boolean;
    current: boolean;
    content: CurriculumItem[];
}

interface ProgressData {
    totalItems: number;
    completedItems: number;
    progressPercentage: number;
}

const CURRICULUM_DATA: Curriculum[] = [
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
        label: '디자인 시스템 적용',
        done: true,
        current: false,
        content: [
            { label: 'Theme 시스템 구축', done: true, current: false },
            { label: 'Typography 시스템', done: true, current: false },
            { label: 'Color 팔레트 정의', done: true, current: false },
        ],
    },
    {
        label: '컴포넌트 제작',
        done: false,
        current: true,
        content: [
            { label: 'Button', done: true, current: false },
            { label: 'Input-radio', done: true, current: false },
            { label: 'Input-checkbox', done: true, current: false },
            { label: 'Input-checkbox-switch', done: true, current: false },
            { label: 'Input-text', done: false, current: true },
            { label: 'Input-select', done: false, current: false },
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
        label: '배포 준비',
        done: false,
        current: false,
        content: [
            { label: 'npm 패키지 구성', done: false, current: false },
            { label: '문서화 작업', done: false, current: false },
            { label: '배포 스크립트 작성', done: false, current: false },
        ],
    },
    {
        label: '다음 프로젝트!',
        done: false,
        current: false,
        content: [],
    },
];

const calculateProgress = (curriculum: Curriculum[]): ProgressData => {
    const totalItems = curriculum.reduce((acc, item) => acc + item.content.length, 0);
    const completedItems = curriculum.reduce(
        (acc, item) => acc + item.content.filter((content) => content.done).length,
        0
    );
    const progressPercentage = Math.round((completedItems / totalItems) * 100);

    return { totalItems, completedItems, progressPercentage };
};

const getItemIcon = (isDone: boolean, isCurrent: boolean): string => {
    if (isDone) return '✅';
    if (isCurrent) return '🔄';
    return '⭕';
};

interface ProgressSectionProps {
    curriculum: Curriculum[];
}

const ProgressSectionComponent = ({ curriculum }: ProgressSectionProps) => {
    const { totalItems, completedItems, progressPercentage } = calculateProgress(curriculum);

    return (
        <ProgressSection>
            <ProgressText>
                <span>{completedItems}</span> / {totalItems} 완료 ({progressPercentage}%)
            </ProgressText>
            <ProgressBar $progress={progressPercentage}>
                <ProgressSteps>
                    {curriculum.map((item, index) => (
                        <ProgressNumber key={index} $isActive={item.current} $isDone={item.done}>
                            {index + 1}
                        </ProgressNumber>
                    ))}
                </ProgressSteps>
            </ProgressBar>
        </ProgressSection>
    );
};

interface CurriculumCardProps {
    item: Curriculum;
}

const CurriculumCard = ({ item }: CurriculumCardProps) => {
    const hasContent = item.content.length > 0;

    return (
        <Card $isCurrent={item.current} $isDone={item.done}>
            <CardHeader>
                <CardTitle $isCurrent={item.current} $isDone={item.done}>
                    {item.label}
                </CardTitle>
            </CardHeader>

            {hasContent ? (
                <CurriculumList>
                    {item.content.map((contentItem, index) => (
                        <Item
                            key={index}
                            $isCurrent={contentItem.current}
                            $isDone={contentItem.done}
                        >
                            <ItemIcon $isDone={contentItem.done} $isCurrent={contentItem.current}>
                                {getItemIcon(contentItem.done, contentItem.current)}
                            </ItemIcon>
                            {contentItem.label}
                        </Item>
                    ))}
                </CurriculumList>
            ) : (
                <EmptyState>준비 중인 단계입니다.</EmptyState>
            )}
        </Card>
    );
};

interface HeaderProps {
    title: string;
    description: string;
}

const Header = ({ title, description }: HeaderProps) => (
    <HeaderSection>
        <h1>{title}</h1>
        <p>{description}</p>
    </HeaderSection>
);

// 메인 컴포넌트
export default function Main() {
    const [curriculum] = useState<Curriculum[]>(CURRICULUM_DATA);

    return (
        <MainContainer>
            <Header
                title="프로젝트 진행 상황"
                description="현재 진행 중인 프로젝트의 단계별 진행 상황을 확인하고 관리할 수 있습니다. 각 단계의 세부 내용을 확인하세요."
            />

            <ProgressSectionComponent curriculum={curriculum} />

            <List>
                {curriculum.map((item) => (
                    <CurriculumCard key={item.label} item={item} />
                ))}
            </List>
        </MainContainer>
    );
}
