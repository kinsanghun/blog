import React, { CSSProperties, useEffect, useState } from 'react'
import { NavigationProps } from './Navigation';
import { BsFillGridFill, BsSearch } from "react-icons/bs";
interface HeaderProps extends NavigationProps {
}
function Header({ visible, handler }: HeaderProps) {
    const [color, setColor] = useState(true);
    useEffect(()=>{
        const windowHeight = window.innerHeight;
        const scrollEvent = (e:Event) => {
            if(window.scrollY + 100 >= windowHeight) {
                setColor(false);
            }
            else {
                setColor(true);
            }
        }
        document.addEventListener("scroll", scrollEvent)

        return () => document.removeEventListener("scroll", scrollEvent)
    }, [])

    const style:CSSProperties = {
        color : color ? "white" : "black",
        transition : "0.5s"
    }
    return (
        <header>
            <span onClick={() => { handler(true) }}><BsFillGridFill style={style}/></span>
            <h3 style={style}>Blog</h3>
            <span><BsSearch style={style}/></span>
        </header>
    )
}

export default Header;
