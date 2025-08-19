import styled, { css } from 'styled-components';
import { toRem } from '@/styles/utils';
import { flex, boxShadow, media } from '@/styles/mixins';

export const TableContainer = styled.div`
    margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const StyledTable = styled.div`
    max-width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;

    table {
        width: 100%;
        margin-bottom: ${({ theme }) => theme.spacing.lg};
        border-collapse: collapse;
        font-size: 100%;
        table-layout: fixed;

        caption {
            position: absolute;
            top: -500%;
            left: -500%;
        }

        th,
        td {
            padding: ${({ theme }) => theme.spacing.md};
            border: 1px solid ${({ theme }) => theme.colors.gray400};
        }
        th {
            background-color: ${({ theme }) => theme.colors.gray100};
        }
        thead th {
            background: ${({ theme }) => theme.colors.gray100};
            color: ${({ theme }) => theme.colors.black700};
        }
        code {
            background-color: ${({ theme }) => theme.colors.gray100};
            padding: ${({ theme }) => theme.spacing.xs};
            border-radius: ${({ theme }) => theme.borderRadius.sm};
            margin-right: ${({ theme }) => theme.spacing.xs};
            display: inline-block;
        }
        ${media.md(css`
            tr:hover > * {
                background: ${({ theme }) => theme.colors.gray100};
            }
        `)}
    }

    ${media.max.md(css`
        table {
            thead {
                border: none;
                clip: rect(0 0 0 0);
                height: 1px;
                margin: -1px;
                overflow: hidden;
                padding: 0;
                position: absolute;
                width: 1px;
            }
            th {
                display: block;
                font-size: ${({ theme }) => theme.fontSizes.sm};
                text-align: left;
            }
            tr {
                border: 1px solid ${({ theme }) => theme.colors.gray400};
                margin-bottom: ${({ theme }) => theme.spacing.md};
                display: block;
            }
            th,
            td {
                border: 0;
                border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};
                padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
            }
            td {
                font-size: ${({ theme }) => theme.fontSizes.xs};
                display: grid;
                grid-template-columns: 1fr 2fr;
                &::before {
                    content: attr(data-label);
                    font-weight: bold;
                    text-transform: uppercase;
                    color: ${({ theme }) => theme.colors.gray700};
                    font-size: ${({ theme }) => theme.fontSizes.xs};
                }
                &:last-child {
                    border-bottom: 0;
                }
            }
        }
        /* table {
            width: 100%;
            border-right: 1px solid #dfdfdf;
            display: block;
        }
        thead {
            display: block;
            float: left;
        }
        tbody {
            display: block;
            width: auto;
            position: relative;
            overflow-x: auto;
            white-space: nowrap;
        }
        thead tr {
            display: block;
        }
        th {
            display: block;
            text-align: right;
            border-bottom: 0;
            border-left: 0;
        }
        tbody tr {
            display: inline-block;
            vertical-align: top;
            border-left: 1px solid #babcbf;
            margin-left: -5px;
        }
        td {
            display: block;
            min-height: 1.25em;
            text-align: left;
            border-left: 0;
            border-right: 0;
            border-bottom: 0;
        }
        th:last-child,
        td:last-child {
            border-bottom: 1px solid #dfdfdf;
        } */
    `)}
`;
