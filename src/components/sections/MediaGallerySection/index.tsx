import * as React from 'react';
import classNames from 'classnames';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import Section from '../Section';
import ImageBlock from '../../molecules/ImageBlock';
import { I18NContext } from '../../../context/i18Ncontext';

type MediaGallerySectionProps = {
    type: string;
    elementId: string;
    colors?: 'colors-a' | 'colors-b' | 'colors-c' | 'colors-d' | 'colors-e';
    title?: string;
    titlePt?: string;
    subtitle?: string;
    subtitlePt?: string;
    images?: Image[];
    spacing?: number;
    columns?: number;
    aspectRatio?: string;
    showCaption: boolean;
    enableHover: boolean;
    styles?: any;
    'data-sb-field-path'?: string;
};

type MediaGalleryItemProps = {
    image: Image;
    showCaption: boolean;
    enableHover: boolean;
    aspectRatio: string;
    'data-sb-field-path': string;
};

type Image = {
    url: string;
    altText: string;
    caption: string;
    width?: number;
    height?: number;
};

export default function MediaGallerySection(props: MediaGallerySectionProps) {
    const {
        type,
        elementId,
        colors,
        title,
        titlePt,
        subtitle,
        subtitlePt,
        images = [],
        columns = 4,
        spacing = 16,
        aspectRatio = '1:1',
        showCaption,
        enableHover,
        styles = {},
        'data-sb-field-path': fieldPath
    } = props;
    
    const { locale } = React.useContext(I18NContext);
    const getTitle = () => locale === 'pt' && titlePt ? titlePt : title;
    const getSubtitle = () => locale === 'pt' && subtitlePt ? subtitlePt : subtitle;

    return (
        <Section type={type} elementId={elementId} colors={colors} styles={styles.self} data-sb-field-path={fieldPath}>
            {title && (
                <h2 className={classNames(styles.title ? mapStyles(styles.title) : null)} data-sb-field-path={`.${locale === 'pt' ? 'titlePt' : 'title'}`}>
                    {getTitle()}
                </h2>
            )}
            {subtitle && (
                <p
                    className={classNames('text-lg', 'sm:text-xl', styles.subtitle ? mapStyles(styles.subtitle) : null, {
                        'mt-6': title
                    })}
                    data-sb-field-path={`.${locale === 'pt' ? 'subtitlePt' : 'subtitle'}`}
                >
                    {getSubtitle()}
                </p>
            )}
            {images.length > 0 && (
                <div
                    className={classNames('grid', 'place-items-center', mapColStyles(columns), {
                        'mt-12': title || subtitle
                    })}
                    data-sb-field-path=".images"
                    style={{
                        gap: spacing ? `${spacing}px` : undefined
                    }}
                >
                    {images.map((image, index) => (
                        <MediaGalleryImage
                            key={index}
                            image={image}
                            showCaption={showCaption}
                            enableHover={enableHover}
                            aspectRatio={aspectRatio}
                            data-sb-field-path={`.${index}`}
                        />
                    ))}
                </div>
            )}
        </Section>
    );
}

function MediaGalleryImage(props: MediaGalleryItemProps) {
    const { image, showCaption, enableHover, aspectRatio, 'data-sb-field-path': fieldPath } = props;
    if (!image) {
        return null;
    }
    return (
        <figure
            className={classNames('overflow-hidden', 'relative', 'w-full', mapAspectRatioStyles(aspectRatio), {
                'h-0': aspectRatio !== 'auto'
            })}
            data-sb-field-path={fieldPath}
        >
            <ImageBlock
                {...image}
                className={classNames('w-full', {
                    'h-full absolute left-0 top-0 object-cover': aspectRatio !== 'auto',
                    'transition-transform hover:scale-105': enableHover,
                })}
            />
            {showCaption && image.caption && (
                <figcaption className="absolute bg-white bg-opacity-70 left-0 mx-2 bottom-2 p-1.5 text-xs pointer-events-none">{image.caption}</figcaption>
            )}
        </figure>
    );
}

function mapAspectRatioStyles(aspectRatio) {
    switch (aspectRatio) {
        case '1:1':
            return 'pt-1/1';
        case '2:3':
            return 'pt-3/2';
        case '3:2':
            return 'pt-2/3';
        case '3:4':
            return 'pt-4/3';
        case '4:3':
            return 'pt-3/4';
        case '16:9':
            return 'pt-9/16';
        default:
            return null;
    }
}

function mapColStyles(columns) {
    switch (columns) {
        case 2:
            return 'grid-cols-2';
        case 3:
            return 'grid-cols-2 sm:grid-cols-3';
        case 4:
            return 'grid-cols-2 sm:grid-cols-4';
        case 5:
            return 'grid-cols-2 sm:grid-cols-3 md:grid-cols-5';
        case 6:
            return 'grid-cols-2 sm:grid-cols-4 md:grid-cols-6';
        case 7:
            return 'grid-cols-2 sm:grid-cols-4 md:grid-cols-7';
        default:
            return null;
    }
}
