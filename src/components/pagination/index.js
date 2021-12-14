import React from 'react';

const paginationCard = ({posts}) => {
    return (
        <div>
            <ul className='list-group mb-4'>
                {posts?.map(post => <li key={post.id} className='list-group-item'>{post.title}</li>)}
            </ul>
        </div>
    )
}

export default paginationCard;
