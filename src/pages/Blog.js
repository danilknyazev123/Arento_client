import React, {useContext, useEffect} from 'react';
import {fetchBlog} from "../http/addApi";
import {Context} from "../index";
import BlogList from "../components/BlogList";
import {Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";

const Blog = observer(() => {
    const {add} = useContext(Context)

    useEffect(() => {
        fetchBlog(1, 20).then(data => {
            add.setBlogs(data.rows)
            add.setTotalCount(data.count)
        })
    }, [add]);

    return (
        <Container>
            <h1>
                Блог
            </h1>
            <BlogList/>
        </Container>
    );
});

export default Blog;