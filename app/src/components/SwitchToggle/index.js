import React from 'react'
import './index.sass'

function SwitchToggle({test, onSwitch}) {
    return <div className="switch">
        <p className={!test ? "switch__text": "switch__text switch__text-checked"}>Test Mode</p>
        <label className="switch__toggle">
            <input type="checkbox" onChange={e => onSwitch(e)} checked={test}/>
            <span className="switch__slider switch__slider-round"></span>
        </label>
    </div>
}

export default SwitchToggle