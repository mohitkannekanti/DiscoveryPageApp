import React from 'react';
import Button from '../../atoms/button/index';
import Input from '../../atoms/input/index';
import './styles.css'
import SearchIcon from "../../Images/searchIcon.svg";
const SearchBar = () => {
    return (
        <div className="search-bar">
            {/* <span className="search-icon"><img src={SearchIcon} /></span> */}
            <Input type="text" placeholder="Search" />
            <Button name="Submit" value="Sign In" />
        </div>
    )
}

export default SearchBar
