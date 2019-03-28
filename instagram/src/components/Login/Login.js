import React from 'react';

const Login = props => {
    return(
        <div>
            <input type="text"/>
            <button onClick={props.handleLogin}>Click to log in</button>

            </div>
    )
}

export default Login;