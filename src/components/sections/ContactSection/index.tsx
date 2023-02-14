import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';

import { getComponent } from '../../components-registry';
import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import Section from '../Section';
import FormBlock from '../../molecules/FormBlock';
import { I18NContext } from '../../../context/i18Ncontext';

export default function ContactSection(props) {
    const { type, elementId, colors, backgroundSize, title, titlePt, text, textPt, form, media, styles = {}, 'data-sb-field-path': fieldPath } = props;
    const sectionFlexDirection = styles.self?.flexDirection ?? 'row';
    const sectionAlignItems = styles.self?.alignItems ?? 'center';
    const { locale } = React.useContext(I18NContext);

    const getTitle = () => locale === 'pt' && titlePt ? titlePt : title;
    const getText = () => locale === 'pt' && textPt ? textPt : text;

    return (
        <Section type={type} elementId={elementId} colors={colors} backgroundSize={backgroundSize} styles={styles.self} data-sb-field-path={fieldPath}>
            <div
                className={classNames('flex', mapFlexDirectionStyles(sectionFlexDirection), mapStyles({ alignItems: sectionAlignItems }), 'space-y-8', {
                    'lg:space-y-0 lg:space-x-8': sectionFlexDirection === 'row',
                    'space-y-reverse lg:space-y-0 lg:space-x-8 lg:space-x-reverse': sectionFlexDirection === 'row-reverse',
                    'space-y-reverse': sectionFlexDirection === 'col-reverse'
                })}
            >
                <div className="flex-1 w-full">
                    <ContactBody title={getTitle()} text={getText()} styles={styles} />
                    {form && (
                        <div className={classNames('sb-contact-section-form', { 'mt-12': title || text })}>
                            <FormBlock {...form} className="inline-block w-full" data-sb-field-path=".form" />
                        </div>
                    )}
                </div>
                {media && (
                    <div className="flex-1 w-full">
                        <ContactMedia media={media} />
                    </div>
                )}
            </div>
        </Section>
    );
}

function ContactMedia({ media }) {
    const mediaType = media.type;
    if (!mediaType) {
        throw new Error(`contact section media does not have the 'type' property`);
    }
    const Media = getComponent(mediaType);
    if (!Media) {
        throw new Error(`no component matching the contact section media type: ${mediaType}`);
    }
    return <Media {...media} data-sb-field-path=".media" />;
}

function ContactBody(props) {
    const { title, text, styles = {} } = props;
    const { locale } = React.useContext(I18NContext);

    const getTitleFieldPath = () => locale === 'pt' ? '.titlePt' : '.title';
    const getTextFieldPath = () => locale === 'pt' ? '.textPt' : '.text';

    return (
        <>
            {title && (
                <h2 className={classNames(styles.title ? mapStyles(styles.title) : null)} data-sb-field-path={getTitleFieldPath()}>
                    {title}
                </h2>
            )}
            {text && (
                <Markdown
                    options={{ forceBlock: true, forceWrapper: true }}
                    className={classNames('sb-markdown', styles.text ? mapStyles(styles.text) : null, { 'mt-4': title })}
                    data-sb-field-path={getTextFieldPath()}
                >
                    {text}
                </Markdown>
            )}
        </>
    );
}

function mapFlexDirectionStyles(flexDirection?: 'row' | 'row-reverse' | 'col' | 'col-reverse') {
    switch (flexDirection) {
        case 'row':
            return ['flex-col', 'lg:flex-row'];
        case 'row-reverse':
            return ['flex-col-reverse', 'lg:flex-row-reverse'];
        case 'col':
            return ['flex-col'];
        case 'col-reverse':
            return ['flex-col-reverse'];
        default:
            return null;
    }
}
