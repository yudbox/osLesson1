import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from './Sidebar.module.css';

const Sidebar = (props) => {
    return(
        <aside className={classes.side_container}>
            <nav className={classes.sideNav}>
                <NavLink to={"/chessboard"} activeClassName={classes.active}>Chessboard</NavLink>
                <NavLink to={"/catalog"} activeClassName={classes.active}>Catalog</NavLink>

                <NavLink to={"/privatroom"} activeClassName={classes.active}>PrivatRoom</NavLink>
            </nav>
        </aside>
    )
}

export default Sidebar;