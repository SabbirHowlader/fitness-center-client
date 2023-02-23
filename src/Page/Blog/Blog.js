import React from 'react';
import useTitle from '../../Hooks/UseTitle/UseTitle';
import Card from '../Home/Card/Card';

const Blog = () => {
    useTitle('Blog')
    return (
        <div>
            <Card></Card>
        </div>
    );
};

export default Blog;