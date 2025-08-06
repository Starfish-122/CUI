import styled from 'styled-components';
import { flex } from '@/styles/mixins';

export const ButtonContainer = styled.div`
    ${flex({ justify: 'flex-start', wrap: 'wrap', align: 'flex-end', gap: '1rem' })}
`;
