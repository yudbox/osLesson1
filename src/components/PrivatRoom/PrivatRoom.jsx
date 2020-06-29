import React from 'react'
import classes from './PrivatRoom.module.css'

const PrivatRoom = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.avatar}>
                <img src={props.privat.photo} alt="" />
            </div>
            <div className={classes.particulars}>
                <p>Surname: {props.privat.name} </p>
                <p>Name: {props.privat.surname}</p>
                <p>Second name: {props.privat.secondName}</p>
                <p>Birth date: {props.privat.birthDay}</p>
                <p>Mibile: {props.privat.mobile}</p>
                <p>Social:
                    <p>Facebook: {props.privat.social.facebook}</p>
                    <p>twitter: {props.privat.social.twitter}</p>
                </p>
            </div>
        </div>
    )
}

export default PrivatRoom;