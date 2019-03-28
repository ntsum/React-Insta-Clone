import React from 'react';


const withAuthenticate = PostPage => Login =>{
    return class extends React.Component{
constructor(props) {
super(props);
this.state={
    isLoggedIn: false,
}
}
handleLogin=()=>{
    this.setState({
        isLoggedIn:true
    })
}
handleLogOut=()=>{
    this.setState({
        isLoggedIn:false
    })
}


        render(){
            if (this.state.isLoggedIn === false) {
            return <Login handleLogin={this.handleLogin}/>;
            } else {
                return <PostPage searchInputText={this.props.searchInputText}
               handleChange={this.props.handleChange}
               handleSubmit={this.props.handleSubmit}
               allPosts={this.props.allPosts}
               handleLogOut={this.handleLogOut}/>;
                
            }
            
        }
    }
}

    export default withAuthenticate;
