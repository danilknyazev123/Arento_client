import React, {Suspense} from 'react';
import {Container, Image} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import { lazy } from 'react';
import Loading from "../components/helpers/Loading";

const PhotoGallerySmall = lazy(() => import('../components/PhotoGallerySmall'));

const PhotoGallery = observer(() => {
    const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
        22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52]

    return (
        <Container className="pb-5">
            <div className="sunny_Kisl">
                <h1>
                    Солнечный Кисловодск
                </h1>
            </div>
            <div className="photogallery_photo_main">
                <div className="photogallery_photo">
                    {images.slice(0, 6).map(index =>
                        <Suspense key={index} fallback={<Loading/>}>
                            <PhotoGallerySmall
                                alt={`Фото Кисловодска №${index}`}
                                src={process.env.REACT_APP_API_URL + `photoGallery/photo${index}.jpg`}
                            />
                        </Suspense>
                    )}
                    <div className="photogallery_photo_submain">
                        <div className="photogallery_photo_el_large">
                            <Image
                                alt="Фото Кисловодска №7"
                                src={process.env.REACT_APP_API_URL + 'photoGallery/photo7.jpg'}
                            />
                        </div>
                        <div className="right">
                            {images.slice(7, 9).map(index =>
                                <Suspense key={index} fallback={<Loading/>}>
                                    <PhotoGallerySmall
                                        alt={`Фото Кисловодска №${index}`}
                                        src={process.env.REACT_APP_API_URL + `photoGallery/photo${index}.jpg`}
                                    />
                                </Suspense>
                            )}
                        </div>
                    </div>
                    <div className="photogallery_photo_submain">
                        <div className="right">
                            {images.slice(9, 11).map(index =>
                                <Suspense key={index} fallback={<Loading/>}>
                                    <PhotoGallerySmall
                                        alt={`Фото Кисловодска №${index}`}
                                        src={process.env.REACT_APP_API_URL + `photoGallery/photo${index}.jpg`}
                                    />
                                </Suspense>
                            )}
                        </div>
                        <div className="photogallery_photo_el_large">
                            <Image
                                alt="Фото Кисловодска №12"
                                src={process.env.REACT_APP_API_URL + 'photoGallery/photo12.jpg'}
                            />
                        </div>
                    </div>
                    {images.slice(12, 18).map(index =>
                        <Suspense key={index} fallback={<Loading/>}>
                            <PhotoGallerySmall
                                alt={`Фото Кисловодска №${index}`}
                                src={process.env.REACT_APP_API_URL + `photoGallery/photo${index}.jpg`}
                            />
                        </Suspense>
                    )}
                    <div className="photogallery_photo_submain">
                        <div className="photogallery_photo_el_large">
                            <Image
                                alt="Фото Кисловодска №19"
                                src={process.env.REACT_APP_API_URL + 'photoGallery/photo19.jpg'}
                            />
                        </div>
                        <div className="right">
                            {images.slice(19, 21).map(index =>
                                <Suspense key={index} fallback={<Loading/>}>
                                    <PhotoGallerySmall
                                        alt={`Фото Кисловодска №${index}`}
                                        src={process.env.REACT_APP_API_URL + `photoGallery/photo${index}.jpg`}
                                    />
                                </Suspense>
                            )}
                        </div>
                    </div>
                    {images.slice(21, 27).map(index =>
                        <Suspense key={index} fallback={<Loading/>}>
                            <PhotoGallerySmall
                                alt={`Фото Кисловодска №${index}`}
                                src={process.env.REACT_APP_API_URL + `photoGallery/photo${index}.jpg`}
                            />
                        </Suspense>
                    )}
                    <div className="photogallery_photo_submain">
                        <div className="right">
                            {images.slice(27, 29).map(index =>
                                <Suspense key={index} fallback={<Loading/>}>
                                    <PhotoGallerySmall
                                        alt={`Фото Кисловодска №${index}`}
                                        src={process.env.REACT_APP_API_URL + `photoGallery/photo${index}.jpg`}
                                    />
                                </Suspense>
                            )}
                        </div>
                        <div className="photogallery_photo_el_large">
                            <Image
                                alt="Фото Кисловодска №30"
                                src={process.env.REACT_APP_API_URL + 'photoGallery/photo30.jpg'}
                            />
                        </div>
                    </div>
                    {images.slice(30, 36).map(index =>
                        <Suspense key={index} fallback={<Loading/>}>
                            <PhotoGallerySmall
                                alt={`Фото Кисловодска №${index}`}
                                src={process.env.REACT_APP_API_URL + `photoGallery/photo${index}.jpg`}
                            />
                        </Suspense>
                    )}
                    <div className="photogallery_photo_submain">
                        <div className="photogallery_photo_el_large">
                            <Image
                                alt="Фото Кисловодска №37"
                                src={process.env.REACT_APP_API_URL + 'photoGallery/photo36.jpg'}
                            />
                        </div>
                        <div className="right">
                            {images.slice(37, 39).map(index =>
                                <Suspense key={index} fallback={<Loading/>}>
                                    <PhotoGallerySmall
                                        alt={`Фото Кисловодска №${index}`}
                                        src={process.env.REACT_APP_API_URL + `photoGallery/photo${index}.jpg`}
                                    />
                                </Suspense>
                            )}
                        </div>
                    </div>
                    {images.slice(39, 45).map(index =>
                        <Suspense key={index} fallback={<Loading/>}>
                            <PhotoGallerySmall
                                alt={`Фото Кисловодска №${index}`}
                                src={process.env.REACT_APP_API_URL + `photoGallery/photo${index}.jpg`}
                            />
                        </Suspense>
                    )}
                </div>
            </div>
        </Container>
    );
});

export default PhotoGallery;