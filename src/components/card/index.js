import React from 'react';
import "./style.css";

const Card = ({post}) => {
    return (
        <div className="card">
            <h2>{post.title}</h2>
            <h4>{post.body}</h4>
        </div>
    )
}

export default Card;
