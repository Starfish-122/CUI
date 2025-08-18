import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 16px;
        line-height: 1.5;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${({ theme }) => theme.colors.light900};
        color: ${({ theme }) => theme.colors.gray900};
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    button {
        border: none;
        background: none;
        cursor: pointer;
        font-family: inherit;
    }

    input, textarea, select {
        font-family: inherit;
        border: none;
        outline: none;
    }

    ul, ol {
        list-style: none;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    /* 스크롤바 스타일링 */
    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }

    ::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.colors.gray200};
        border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.gray400};
        border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: ${({ theme }) => theme.colors.gray500};
    }

    /* 포커스 스타일 */
    :focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.primary};
        outline-offset: 2px;
    }

    /* 선택 텍스트 스타일 */
    ::selection {
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.white};
    }

    /* 접근성 개선 */
    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
    }

    /* 애니메이션 */
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes slideIn {
        from {
            transform: translateY(20px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    .fade-in {
        animation: fadeIn 0.3s ease-in-out;
    }

    .slide-in {
        animation: slideIn 0.3s ease-out;
    }
`;

export default GlobalStyles;
