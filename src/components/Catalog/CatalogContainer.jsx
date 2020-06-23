import React from 'react'
import { connect } from 'react-redux';
import Catalog from './Catalog'

const CatalogContainer = (props) => {
    return(
        <div>
            < Catalog {...props} />
        </div>
    )
}
let mapStateToProps = (state) => {
    return {
        goods: state.goods.catalog
    }
}
export default connect(mapStateToProps, null)(CatalogContainer);