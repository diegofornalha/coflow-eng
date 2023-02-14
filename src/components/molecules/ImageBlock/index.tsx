import * as React from 'react';
import classNames from 'classnames';
import Image from 'next/image';

export default function ImageBlock(props) {
    const { elementId, width, height, className, url, altText = '', 'data-sb-field-path': fieldPath } = props;
    if (!url) {
        return null;
    }
    const annotations = fieldPath
        ? { 'data-sb-field-path': [fieldPath, `${fieldPath}.url#@src`, `${fieldPath}.altText#@alt`, `${fieldPath}.elementId#@id`].join(' ').trim() }
        : {};

    const loader = ({ src }) => {
        return `${src}`;
    }

    const getImage = () => (
        <div className={classNames('sb-component', 'sb-component-block', 'sb-component-image-block', className)}>
            <Image
                id={elementId}
                src={url}
                alt={altText}
                width={width || 500}
                height={height || 500}
                loader={loader}
                unoptimized={true}
                {...annotations}
            />
        </div>
    );


    return (
        getImage()
    );
}
