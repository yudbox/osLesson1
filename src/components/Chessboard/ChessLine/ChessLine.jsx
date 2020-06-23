import React from 'react'
import ChessCell from './ChessCell/ChessCell'
import classes from '../Chessboard.module.css'

const ChessLine = (props) => {
    let chessCellId = [];
    for (let i = 1; i <= 8; i++) {
        chessCellId.push(i+props.lineId*8);
    }
    return(
        <div className={classes.chessline}>
                {
                    chessCellId.map(n => <ChessCell key={n} lineId={props.lineId} cellId={n} />)
                }
        </div>
    )
}

export default ChessLine;