import React from 'react';

const UserPost = (props) => {
    return(
        <div className="userPost">
            <h3>User ID: {props.post.userId}</h3>
            <h4>Title: {props.post.title}</h4>
            <p>{props.post.body}</p>
        </div>
    )
}

export default UserPost;