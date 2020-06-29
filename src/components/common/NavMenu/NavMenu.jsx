import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavMenu.module.css';

const NavMenu = (props) => {
    return (
        <nav className={classes.nav}>
            <NavLink onClick={props.toggleOpenMode ? props.toggleOpenMode : null} to={"/chessboard"} activeClassName={classes.active}>Chessboard</NavLink>
            <NavLink onClick={props.toggleOpenMode ? props.toggleOpenMode : null} to={"/catalog"} activeClassName={classes.active}>Catalog</NavLink>
            <NavLink onClick={props.toggleOpenMode ? props.toggleOpenMode : null} to={"/privatroom"} activeClassName={classes.active}>PrivatRoom</NavLink>
        </nav>
    )
}
export default NavMenu;