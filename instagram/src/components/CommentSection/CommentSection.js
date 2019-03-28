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
        likes: this.state.likes+1,
        liked: true
    });
} else {
    this.setState({
    likes: this.state.likes-1,
    liked: true
});
}
};
    render() {
        return (
            <div className="comment-section">{
                this.state.commentsData.map((comment,i)=>
                    <Comment key={i}commentData={comment}/>
                    
             )
            }   
            <form action="" onSubmit={this.handleSubmit}>
            <input type=
            "text" onChange={this.handleChange} value={this.state.inputText}/>
            </form>
            <div onClick={this.handleLikes}>HEART{this.state.likes}</div>
            </div>
        )
    }
}

export default CommentSection;

