'use client';

import { UITable } from '@/components/utils/UIStyles';

const PropsTable = ({ props }) => {
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
                        <td>
                            {prop.default ? (
                                typeof prop.default === 'string' &&
                                prop.default.startsWith('code:') ? (
                                    <code>{prop.default.replace('code:', '')}</code>
                                ) : (
                                    prop.default
                                )
                            ) : (
                                '-'
                            )}
                        </td>
                        <td>{prop.type}</td>
                        <td>
                            {prop.description}
                            {prop.options && (
                                <>
                                    <br />
                                    {prop.options.map((option, optionIndex) => (
                                        <code key={optionIndex}>
                                            {option}
                                            {optionIndex < prop.options.length - 1 ? ', ' : ''}
                                        </code>
                                    ))}
                                </>
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </UITable>
    );
};

export default PropsTable;
