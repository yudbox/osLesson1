import React from 'react'
import CatalogItem from './CatalogItem/CatalogItem'
import classes from './Catalog.module.css';

const Catalog = (props) => {
    let goods = [...props.goods];
    return(
        <div className={classes.catologContainer}>
            {
                goods.map(g=><div key={g.id} className={classes.goods}>
                    <CatalogItem {...g} />
                </div>)
            }
        </div>
    )
}

export default Catalog;