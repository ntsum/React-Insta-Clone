import React from 'react';

class Comment extends React.Component {
    render() {
        return (
            <div>
              <span className="user"><strong>{this.props.commentData.username} {" "}</strong></span>
              <span className="comments">{this.props.commentData.text}</span>
            </div>
        )
    }
}

export default Comment;