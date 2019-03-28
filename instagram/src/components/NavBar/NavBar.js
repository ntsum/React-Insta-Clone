import React from 'react';
import SearchBar from './SearchBar';
import ProfileSection from './ProfileSection';
import styled from 'styled-components';


const Button = styled.button`
    padding: 6px 10px;
    margin: 5px;
    border: none;
    border-radius: 3px;
    color: white;

    ${props => (props.type === 'primary' ? `background: pink;` : null)}`

class NavBar extends React.Component {
    render(){
        return(
            <div className='navBar'>
                <i className="fab fa-instagram"></i> | Instagram
                <SearchBar searchInputText={this.props.searchInputText}
                 handleChange={this.props.handleChange}
                 handleSubmit={this.props.handleSubmit}/>
                <ProfileSection/>
                <Button type="primary" onClick={this.props.handleLogOut}>Log Out</Button>
            </div>
        )
    }
}

export default NavBar;