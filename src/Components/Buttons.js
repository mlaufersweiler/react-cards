import React from 'react'
import './Styles/Buttons.css'
function Buttons(props){
    return(
        <div className = "buttons">
            <button onClick={props.previous}>{'< Previous'}</button>
            <button onClick={props.next}>{'Next >'}</button>
        </div>
    )
}
export default Buttons