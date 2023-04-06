import { useMemo } from "react";
import MENU from "assets/json/menu.json";
import { Link } from "react-router-dom";

interface Menu {
    id : string;
    name : string;
    href : string;
}
export interface NavigationProps {
    visible:boolean;
    handler : Function;
}

function NavItem({id, name, href}:Menu) {
    return (<li key={id}><span className="icon"></span><Link to={href}>{name}</Link></li>);
}

function Navigation({visible, handler}:NavigationProps) {

    const navigator:JSX.Element = useMemo<JSX.Element>(():JSX.Element => {
        const MENU_INFO:Menu[] = MENU;
        const menus = MENU_INFO.map(menu => (<NavItem key={menu.id} id={menu.id} name={menu.name} href={menu.href}/>));
        return (<ul>{menus}</ul>);
    }, [])

    return (
        <>  
            {visible ? <div className="nav-bg" onClick={()=>{handler(false)}}></div> : null}
            <nav className={visible ? "active" : ""}>
                <h2 onClick={()=>{handler(false)}}>Blog</h2>
                {navigator}
            </nav>
        </>
    )
}

export default Navigation;