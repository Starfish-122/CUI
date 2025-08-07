'use client';

import { useState } from 'react';
import Icon from '@/components/base/icon';
import UILayout from '@/components/templates/UILayout/UILayout';
import ButtonPlayground from 'src/playground/ButtonPL/ButtonPlayground';
import { components, getStatusText } from './data';
import {
    ComponentsGrid,
    ComponentCard,
    ComponentIcon,
    ComponentTitle,
    ComponentDescription,
    StatusBadge,
} from './styles';

export default function All() {
    const handleCardClick = (component) => {
        window.location.href = component.path;
    };

    return (
        <UILayout title="전체 컴포넌트" subtitle="CUI 디자인 시스템의 모든 컴포넌트를 확인해보세요">
            <ComponentsGrid>
                {components.map((component) => (
                    <ComponentCard key={component.name} onClick={() => handleCardClick(component)}>
                        <ComponentIcon>
                            <Icon name={component.icon} size="xl" filled />
                        </ComponentIcon>
                        <ComponentTitle>{component.name}</ComponentTitle>
                        <ComponentDescription>{component.description}</ComponentDescription>
                        <div style={{ textAlign: 'center' }}>
                            <StatusBadge $status={component.status}>
                                {getStatusText(component.status)}
                            </StatusBadge>
                        </div>
                    </ComponentCard>
                ))}
            </ComponentsGrid>
        </UILayout>
    );
}
