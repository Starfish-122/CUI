import styled from 'styled-components';
import { H2 } from '@/components/utils/UIStyles';

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

export const RadioGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${createThemeFunction('spacing.md')};
    margin-bottom: ${createThemeFunction('spacing.xl')};
    background: ${createThemeFunction('colors.light900')};
    padding: ${createThemeFunction('spacing.xl')};
    border-radius: ${createThemeFunction('borderRadius.lg')};
    box-shadow: ${createThemeFunction('shadows.sm')};
    border: 1px solid ${createThemeFunction('colors.gray400')};
    transition: all ${createThemeFunction('transitions.medium')};
`;

export const RadioRow = styled.div`
    display: flex;
    align-items: center;
    gap: ${createThemeFunction('spacing.lg')};
    flex-wrap: wrap;
`;

export const ResultBox = styled.div`
    padding: ${createThemeFunction('spacing.md')};
    padding-top: ${createThemeFunction('spacing.lg')};
    background: linear-gradient(
        135deg,
        ${createThemeFunction('colors.gray100')} 0%,
        ${createThemeFunction('colors.light900')} 100%
    );
    border-radius: ${createThemeFunction('borderRadius.lg')};
    font-size: ${createThemeFunction('fontSizes.lg')};
    color: ${createThemeFunction('colors.gray700')};
    font-weight: 500;
    box-shadow: ${createThemeFunction('shadows.sm')};
`;
