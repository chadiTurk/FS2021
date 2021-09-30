import React from 'react'

const People = ({person,number,deleteUser}) =>{
    return(
        <li>{person} {number} <button onClick = {deleteUser}> delete </button></li>
    )
    
}

export default People