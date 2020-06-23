import React from 'react'
import Chessline from './ChessLine/ChessLine'
import classes from './Chessboard.module.css'

const Chessboard = (props) => {
    let chessLineId = [];
    for (let i = 0; i <= 7; i++) {
        chessLineId.push(i);
    }
    return (
        <div className={classes.chessboard_container}>
            <div className={classes.chessboard}>
                {
                    chessLineId.map(n => <Chessline key={n} lineId={n} />)
                }

            </div>
        </div>

    )
}

export default Chessboard;