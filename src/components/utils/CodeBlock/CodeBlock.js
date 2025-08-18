import React, { useState } from 'react';

import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CodeBlockContainer, CodeHeader, StyledSyntaxHighlighter } from './styles';
import { CopyBtn } from '../CopyButton/styles';

export default function CodeBlock({ code, language = 'jsx', title = 'Code' }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy code:', err);
        }
    };

    return (
        <CodeBlockContainer>
            <CodeHeader>
                <span>{title}</span>
                <CopyBtn onClick={handleCopy}>{copied ? '복사됨!' : '복사'}</CopyBtn>
            </CodeHeader>
            <StyledSyntaxHighlighter
                language={language}
                style={tomorrow}
                customStyle={{
                    padding: '1rem',
                    margin: 0,
                    fontSize: '0.875rem',
                }}
            >
                {code}
            </StyledSyntaxHighlighter>
        </CodeBlockContainer>
    );
}
