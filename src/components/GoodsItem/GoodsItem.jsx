import React from 'react'
import classes from './GoodsItem.module.css'

const GoodsItem = (props) => {

    return (
        <div className={classes.goods_container}>
            <div className={classes.goods_item}>
                <div>
                    <img src={props.goods.photo ? props.goods.photo : null} alt="" className={classes.goodsPhoto} />
                </div>
                <p className={classes.description}>{props.goods.description}</p>
                <div className={classes.goods_buy}>
                    <button>BUY NOW</button>
                </div>
            </div>
            <div className={classes.goods_item}>
                <p className={classes.goods_name}>{props.goods.name}</p>
                <p className={classes.goods_price}>Price <span>{props.goods.price}</span> uah</p>
                <p className={classes.goods_quantity}>Pieces remain: <span>{props.goods.quantity}</span></p>

            </div>
        </div>
    )
}

export default GoodsItem;