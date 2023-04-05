import React from 'react'
import { NavigationProps } from './Navigation';
import { BsFillGridFill } from "react-icons/bs";
interface HeaderProps extends NavigationProps {
}
function Header({visible, handler}:HeaderProps) {
  return (
        <header>
            <span onClick={()=>{handler(true)}}><BsFillGridFill/></span>
        </header>
    )
}

export default Header;
