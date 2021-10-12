/* eslint-disable */
import React from 'react'

const LoginForm = ({usernameVal,passwordVal,onChangeUsername,onChangePassword,handleLogin}) =>{
    return(
        <div>
            <h1>log in to application</h1>
            <form onSubmit = {handleLogin}>  
                <label htmlFor = "username"> username </label>
                <input name ="username" value = {usernameVal} onChange = {onChangeUsername}
                    id = 'inputUsername'/>
                <br/>
                <label htmlFor = "passsword"> password </label>
                <input name ="password" value = {passwordVal} onChange = {onChangePassword}
                    id = 'inputPassword'/>
                <br/>
                <button>login</button>
            </form>
        </div>
    )
}

export default LoginForm