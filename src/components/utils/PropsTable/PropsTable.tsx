'use client';

import { UITable } from '@/components/utils/UIStyles';

interface PropItem {
    name: string;
    default?: string;
    type: string;
    description: string;
    options?: string[];
}

interface PropsTableProps {
    props: PropItem[];
}

const PropsTable = ({ props }: PropsTableProps) => {
    const renderDefaultValue = (defaultValue?: string): React.ReactNode => {
        if (!defaultValue) return '-';

        if (typeof defaultValue === 'string' && defaultValue.startsWith('code:')) {
            return <code>{defaultValue.replace('code:', '')}</code>;
        }

        return defaultValue;
    };

    const renderOptions = (options?: string[]): React.ReactNode => {
        if (!options || options.length === 0) return null;

        return (
            <>
                <br />
                {options.map((option, optionIndex) => (
                    <code key={optionIndex}>
                        {option}
                        {optionIndex < options.length - 1 ? ', ' : ''}
                    </code>
                ))}
            </>
        );
    };

    return (
        <UITable>
            <thead>
                <tr>
                    <th>Prop</th>
                    <th>Default</th>
                    <th>Type</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {props.map((prop, index) => (
                    <tr key={index}>
                        <td>{prop.name}</td>
                        <td>{renderDefaultValue(prop.default)}</td>
                        <td>{prop.type}</td>
                        <td>
                            {prop.description}
                            {renderOptions(prop.options)}
                        </td>
                    </tr>
                ))}
            </tbody>
        </UITable>
    );
};

export default PropsTable;
