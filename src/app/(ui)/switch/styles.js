import styled from 'styled-components';
import { H2 } from '@/components/base/core';

// 공통 스타일 함수들
const getThemeValue = (theme, path) => {
    return path.split('.').reduce((obj, key) => obj[key], theme);
};

const createThemeFunction =
    (path) =>
    ({ theme }) =>
        getThemeValue(theme, path);

export const SectionHeader = styled(H2)`
    color: ${createThemeFunction('colors.gray800')};
    margin: ${({ theme }) => `${theme.spacing.xxl} 0 ${theme.spacing.lg} 0`};
    padding: ${createThemeFunction('spacing.sm')} 0;
    font-size: ${createThemeFunction('fontSizes.xxl')};
    font-weight: 600;
    text-align: center;
    position: relative;

    &:after {
        content: '';
        position: absolute;
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        width: 0.5em;
        height: 0.5em;
        background: linear-gradient(
            135deg,
            ${createThemeFunction('colors.blue400')},
            ${createThemeFunction('colors.blue300')}
        );
        border-radius: 2px;
    }
`;

export const SwitchContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
`;

export const SwitchRow = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem;
    border: 1px solid #e5e7eb;
    border-radius: 0.5rem;
    background-color: #f9fafb;
`;

export const SwitchLabel = styled.span`
    font-weight: 500;
    min-width: 120px;
`;

export const SwitchValue = styled.span`
    color: #6b7280;
    font-size: 0.875rem;
`;
