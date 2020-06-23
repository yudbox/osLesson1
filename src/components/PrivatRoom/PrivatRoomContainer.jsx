import React from 'react'
import { connect } from 'react-redux';
import PrivatRoom from './PrivatRoom'


const PrivatRoomContainer = (props) => {
    return(
        <div>
            <PrivatRoom privat = {props.privatData} />
        </div>
    )
}
let mapStateToProps = (state) => {
    return {
        privatData: state.privat.privatData
    }
}
export default connect(mapStateToProps, null)(PrivatRoomContainer);