import React from 'react'
import { NavigationProps } from './Navigation';
import { BsFillGridFill, BsSearch } from "react-icons/bs";
interface HeaderProps extends NavigationProps {
}
function Header({visible, handler}:HeaderProps) {
  return (
        <header>
            <span onClick={()=>{handler(true)}}><BsFillGridFill/></span>
            <h3>Blog</h3>
            <span><BsSearch/></span>
        </header>
    )
}

export default Header;
