import React from 'react';

class Comment extends React.Component {
    render() {
        return (
            <div>
              {this.props.commentData.username} {" "}
              {this.props.commentData.text}
            </div>
        )
    }
}

export default Comment;