import React, {lazy, Suspense, useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import Loading from "./helpers/Loading";

const BlogItem = lazy(() => import('./BlogItem'))

const BlogList = observer(() => {
    const {add} = useContext(Context)

    return (
        <Row className="d-flex">
            {add.blogs.map(blog =>
                <Suspense fallback={<Loading />}>
                    <BlogItem key={blog.id} blog={blog}/>
                </Suspense>
            )}
        </Row>
    );
});

export default BlogList;