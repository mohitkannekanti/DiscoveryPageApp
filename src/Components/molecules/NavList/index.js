import React, { useState } from 'react';
import Link from '../../atoms/Link/index'

const NavList = ({ content }) => {
    console.log({ content }, "navlist")

    return (
        <div className="nav-links">
            {content && content.map((navLinks, index) => {
                return (
                    <Link url={navLinks} text={navLinks} active={index === 0 ? "link-active " : "link-normal"} key={index} />
                )

            })}

        </div>
    )
}
export default NavList
