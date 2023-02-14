import * as React from 'react';
import classNames from 'classnames';
import Markdown from 'markdown-to-jsx';

import { mapStylesToClassNames as mapStyles } from '../../../../utils/map-styles-to-class-names';
import Action from '../../../atoms/Action';
import ImageBlock from '../../../molecules/ImageBlock';
import { useContext } from 'react';
import { I18NContext } from '../../../../context/i18Ncontext';
import { iconMap } from '../../../svgs';

export default function FeaturedItem(props) {
    const { elementId, title, titlePt, subtitle, subtitlePt, text, textPt, isIcon, featuredImage, featuredIcon, actions = [], enableHover, styles = {}, 'data-sb-field-path': fieldPath } = props;
    const { self = {} } = styles;
    const { borderWidth, ...otherSelfStyles } = self;
    const { locale } = useContext(I18NContext);
    const IconComponent = isIcon && featuredIcon ? iconMap[featuredIcon] : null;
    
    const getTitle = () => locale === 'pt' && titlePt ? titlePt : title;
    const getSubtitle = () => locale === 'pt' && subtitlePt ? subtitlePt : subtitle;
    const getText = () => locale === 'pt' && textPt ? textPt : text;

    return (
        <article
            id={elementId || null}
            className={classNames(
                'sb-component',
                'sb-component-block',
                'sb-component-item',
                enableHover ? 'sb-component-item-hover' : null,
                mapStyles(otherSelfStyles)
            )}
            style={{
                borderWidth: borderWidth ? `${borderWidth}px` : null
            }}
            data-sb-field-path={fieldPath}
        >
            {IconComponent && (
                <div className="mb-6 text-center" data-sb-field-path=".featuredIcon#svg[1]">
                    <IconComponent
                        className={classNames(
                            'fill-current h-20 w-20',
                            'sb-component',
                            'sb-component-block',
                            'sb-component-image-block',
                            'inline-block',
                        )}
                    />
                </div>
            )}

            {featuredImage && !isIcon && (
                <div className="mb-6">
                    <ImageBlock {...featuredImage} className="inline-block" data-sb-field-path=".featuredImage" />
                </div>
            )}
            {title && (
                <h3 className={classNames(styles.title ? mapStyles(styles.title) : null, { 'text-center' : isIcon })} data-sb-field-path={locale === 'pt' ? ".titlePt" : ".title"}>
                    {getTitle()}
                </h3>
            )}
            {subtitle && (
                <p className={classNames('text-lg', styles.subtitle ? mapStyles(styles.subtitle) : null, { 'mt-1': title })} data-sb-field-path={locale === 'pt' ? ".subtitlePt" : ".subtitle"}>
                    {getSubtitle()}
                </p>
            )}
            {text && (
                <Markdown
                    options={{ forceBlock: true, forceWrapper: true }}
                    className={classNames('sb-markdown', {
                        'mt-4': title || subtitle
                    })}
                    data-sb-field-path={locale === 'pt' ? ".textPt" : ".text"}
                >
                    {getText()}
                </Markdown>
            )}
            <ItemActions actions={actions} textAlign={otherSelfStyles.textAlign} hasTopMargin={!!(title || subtitle || text)} />
        </article>
    );
}

function ItemActions(props) {
    const { actions = [], textAlign, hasTopMargin } = props;
    if (actions.length === 0) {
        return null;
    }
    return (
        <div
            className={classNames('overflow-x-hidden', {
                'mt-6': hasTopMargin
            })}
        >
            <div
                className={classNames('flex', 'flex-wrap', 'items-center', '-mx-2', {
                    'justify-center': textAlign === 'center',
                    'justify-end': textAlign === 'right'
                })}
                data-sb-field-path=".actions"
            >
                {actions.map((action, index) => (
                    <Action key={index} {...action} className="mb-3 mx-2 lg:whitespace-nowrap" data-sb-field-path={`.${index}`} />
                ))}
            </div>
        </div>
    );
}
