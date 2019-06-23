import React from 'react'

function List({urls}) {
    return <>
        <ul className="urls__list">
        {urls.length > 0 && urls.map((url, index) => {
            return <li key={index}>{url}</li>
        })}
        </ul>
    </>
}

export default List