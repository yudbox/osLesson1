import React from 'react'
import classes from './Sidebar.module.css';
import NavMenu from '../common/NavMenu/NavMenu';


const Sidebar = (props) => {
    return (
        <aside className={classes.side_container}>
            <NavMenu />
        </aside>
    )
}

export default Sidebar;