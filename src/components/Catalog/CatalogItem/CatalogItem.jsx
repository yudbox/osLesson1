import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from '../Catalog.module.css'

const GoodsItem = (props) => {
    return (
        <div className={classes.goodsItem}>
            <div>
                <NavLink to={`/goodsitem/${props.id}`}>
                    <img src={props.photo ? props.photo : null} alt="" className={classes.goodsPhoto} />
                </NavLink>
            </div>
            <div className={classes.goodsName}>{props.name}</div>
            <div className={classes.goodsPrice}>Price <span>{props.price}</span> UAH</div>
        </div>
    )
}

export default GoodsItem;