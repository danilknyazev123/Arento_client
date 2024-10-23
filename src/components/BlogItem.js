import React from 'react';
import {Container} from "react-bootstrap";
const BlogItem = ({blog}) => {

    return (
        <Container>
            <div className="d-flex flex-column m-auto">
                <div className="m-2">
                    <div className="h2">
                        {blog.title}
                    </div>
                    <img
                        className="w-100 h-100"
                        src={process.env.REACT_APP_API_URL + 'blog/' + blog.photo}
                        alt="Фото для блога"
                    />
                    <div className="place-description-main">
                        {blog.description}
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default BlogItem;