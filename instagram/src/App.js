import React from 'react';
import withAuthenticate from './components/Authenticate/withAuthenticate';
import dummyData from './dummy-data';
import PostPage from './components/PostContainer/PostsPage';
import Login from './components/Login/Login';
import '../src/App.css';



class App extends React.Component {
    constructor(){
    super();
this.state = {
    data: [],
    searchInputText:'',
    filtered: []
}
    }

  handleSubmit= event => {
      event.preventDefault();
    const filteredData = this.state.data.filter(post =>
        post.username.includes(this.state.searchInputText))
this.setState({
    filtered: filteredData
})
  }
    handleChange=(event)=> {
        this.setState({
            searchInputText: event.target.value
        })
    } 
//runs only once 
componentDidMount = () => {
      this.setState({
          data:dummyData
      })
    }
    
    render() {
        
        
        return (
            <div>

           <AuthenticatedPostPage searchInputText={this.state.searchInputText}
               handleChange={this.handleChange}
               handleSubmit={this.handleSubmit}
               allPosts={this.state.searchInputText===''? 
               this.state.data : this.state.filtered}
               
               />
            
            </div>
        )
     }
}

const AuthenticatedPostPage= withAuthenticate(PostPage)(Login);


export default App;
