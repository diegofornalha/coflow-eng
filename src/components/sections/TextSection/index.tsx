import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import Section from '../Section';
import { I18NContext } from '../../../context/i18Ncontext';

export default function TextSection(props) {
    const { type, elementId, colors, variant, title, titlePt, subtitle, subtitlePt, text, textPt, styles = {}, 'data-sb-field-path': fieldPath } = props;
    const { locale } = React.useContext(I18NContext);
    const getTitle = () => locale === 'pt' && titlePt ? titlePt : title;
    const getSubtitle = () => locale === 'pt' && subtitlePt ? subtitlePt : subtitle;
    const getText = () => locale === 'pt' && textPt ? textPt : text;

    return (
        <Section type={type} elementId={elementId} colors={colors} styles={styles.self} data-sb-field-path={fieldPath}>
            <TextBodyVariants variant={variant} title={getTitle()} subtitle={getSubtitle()} text={getText()} styles={styles} />
        </Section>
    );
}

function TextBodyVariants(props) {
    const { variant = 'variant-a', ...rest } = props;
    switch (variant) {
        case 'variant-a':
            return <TextBodyVariantA {...rest} />;
        case 'variant-b':
            return <TextBodyVariantB {...rest} />;
        default:
            return null;
    }
}

function TextBodyVariantA(props) {
    const { title, subtitle, text, styles = {} } = props;
    const { locale } = React.useContext(I18NContext);
    const getTitleFieldPath = () => locale === 'pt' ? '.titlePt' : '.title';
    const getSubtitleFieldPath = () => locale === 'pt' ? '.subtitlePt' : '.subtitle';
    const getTextFieldPath = () => locale === 'pt' ? '.textPt' : '.text';

    return (
        <div>
            {title && (
                <h2 className={classNames(styles.title ? mapStyles(styles.title) : null)} data-sb-field-path={getTitleFieldPath()}>
                    {title}
                </h2>
            )}
            {subtitle && (
                <p
                    className={classNames('text-xl', 'sm:text-2xl', styles.subtitle ? mapStyles(styles.subtitle) : null, { 'mt-2': title })}
                    data-sb-field-path={getSubtitleFieldPath()}
                >
                    {subtitle}
                </p>
            )}
            {text && (
                <Markdown
                    options={{ forceBlock: true, forceWrapper: true }}
                    className={classNames('sb-markdown', 'sm:text-lg', styles.text ? mapStyles(styles.text) : null, {
                        'mt-6': title || subtitle
                    })}
                    data-sb-field-path={getTextFieldPath()}
                >
                    {text}
                </Markdown>
            )}
        </div>
    );
}

function TextBodyVariantB(props) {
    const { title, subtitle, text, styles = {} } = props;
    const { locale } = React.useContext(I18NContext);
    const getTitleFieldPath = () => locale === 'pt' ? '.titlePt' : '.title';
    const getSubtitleFieldPath = () => locale === 'pt' ? '.subtitlePt' : '.subtitle';
    const getTextFieldPath = () => locale === 'pt' ? '.textPt' : '.text';

    return (
        <div className="flex flex-wrap">
            {(title || subtitle) && (
                <div className={classNames('w-full', { 'lg:w-1/3 lg:pr-3': text })}>
                    {title && (
                        <h2 className={classNames(styles.title ? mapStyles(styles.title) : null)} data-sb-field-path={getTitleFieldPath()}>
                            {title}
                        </h2>
                    )}
                    {subtitle && (
                        <p
                            className={classNames('text-xl', 'sm:text-2xl', styles.subtitle ? mapStyles(styles.subtitle) : null, {
                                'mt-2': title
                            })}
                            data-sb-field-path={getSubtitleFieldPath()}
                        >
                            {subtitle}
                        </p>
                    )}
                </div>
            )}
            {text && (
                <div className={classNames('w-full', { 'mt-12 lg:mt-0 lg:w-2/3 lg:pl-3': title || subtitle })}>
                    <Markdown
                        options={{ forceBlock: true, forceWrapper: true }}
                        className={classNames('sb-markdown', 'sm:text-lg', styles.text ? mapStyles(styles.text) : null)}
                        data-sb-field-path={getTextFieldPath()}
                    >
                        {text}
                    </Markdown>
                </div>
            )}
        </div>
    );
}
