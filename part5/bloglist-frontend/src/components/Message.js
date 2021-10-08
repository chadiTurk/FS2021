import React from 'react'

const Message = ({message,status}) =>{
    return(
        <div>
            <h2 className = {status}> {message} </h2>
        </div>
    )
}

export default Message