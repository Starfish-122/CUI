import React, { useState } from 'react';
import { CopyBtn } from './styles';

interface CopyButtonProps {
    text: string;
    onCopy?: () => void;
    children?: React.ReactNode;
}

export default function CopyButton({ text, onCopy, children = '복사' }: CopyButtonProps) {
    const [copied, setCopied] = useState<boolean>(false);

    const handleCopy = async (): Promise<void> => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
            if (onCopy) onCopy();
        } catch (err) {
            console.error('복사 실패!:', err);
        }
    };

    return <CopyBtn onClick={handleCopy}>{copied ? '복사 완료!' : children}</CopyBtn>;
}
