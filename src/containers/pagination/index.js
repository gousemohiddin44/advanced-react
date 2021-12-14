import React, { useEffect, useState} from 'react';
import axios from 'axios';

import PaginationCard from '../../components/pagination';
import PaginationComp from '../../components/pagination/pagination';

const PageElement = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    useEffect(()=>{
       const fetchPosts = async () => {
           const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
           setLoading(false);
           setPosts(res.data);
       };

       fetchPosts();
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    
    const paginate = pageNumber => {
        return setCurrentPage(pageNumber);
    };

    return (
        <div>
            <h1>Pagination Example</h1>
            {!loading && <PaginationCard posts={currentPosts} />}
            <PaginationComp postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
        </div>
    )
}

export default PageElement;
