import * as React from 'react';
import classNames from 'classnames';
import { I18NContext } from '../../../../context/i18Ncontext';

export default function EmailFormControl(props) {
    const { name, label, labelFr, hideLabel, placeholder, placeholderFr, isRequired, width = 'full', 'data-sb-field-path': fieldPath } = props;
    const labelId = `${name}-label`;
    const attr: any = {};
    const { locale } = React.useContext(I18NContext);

    const getLabel = () => locale === 'pt' && labelFr ? labelFr : label;
    const getPlaceholder = () => locale === 'pt' && placeholderFr ? placeholderFr : placeholder;

    if (label) {
        attr['aria-labelledby'] = labelId;
    }
    if (isRequired) {
        attr.required = true;
    }
    if (getPlaceholder()) {
        attr.placeholder = getPlaceholder();
    }
    return (
        <div
            className={classNames('sb-form-control', {
                'sm:col-span-2': width === 'full'
            })}
            data-sb-field-path={fieldPath}
        >
            {label && (
                <label id={labelId} className={classNames('sb-label', { 'sr-only': hideLabel })} htmlFor={name} data-sb-field-path={`.${locale === 'pt' ? 'labelFr' : 'label'} .name#@for`}>
                    {getLabel()}
                </label>
            )}
            <input id={name} className="sb-input" type="email" name={name} {...attr} data-sb-field-path={`.name#@id .name#@name .${locale === 'pt' ? 'placeholderFr' : 'placeholder'}#@placeholder`} />
        </div>
    );
}
