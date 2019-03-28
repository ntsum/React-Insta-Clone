import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types'

function Post(props) {
    return (
        <div>
        <p>{props.post.username}</p>
        <img src={props.post.imageUrl} alt="img"/>
        <CommentSection commentsData={props.post.comments} likes={props.post.likes}/>
        </div>
    )
}

export default Post;

Post.propTypes={
    allPosts:PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        username:PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp:PropTypes.string,
        comments: PropTypes.arrayOf(PropTypes.shape({
          username:PropTypes.string,
          test:PropTypes.string,
        }),),
    }))
}