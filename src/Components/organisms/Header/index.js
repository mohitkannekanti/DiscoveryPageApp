import React from 'react'
import SearchBar from '../../molecules/Search';
import './styles.css';
import NavList from '../../molecules/NavList';
import Logo from '../../molecules/Logo';


const Header = () => {

    const headerList = {
        navItemsList: ["Home", "Explore", "Shorts", "Mindblown", "Premium"],
        imgData: {
            location: ["hamburgerIcon.svg", "logo.png"],
            alt: ["menuImg", "logoImg"]
        }
    }
    console.log(headerList, "header")

    return (
        <div className="header">
            <Logo content={headerList.imgData} />
            <NavList content={headerList.navItemsList} />
            <SearchBar />

        </div>
    )
}
export default Header
