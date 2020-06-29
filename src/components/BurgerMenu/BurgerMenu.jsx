import React, { useState } from 'react';
import classes from './BurgerMenu.module.css';
import NavMenu from '../common/NavMenu/NavMenu';

const BurgerMenu = (props) => {
    const [openMode, setOpenMode] = useState(false)

    const toggleOpenMode = () => {
        setOpenMode(!openMode)
    }

    return (
        <div className={classes.burger}>
            <div onClick={toggleOpenMode} className={openMode ? `${classes.burgerMenu} ${classes.open}` : classes.burgerMenu}>
                <span />
                <span />
                <span />
            </div>
            <div className={openMode ? `${classes.burger_nav} ${classes.burger_nav_active}` : `${classes.burger_nav} ${classes.burger_nav_deactive}`}>
                <NavMenu toggleOpenMode={toggleOpenMode} /> 
            </div>

        </div>
    )
}
export default BurgerMenu;