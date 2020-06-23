import React from 'react'
import GoodsItem from './GoodsItem'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { compose } from 'redux'

const GoodsItemContainer = (props) => {
    let goodsId = props.match.params.goodsId
    return(
        <div>
            <GoodsItem goods={props.goods[goodsId-1]} />
        </div>
    )
}
let mapStateToProps = (state) => {
    return ({
        goods: state.goods.catalog
    })
}
export default compose(withRouter,
    connect(mapStateToProps, null))(GoodsItemContainer);