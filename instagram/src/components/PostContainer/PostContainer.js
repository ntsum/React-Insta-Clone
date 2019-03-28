import React from 'react';
import Post from './Post'
import PropTypes from 'prop-types'

class PostContainer extends React.Component {
    render() {
        return (
            <div className="post-section">
               {this.props.allPosts.map(postData =>
                <Post key={postData.id} post={postData}/>)}
            </div>
        )
    }
}

export default PostContainer;

PostContainer.propTypes={
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