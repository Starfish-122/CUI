import styled from 'styled-components';
import { toRem } from '@/styles/utils';
import { media, flexCenter, flexColumn } from '@/styles/mixins';

export const ContentSection = styled.section`
    max-width: ${toRem(1024)};
    margin: 0 auto 3rem;
    text-align: center;
`;
export const SectionTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
`;
export const ItemWrapper = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
`;
export const Item = styled.li`
    flex: 1;
    min-width: ${toRem(200)};
    margin-bottom: 1.5rem;
    border: 1px solid ${({ theme }) => theme.colors.gray300};
`;
export const ColorBox = styled.div`
    width: 100%;
    height: 3rem;
    background-color: ${({ $color }) => $color || '#cccccc'};
    ${flexCenter};
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ $darkText }) => ($darkText ? '#000000' : '#ffffff')};
`;
export const ItemName = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.md};
    margin: 0.5rem auto;
`;
export const FontSizeExample = styled.div`
    font-size: ${({ $size }) => $size || '1rem'};
    padding: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray300};
    background-color: ${({ theme }) => theme.colors.gray100};
    ${flexCenter};
`;
export const SpacingExample = styled.div`
    padding: ${({ $space }) => $space || '1rem'};
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray300};
    background-color: ${({ theme }) => theme.colors.gray100};
    ${flexCenter};
`;
export const BorderRadiusExample = styled.div`
    width: 100%;
    height: 100px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray300};
    border-radius: ${({ $radius }) => $radius || '0'};
    background-color: #f5f5f5;
    ${flexCenter};
`;
export const ShadowExample = styled.div`
    width: 100%;
    height: 100px;
    box-shadow: ${({ $shadow }) => $shadow || 'none'};
    ${flexCenter};
`;
export const ValueText = styled.code`
    display: block;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.gray600};
    margin-top: 0.25rem;
`;
export const TransitionExample = styled.div`
    ${flexCenter};
    width: 100%;
    height: 100px;
    background-color: ${({ theme }) => theme.colors.gray100};
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray300};
    cursor: pointer;
    transition: all ${({ $transition }) => $transition || '0.3s ease-in-out'};

    &:hover {
        background-color: ${({ theme }) => theme.colors.blue200};
        transform: translateY(-1rem);
    }
`;
