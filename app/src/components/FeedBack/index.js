import React from 'react'
import './index.sass'

function FeedBack({msg, onClose}) {

    return <>{msg && 
        <div className="alert">
            <span className="closebtn" onClick={onClose}>&times;</span> 
            {msg}
        </div>
    }</>
}

export default FeedBack