import React from 'react'
import classes from '../../Chessboard.module.css'

const ChessCell = (props) => {
    if(props.lineId%2 == 0){
        if(props.cellId%2==0) {
            return <div  className={`${classes.cell} ${classes.cellBlack}`}>{props.cellId}</div>
        }
        return <div  className={`${classes.cell} ${classes.cellWhite}`}>{props.cellId}</div>
    }         if(props.cellId%2==0) {
        return <div  className={`${classes.cell} ${classes.cellWhite}`}>{props.cellId}</div>
    }
    return <div  className={`${classes.cell} ${classes.cellBlack}`}>{props.cellId}</div>
}

export default ChessCell;