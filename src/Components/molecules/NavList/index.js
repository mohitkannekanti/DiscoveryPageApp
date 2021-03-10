import React, { useState } from 'react';
import Link from './index'

const NavList = ({ content }) => {

    return (
        <div className="nav-links">
            {content && content.map((navLinks, index) => {
                return (

                    <Link url="/" text={navLinks} />
                )

            })}

        </div>
    )
}
export default NavList
