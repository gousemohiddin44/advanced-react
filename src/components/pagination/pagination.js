import React from 'react'

const PaginationComp = ({postsPerPage, totalPosts, paginate}) => {
    
    const pageNumbers = [];

    for(let i=1 ;i <= Math.abs(totalPosts/postsPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <ul className='pagination' style={{marginLeft:'35%'}}>
            {pageNumbers?.map(pageNumber => {
                return <li key={pageNumber} className='page-item'>
                    <a onClick={()=> paginate(pageNumber)} className='page-link'>{pageNumber}</a>
                </li>
            })}
        </ul>
    )
}

export default PaginationComp;
