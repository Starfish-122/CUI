import React, { useState } from 'react';
import { CopyBtn } from './styles';

export default function CopyButton({ text, onCopy, children = '복사' }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
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
