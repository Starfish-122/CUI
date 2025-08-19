'use client';

import { StyledTable } from './styles';

interface PropItem {
    name: string;
    default?: string;
    type: string;
    description: string;
    options?: string[];
}

interface PropsTableProps {
    props: PropItem[];
    title?: string;
}

const PropsTable = ({ props, title }: PropsTableProps) => {
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
        <StyledTable>
            <table>
                <caption>{title}</caption>
                <thead>
                    <tr>
                        <th scope="col">Prop</th>
                        <th scope="col">Default</th>
                        <th scope="col">Type</th>
                        <th scope="col">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {props.map((prop, index) => (
                        <tr key={index}>
                            <th scope="row" data-label="Prop">
                                {prop.name}
                            </th>
                            <td data-label="Default">{renderDefaultValue(prop.default)}</td>
                            <td data-label="Type">{prop.type}</td>
                            <td data-label="Description">
                                <p>
                                    {prop.description}
                                    {renderOptions(prop.options)}
                                </p>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </StyledTable>
    );
};

export default PropsTable;
