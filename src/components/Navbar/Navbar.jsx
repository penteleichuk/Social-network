import style from './Navbar.module.css'
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}><NavLink to="/profile" className={({ isActive }) => isActive ? style.active : style.link}>Profile</NavLink></div>
            <div className={style.item}><NavLink to="/dialogs" className={({ isActive }) => isActive ? style.active : style.link}>Messages</NavLink></div>
            <div className={style.item}><a href="/news">News</a></div>
            <div className={style.item}><a href="/music">Music</a></div>
            <div className={style.item}><a href="/settings">Settings</a></div>
        </nav>
    )
}

export default Navbar;