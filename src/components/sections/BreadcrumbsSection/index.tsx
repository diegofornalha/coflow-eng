import * as React from 'react';
import classNames from 'classnames';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Section from '../Section';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import { getDataAttrs } from '../../../utils/get-data-attrs';
import { Action } from '../../atoms';

export default function BreadcrumbsSection(props) {
    const { type, elementId, colors, styles = {}, navLinks = [], 'data-sb-field-path': fieldPath } = props;
    return (
        <Section type={type} elementId={elementId} colors={colors} styles={styles.self} data-sb-field-path={fieldPath}
            id={elementId || null}
            {...getDataAttrs(props)}
            style={styles.self}
            // className={classNames(
            //     'sb-component',
            //     'sb-component-section',
            //     // 'sb-component-divider-section',
            //     colors,
            //     // 'w-full',
            //     // 'flex',
            //     mapStyles({ justifyContent: styles.self?.justifyContent ?? 'left' }),
            //     styles.self?.padding ?? 'py-12 px-4'
            // )}
        >
            <Breadcrumbs aria-label="breadcrumb" data-sb-field-path=".navLinks">
                {navLinks.map((link, index) =>
                    <Action {...link} data-sb-field-path={`.${index}`} key={`${index}`}/>
                )}
            </Breadcrumbs>
        </Section >
    );
}
