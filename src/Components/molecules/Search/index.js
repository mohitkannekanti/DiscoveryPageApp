import React from 'react';
import Button from '../../atoms/button/index';
import Input from '../../atoms/input/index';

const SearchBar = () => {
    return (
        <div className="search-bar">
            <Button name="Submit" value="Submit" />
            <Input type="text" placeholder="Search" />
        </div>
    )
}

export default SearchBar
