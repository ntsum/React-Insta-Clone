import React from 'react';
import Comment from './Comment'

class CommentSection extends React.Component {
    constructor(props){
    super(props);
    this.state = {
        commentsData:props.commentsData,
        inputText:'',
        likes: props.likes,
        liked: false

    }
}
    handleChange = event => {
        this.setState({inputText:event.target.value});
    };

    handleSubmit = event => {
        event.preventDefault();
//first make a copy of the state
const stateCopy=this.state.commentsData.slice()
//second create the new comment
const newComment= {
    username:'iluvdoggos', 
    text:this.state.inputText
}
stateCopy.push(newComment)
//third update the state withj setState
this.setState({
    commentsData:stateCopy
})


    }
handleLikes =()=> {
    if(this.state.liked === true){
    this.setState({
        likes: this.state.likes-1,
        liked: false
    });
} else {
    this.setState({
    likes: this.state.likes+1,
    liked: true
});
}
};
    render() {
        return (
            <div className="comment-section">
            <i onClick={this.handleLikes}className="far fa-heart"></i>
            <i className="far fa-comment"></i>
            <div><strong>{this.state.likes}</strong></div>
            {
                this.state.commentsData.map((comment,i)=>
                    <Comment key={i}commentData={comment}/>
                    
             )
            }   
            <form action="" onSubmit={this.handleSubmit}>
            <input className="bar"
            type="text"
            onChange={this.handleChange}
            value={this.state.inputText}
            placeholder="Add a Comment.."/>
            </form>
            </div>
        )
    }
}

export default CommentSection;

