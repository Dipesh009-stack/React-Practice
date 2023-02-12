import React from 'react'

export default function Login() {

    const customstyle = {
        fontsize : '20px',
        background: 'black',
        color : 'white',
        margin :'10px',
        padding : '5px'
    }
    return (
        <div>
            <h1>Login Page</h1>
            <hr />
            <div style={customstyle}>
                <label htmlFor="username">Username</label>
                <input 
                    type="text"  
                    placeholder='username' 
                    style={{color: 'blue', fontSize:'20px'}}
                    />

            </div>
        </div>
    )
}