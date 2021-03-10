import React from 'react'
import SearchBar from '../../molecules/Search';
import Images from '../../atoms/images/index';
import './styles.css';
import NavList from '../../molecules/NavList';






const Header = () => {

    const headerList = {
        navItemsList: ["Home", "Pages", "Discover", "Premium"]
    }
    console.log(headerList, "heqader")

    return (
        <div className="header">
            <Images />
            <NavList content={headerList.navItemsList} />
            <SearchBar />

        </div>
    )
}
export default Header
