import React from 'react';
import SearchBar from './SearchBar';
import ProfileSection from './ProfileSection';


class NavBar extends React.Component {
    render(){
        return(
            <div className='navBar'>
                <i className="fab fa-instagram"></i> | Instagram
                <SearchBar searchInputText={this.props.searchInputText}
                 handleChange={this.props.handleChange}
                 handleSubmit={this.props.handleSubmit}/>
                <ProfileSection/>
                <button onClick={this.props.handleLogOut}>Log Out</button>
            </div>
        )
    }
}

export default NavBar;