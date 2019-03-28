import React from 'react';
import styled from 'styled-components';


const Button = styled.button`
    padding: 6px 10px;
    margin: 5px;
    border: none;
    border-radius: 3px;
    color: white;

    ${props => (props.type === 'primary' ? `background: pink;` : null)}`


const Login = props => {
    return(
        <div className="login">
            <h1>WELCOME TO INSTACLONE!</h1>
            <input 
            type="text"
            placeholder="Login in"/>
            <input 
            type="text"
            placeholder="Password"/>
            <Button type="primary" onClick={props.handleLogin}>Login</Button>

            </div>
    )
}

export default Login;