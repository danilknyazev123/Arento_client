import React from 'react';
import {Image} from "react-bootstrap";

const PhotoGallerySmall = ({src, alt}) => {
    return (
        <>
            <div className="photogallery_photo_el">
                <Image
                    alt={alt}
                    src={src}
                />
            </div>
        </>
    );
};

export default PhotoGallerySmall;