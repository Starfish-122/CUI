import styled, { keyframes, css } from 'styled-components';
import { media, flex, flexCenter, flexColumn, inlineFlex } from '@/styles/mixins';
import { H2, H3, H4, UIFlex, UIBox } from '@/components/base/core';

// 애니메이션
export const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const slideIn = keyframes`
  from { transform: translateX(-20px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

export const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

export const progressFill = keyframes`
  from { width: 0%; }
  to { width: var(--progress-width); }
`;

// 메인 컨테이너
export const MainContainer = styled.section`
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    animation: ${fadeIn} 0.6s ease-out;
`;

// 헤더 섹션
export const HeaderSection = styled.div`
    text-align: center;
    margin-bottom: 3rem;

    h1 {
        font-size: 2.5rem;
        font-weight: 700;
        background: linear-gradient(
            135deg,
            ${({ theme }) => theme.colors.blue600},
            ${({ theme }) => theme.colors.blue400}
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin-bottom: 1rem;
    }

    p {
        font-size: 1.1rem;
        color: ${({ theme }) => theme.colors.gray600};
        max-width: 600px;
        margin: 0 auto;
        line-height: 1.6;
    }
`;

// 진행률 섹션
export const ProgressSection = styled.div`
    background: linear-gradient(
        135deg,
        ${({ theme }) => theme.colors.light900},
        ${({ theme }) => theme.colors.gray100}
    );
    border-radius: 20px;
    padding: 2rem;
    margin-bottom: 3rem;
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border: 1px solid ${({ theme }) => theme.colors.gray200};
`;

export const ProgressText = styled.div`
    text-align: center;
    font-size: 1.2rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray700};
    margin-bottom: 1.5rem;

    span {
        color: ${({ theme }) => theme.colors.blue600};
        font-weight: 700;
    }
`;

export const ProgressBar = styled.div`
    width: 100%;
    height: 12px;
    background: ${({ theme }) => theme.colors.gray200};
    border-radius: 10px;
    position: relative;
    /* overflow: hidden; */
    margin: 2rem 0;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        background: linear-gradient(
            90deg,
            ${({ theme }) => theme.colors.blue500},
            ${({ theme }) => theme.colors.blue400}
        );
        border-radius: 10px;
        transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        width: ${({ $progress }) => $progress}%;
        box-shadow: 0 2px 8px rgba(0, 127, 255, 0.3);
    }
`;

export const ProgressSteps = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    width: 100%;
`;

export const ProgressNumber = styled.i`
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 3px solid ${({ theme }) => theme.colors.gray300};
    background: ${({ theme }) => theme.colors.light900};
    color: ${({ theme }) => theme.colors.gray600};
    font-weight: 600;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;

    ${({ $isActive, theme }) =>
        $isActive &&
        css`
            background: linear-gradient(135deg, ${theme.colors.blue500}, ${theme.colors.blue400});
            border-color: ${theme.colors.blue400};
            color: ${theme.colors.light900};
        `}

    ${({ $isDone, theme }) =>
        $isDone &&
        css`
            background: linear-gradient(135deg, ${theme.colors.green500}, ${theme.colors.green400});
            border-color: ${theme.colors.green400};
            color: ${theme.colors.light900};
        `}
`;

// 카드 리스트
export const List = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
`;

export const Card = styled.div`
    background: ${({ theme }) => theme.colors.light900};
    border-radius: 16px;
    padding: 1.5rem;
    box-shadow: ${({ theme }) => theme.shadows.sm};
    border: 1px solid ${({ theme }) => theme.colors.gray200};
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: ${({ $isCurrent, $isDone, theme }) =>
            $isDone
                ? `linear-gradient(90deg, ${theme.colors.green500}, ${theme.colors.green400})`
                : $isCurrent
                  ? `linear-gradient(90deg, ${theme.colors.blue500}, ${theme.colors.blue400})`
                  : `linear-gradient(90deg, ${theme.colors.gray400}, ${theme.colors.gray300})`};
    }

    &:hover {
        transform: translateY(-4px);
        box-shadow: ${({ theme }) => theme.shadows.lg};
    }

    ${({ $isCurrent, theme }) =>
        $isCurrent &&
        css`
            border-color: ${theme.colors.blue400};
            box-shadow: 0 8px 25px rgba(0, 127, 255, 0.15);
            transform: translateY(-2px);
        `}
`;

export const CardHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
`;

export const CardTitle = styled.h3`
    font-size: 1.2rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray800};
    margin: 0;

    ${({ $isCurrent, theme }) =>
        $isCurrent &&
        css`
            color: ${theme.colors.blue600};
        `}
`;

export const StatusIcon = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;

    ${({ $isDone, $isCurrent, theme }) => {
        if ($isDone) {
            return css`
                background: ${theme.colors.green100};
                color: ${theme.colors.green600};
            `;
        } else if ($isCurrent) {
            return css`
                background: ${theme.colors.blue100};
                color: ${theme.colors.blue600};
                animation: ${pulse} 2s infinite;
            `;
        } else {
            return css`
                background: ${theme.colors.gray100};
                color: ${theme.colors.gray500};
            `;
        }
    }}
`;

export const CurriculumList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    animation: ${slideIn} 0.4s ease-out;
`;

export const Item = styled.li`
    display: flex;
    align-items: center;
    padding: 0.5rem 0;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.gray600};
    transition: all 0.2s ease;

    &:hover {
        color: ${({ theme }) => theme.colors.gray800};
    }

    ${({ $isCurrent, theme }) =>
        $isCurrent &&
        css`
            color: ${theme.colors.blue600};
            font-weight: 600;
        `}

    ${({ $isDone, theme }) =>
        $isDone &&
        css`
            color: ${theme.colors.green600};
        `}
`;

export const ItemIcon = styled.span`
    margin-right: 0.5rem;
    font-size: 1rem;

    ${({ $isDone, $isCurrent }) => {
        if ($isDone) return 'color: #22c55e;';
        if ($isCurrent) return 'color: #0070f3;';
        return 'color: #9ca3af;';
    }}
`;

export const EmptyState = styled.div`
    text-align: center;
    padding: 2rem;
    color: ${({ theme }) => theme.colors.gray500};
    font-style: italic;
`;
