'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { flex, flexCenter, flexColumn, transition, boxShadow } from '@/styles/mixins';

const NotFoundContainer = styled.div`
    min-height: 100vh;
    ${flex({ direction: 'column', justify: 'center', align: 'center' })}
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.light800} 0%, ${({ theme }) =>
        theme.colors.gray200} 100%);
    padding: 2rem;
    font-family: 'Noto Sans KR, sans-serif';

    /* @media (min-width: 1024px) {
        margin-left: 17.5rem;
    } */
`;

const NotFoundCard = styled.div`
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    padding: 3rem 2rem;
    text-align: center;
    max-width: 31.25rem;
    width: 100%;
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border: 1px solid rgba(255, 255, 255, 0.2);
    animation: slideUp 0.6s ease-out;

    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media (min-width: 576px) {
        padding: 2rem 1.5rem;
        margin: 1rem;
    }
`;

const ErrorNumber = styled.div`
    font-size: 8rem;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.blue600};
    line-height: 1;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    animation: bounce 2s infinite;

    @keyframes bounce {
        0%,
        20%,
        50%,
        80%,
        100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-10px);
        }
        60% {
            transform: translateY(-5px);
        }
    }

    @media (min-width: 576px) {
        font-size: 6rem;
    }
`;

const ErrorTitle = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes.xxxl};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.black900};
    margin-bottom: 1rem;
    line-height: 1.2;

    @media (min-width: 576px) {
        font-size: ${({ theme }) => theme.fontSizes.xxl};
    }
`;

const ErrorDescription = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: ${({ theme }) => theme.colors.gray600};
    margin-bottom: 2.5rem;
    line-height: 1.6;
    max-width: 25rem;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 576px) {
        font-size: ${({ theme }) => theme.fontSizes.md};
        margin-bottom: 2rem;
    }
`;

const ActionButtons = styled.div`
    ${flex({ justify: 'center', gap: '1rem' })}
    flex-wrap: wrap;

    @media (min-width: 576px) {
        flex-direction: column;
        align-items: center;
    }
`;

const Button = styled(Link)`
    ${flex({ justify: 'center', align: 'center', gap: '0.5rem' })}
    padding: 0.875rem 1.75rem;
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSizes.md};
    text-decoration: none;
    ${transition('all', '0.3s', 'ease')}
    border: none;
    cursor: pointer;
    min-width: 8.75rem;

    &.primary {
        background: linear-gradient(
            135deg,
            ${({ theme }) => theme.colors.blue600} 0%,
            ${({ theme }) => theme.colors.blue700} 100%
        );
        color: ${({ theme }) => theme.colors.light900};
        ${boxShadow('sm')}

        &:hover {
            transform: translateY(-2px);
            ${boxShadow('sm')}
        }
    }

    &.secondary {
        background: transparent;
        color: ${({ theme }) => theme.colors.gray700};
        border: 2px solid ${({ theme }) => theme.colors.gray300};

        &:hover {
            background: ${({ theme }) => theme.colors.gray700};
            color: ${({ theme }) => theme.colors.light900};
            transform: translateY(-2px);
            border-color: ${({ theme }) => theme.colors.gray700};
        }
    }

    @media (min-width: 576px) {
        width: 100%;
        max-width: 12.5rem;
    }
`;

const Icon = styled.span`
    font-family: 'Material Symbols Outlined', sans-serif;
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: 400;
    line-height: 1;
`;

const FloatingElements = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    pointer-events: none;
    z-index: 0;
`;

const FloatingElement = styled.div`
    position: absolute;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    animation: float 6s ease-in-out infinite;

    &:nth-child(1) {
        width: 5rem;
        height: 5rem;
        top: 20%;
        left: 10%;
        animation-delay: 0s;
    }

    &:nth-child(2) {
        width: 3.75rem;
        height: 3.75rem;
        top: 60%;
        right: 10%;
        animation-delay: 2s;
    }

    &:nth-child(3) {
        width: 2.5rem;
        height: 2.5rem;
        top: 40%;
        left: 80%;
        animation-delay: 4s;
    }

    @keyframes float {
        0%,
        100% {
            transform: translateY(0px) rotate(0deg);
        }
        50% {
            transform: translateY(-20px) rotate(180deg);
        }
    }
`;

export default function NotFound() {
    return (
        <NotFoundContainer>
            <FloatingElements>
                <FloatingElement />
                <FloatingElement />
                <FloatingElement />
            </FloatingElements>

            <NotFoundCard>
                <ErrorNumber>404</ErrorNumber>

                <ErrorTitle>페이지를 찾을 수 없습니다</ErrorTitle>

                <ErrorDescription>
                    요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다. URL을 다시 확인하거나
                    아래 버튼을 사용해보세요.
                </ErrorDescription>

                <ActionButtons>
                    <Button href="/" className="primary">
                        <Icon>home</Icon>
                        홈으로 돌아가기
                    </Button>

                    <Button href="/all" className="secondary">
                        <Icon>apps</Icon>
                        컴포넌트 둘러보기
                    </Button>
                </ActionButtons>
            </NotFoundCard>
        </NotFoundContainer>
    );
}
