import React from 'react';
import NavBar from '../NavBar/NavBar';
import PostContainer from '../PostContainer/PostContainer';




class PostsPage extends React.Component {
    render() {
        return(
            <div>
            <NavBar searchInputText={this.props.searchInputText}
            handleChange={this.props.handleChange}
            handleSubmit={this.props.handleSubmit}
            handleLogOut={this.props.handleLogOut}/>
            <PostContainer allPosts={this.props.allPosts}/>
            </div>
        )
    }
}

export default PostsPage;