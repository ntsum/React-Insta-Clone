import React from 'react';

class SearchBar extends React.Component {
   


    render() {
        return (
            <div>
              <form onSubmit={this.props.handleSubmit}> 
                <input 
            type="text"
            placeholder="Search.." 
            onChange={this.props.handleChange} 
            value={this.props.searchInputText}/>
            </form>
            </div>
        )
    }
}

export default SearchBar;