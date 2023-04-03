import { useMemo, useState } from "react";
import MENU from "assets/json/menu.json";
import { Link } from "react-router-dom";

interface Menu {
    id : string;
    name : string;
    href : string;
}
interface HeaderProps {
    visible:boolean;
}

function Header({visible}:HeaderProps) {
    const [login, setLogin] = useState<boolean>(false);

    const navigator:JSX.Element = useMemo<JSX.Element>(():JSX.Element => {
        const MENU_INFO:Menu[] = MENU;
        const menus = MENU_INFO.map(menu => (<li key={menu.id}><Link to={menu.href}>{menu.name}</Link></li>));
        return (
        <ul>
            {menus}
            {login ? 
                (<><li><Link to="/mypage">mypage</Link></li><li><Link to="/logout">logout</Link></li></>): 
                (<><li><Link to="signup">sign up</Link></li><li><Link to="signin">sign in</Link></li></>)
            }
        </ul>);
    }, [login])
    
    return (
        <nav>
            <h2>Blog</h2>
            {navigator}
        </nav>
    )
}

export default Header;