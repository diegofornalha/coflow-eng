import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';

import { getComponent } from '../../components-registry';
import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import Section from '../Section';
import { Action } from '../../atoms';
import { I18NContext } from '../../../context/i18Ncontext';

export default function HeroSection(props) {
    const {
        type,
        elementId,
        colors,
        backgroundSize,
        backgroundImage,
        title,
        titlePt,
        subtitle,
        subtitlePt,
        text,
        textPt,
        media,
        actions = [],
        styles = {},
        'data-sb-field-path': fieldPath
    } = props;
    const sectionFlexDirection = styles.self?.flexDirection ?? 'row';
    const sectionAlignItems = styles.self?.alignItems ?? 'center';
    const { locale } = React.useContext(I18NContext);

    const getTitle = () => locale === 'pt' && titlePt ? titlePt : title;
    const getSubtitle = () => locale === 'pt' && subtitlePt ? subtitlePt : subtitle;
    const getText = () => locale === 'pt' && textPt ? textPt : text;

    return (
        <Section
            type={type}
            elementId={elementId}
            colors={colors}
            backgroundSize={backgroundSize}
            backgroundImage={backgroundImage}
            styles={styles.self}
            data-sb-field-path={fieldPath}
        >
            <div
                className={classNames('flex', mapFlexDirectionStyles(sectionFlexDirection), mapStyles({ alignItems: sectionAlignItems }), 'space-y-8', {
                    'lg:space-y-0 lg:space-x-8': sectionFlexDirection === 'row',
                    'space-y-reverse lg:space-y-0 lg:space-x-8 lg:space-x-reverse': sectionFlexDirection === 'row-reverse',
                    'space-y-reverse': sectionFlexDirection === 'col-reverse'
                })}
            >
                <div className="flex-1 w-full">
                    <HeroBody title={getTitle()} subtitle={getSubtitle()} text={getText()} styles={styles} />
                    <HeroActions actions={actions} styles={styles.actions} hasTopMargin={!!(title || subtitle || text)} />
                </div>
                {media && (
                    <div className="flex-1 w-full">
                        <HeroMedia media={media} />
                    </div>
                )}
            </div>
        </Section>
    );
}

function HeroMedia({ media }) {
    const mediaType = media.type;
    if (!mediaType) {
        throw new Error(`hero section media does not have the 'type' property`);
    }
    const Media = getComponent(mediaType);
    if (!Media) {
        throw new Error(`no component matching the hero section media type: ${mediaType}`);
    }
    return <Media {...media} data-sb-field-path=".media" />;
}

function HeroBody(props) {
    const { title, subtitle, text, styles = {} } = props;
    const { locale } = React.useContext(I18NContext);
    const getTitleFieldPath = () => locale === 'pt' ? '.titlePt' : '.title';
    const getSubtitleFieldPath = () => locale === 'pt' ? '.subtitlePt' : '.subtitle';
    const getTextFieldPath = () => locale === 'pt' ? '.textPt' : '.text';

    return (
        <>
            {title && (
                <h2 className={classNames('h1', styles.title ? mapStyles(styles.title) : null)} data-sb-field-path={getTitleFieldPath()}>
                    {title}
                </h2>
            )}
            {subtitle && (
                <p
                    className={classNames('text-xl', 'sm:text-2xl', styles.subtitle ? mapStyles(styles.subtitle) : null, { 'mt-4': title })}
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
        </>
    );
}

function HeroActions(props) {
    const { actions = [], styles = {}, hasTopMargin } = props;
    if (actions.length === 0) {
        return null;
    }
    return (
        <div
            className={classNames('overflow-x-hidden', {
                'mt-8': hasTopMargin
            })}
        >
            <div className={classNames('flex', 'flex-wrap', 'items-center', '-mx-2', mapStyles(styles))} data-sb-field-path=".actions">
                {actions.map((action, index) => (
                    <Action key={index} {...action} className="mb-3 mx-2 lg:whitespace-nowrap" data-sb-field-path={`.${index}`} />
                ))}
            </div>
        </div>
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
