import styled from 'styled-components';
import { H2, UIBox } from '@/components/utils/UIStyles';

// 공통 스타일 함수들
const getThemeValue = (theme: any, path: string): any => {
    return path.split('.').reduce((obj: any, key: string) => obj[key], theme);
};

const createThemeFunction =
    (path: string) =>
    ({ theme }: { theme: any }) =>
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

export const StyledUIBox = styled(UIBox)`
    margin-bottom: ${createThemeFunction('spacing.xl')};
    background: ${createThemeFunction('colors.light900')};
    border-radius: ${createThemeFunction('borderRadius.lg')};
    padding: ${createThemeFunction('spacing.xl')};
    box-shadow: ${createThemeFunction('shadows.sm')};
    border: 1px solid ${createThemeFunction('colors.gray400')};
    transition: all ${createThemeFunction('transitions.medium')};
`;

export const CheckboxGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: ${createThemeFunction('spacing.lg')};
    align-items: center;
    padding: ${createThemeFunction('spacing.md')} 0;

    > div {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        min-height: 60px;
        padding: ${createThemeFunction('spacing.lg')};
    }
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
