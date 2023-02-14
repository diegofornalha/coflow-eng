import * as React from 'react';
import classNames from 'classnames';
import { I18NContext } from '../../../../context/i18Ncontext';

export default function CheckboxFormControl(props) {
    const { name, label, labelFr, isRequired, width = 'full', 'data-sb-field-path': fieldPath } = props;
    const labelId = `${name}-label`;
    const attr: any = {};
    const { locale } = React.useContext(I18NContext);

    const getLabel = () => locale === 'pt' && labelFr ? labelFr : label;

    if (label) {
        attr['aria-labelledby'] = labelId;
    }
    if (isRequired) {
        attr.required = true;
    }
    return (
        <div
            className={classNames('sb-form-control', 'flex', 'items-center', {
                'sm:col-span-2': width === 'full'
            })}
            data-sb-field-path={fieldPath}
        >
            <input id={name} className="sb-checkbox" type="checkbox" name={name} {...attr} data-sb-field-path=".name#@id .name#@name" />
            {label && (
                <label id={labelId} className="sb-label" htmlFor={name} data-sb-field-path={`.${locale === 'pt' ? 'labelFr' : 'label'} .name#@for`}>
                    {getLabel()}
                </label>
            )}
        </div>
    );
}
