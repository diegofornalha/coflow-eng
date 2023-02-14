import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import { Action, BackgroundImage } from '../../atoms';
import { DisplayModeContext } from '../../../context/displayMode';
import { getMatchingColor } from '../../../utils/themeColorMapper';
import { I18NContext } from '../../../context/i18Ncontext';

export default function FeatureHighlightSection(props) {
    const { backgroundSize = 'full', ...rest } = props;
    if (backgroundSize === 'inset') {
        return <FeatureHighlightSectionInset {...rest} />;
    } else {
        return <FeatureHighlightSectionFullWidth {...rest} />;
    }
}

function FeatureHighlightSectionInset(props) {
    const { elementId, colors = 'colors-d', backgroundImage, title, titlePt, subtitle, subtitlePt, text, textPt, actions, styles = {}, 'data-sb-field-path': fieldPath } = props;
    const { displayMode } = React.useContext(DisplayModeContext);
    const { locale } = React.useContext(I18NContext);
    const getTitle = () => locale === 'pt' && titlePt ? titlePt : title;
    const getSubtitle = () => locale === 'pt' && subtitlePt ? subtitlePt : subtitle;
    const getText = () => locale === 'pt' && textPt ? textPt : text;

    return (
        <div
            id={elementId || null}
            className={classNames(
                'sb-component',
                'sb-component-section',
                'sb-component-feature-highlight-section',
                'flex',
                'justify-center',
                styles.self?.margin
            )}
            data-sb-field-path={fieldPath}
        >
            <div
                className={classNames(
                    getMatchingColor(displayMode, colors),
                    'flex',
                    'flex-col',
                    'items-center',
                    'justify-center',
                    'relative',
                    'w-full',
                    mapStyles({ width: styles.self?.width ?? 'wide' }),
                    mapStyles({ height: styles.self?.height ?? 'auto' }),
                    styles.self?.padding ?? 'py-12 px-4',
                    styles.self?.borderColor,
                    styles.self?.borderStyle ? mapStyles({ borderStyle: styles.self?.borderStyle }) : null,
                    styles.self?.borderRadius ? mapStyles({ borderRadius: styles.self?.borderRadius }) : null,
                    styles.self?.boxShadow ? mapStyles({ boxShadow: styles.self?.boxShadow }) : null
                )}
                style={{
                    borderWidth: styles.self?.borderWidth ? `${styles.self?.borderWidth}px` : null
                }}
            >
                {backgroundImage && <BackgroundImage {...backgroundImage} />}
                <div className={classNames('relative', 'w-full', 'flex', mapStyles({ justifyContent: styles.self?.justifyContent ?? 'center' }))}>
                    <FeatureHighlightBody title={getTitle()} subtitle={getSubtitle()} text={getText()} actions={actions} styles={styles} />
                </div>
            </div>
        </div>
    );
}

function FeatureHighlightSectionFullWidth(props) {
    const { elementId, colors, backgroundImage, title, titlePt, subtitle, subtitlePt, text, textPt, actions, styles = {}, 'data-sb-field-path': fieldPath } = props;
    const { displayMode } = React.useContext(DisplayModeContext);
    const { locale } = React.useContext(I18NContext);
    const getTitle = () => locale === 'pt' && titlePt ? titlePt : title;
    const getSubtitle = () => locale === 'pt' && subtitlePt ? subtitlePt : subtitle;
    const getText = () => locale === 'pt' && textPt ? textPt : text;

    return (
        <div
            id={elementId || null}
            className={classNames(
                'sb-component',
                'sb-component-section',
                'sb-component-feature-highlight-section',
                getMatchingColor(displayMode, colors),
                'flex',
                'flex-col',
                'items-center',
                'justify-center',
                'relative',
                mapStyles({ height: styles.self?.height ?? 'auto' }),
                styles.self?.margin,
                styles.self?.padding ?? 'py-12 px-4',
                styles.self?.borderColor,
                styles.self?.borderStyle ? mapStyles({ borderStyle: styles.self?.borderStyle }) : null,
                styles.self?.borderRadius ? mapStyles({ borderRadius: styles.self?.borderRadius }) : null,
                styles.self?.boxShadow ? mapStyles({ boxShadow: styles.self?.boxShadow }) : null
            )}
            style={{
                borderWidth: styles.self?.borderWidth ? `${styles.self?.borderWidth}px` : null
            }}
            data-sb-field-path={fieldPath}
        >
            {backgroundImage && <BackgroundImage {...backgroundImage} />}
            <div
                className={classNames(
                    'relative',
                    'flex',
                    'w-full',
                    mapStyles({ width: styles.self?.width ?? 'wide' }),
                    mapStyles({ justifyContent: styles.self?.justifyContent ?? 'center' })
                )}
            >
                <FeatureHighlightBody title={getTitle()} subtitle={getSubtitle()} text={getText()} actions={actions} styles={styles} />
            </div>
        </div>
    );
}

function FeatureHighlightBody(props) {
    const { title, subtitle, text, actions, styles = {} } = props;
    const { locale } = React.useContext(I18NContext);
    const getTitleFieldPath = () => locale === 'pt' ? '.titlePt' : '.title';
    const getSubtitleFieldPath = () => locale === 'pt' ? '.subtitlePt' : '.subtitle';
    const getTextFieldPath = () => locale === 'pt' ? '.textPt' : '.text';

    return (
        <div className={classNames('sb-card', 'max-w-2xl', 'px-6', 'py-10', 'sm:px-12', 'sm:py-14')}>
            {title && (
                <h2 className={classNames(styles.title ? mapStyles(styles.title) : null)} data-sb-field-path={getTitleFieldPath()}>
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
                    className={classNames('sb-markdown', 'sm:text-lg', styles.text ? mapStyles(styles.text) : null, { 'mt-6': title || subtitle })}
                    data-sb-field-path={getTextFieldPath()}
                >
                    {text}
                </Markdown>
            )}
            <FeatureHighlightActions actions={actions} styles={styles.actions} hasTopMargin={!!(title || subtitle || text)} />
        </div>
    );
}

function FeatureHighlightActions(props) {
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
