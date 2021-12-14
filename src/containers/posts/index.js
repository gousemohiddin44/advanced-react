import React, { useEffect } from 'react';

import Card from '../../components/card';
import useApi from '../../hooks/useApi';
import postsApi from './postsApi';


const Posts = () => {
    
    const getPostsApi = useApi(postsApi.getPosts);

    useEffect(()=>{
        getPostsApi.request();
    },[getPostsApi]);

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {getPostsApi?.data?.map(post => {
                    return <Card key={post.id} post={post} />
                })}
            </ul>
        </div>
    )
}

export default Posts
