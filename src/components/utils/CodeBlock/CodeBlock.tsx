import React, { useState } from 'react';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CodeBlockContainer, CodeHeader, StyledSyntaxHighlighter } from './styles';
import { CopyBtn } from '../CopyButton/styles';

interface CodeBlockProps {
    code: string;
    language?: string;
    title?: string;
}

export default function CodeBlock({ code, language = 'jsx', title = 'Code' }: CodeBlockProps) {
    const [copied, setCopied] = useState<boolean>(false);

    const handleCopy = async (): Promise<void> => {
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
                    whiteSpace: 'pre-wrap',
                    wordWrap: 'break-word',
                    wordBreak: 'break-all',
                }}
            >
                {code}
            </StyledSyntaxHighlighter>
        </CodeBlockContainer>
    );
}
