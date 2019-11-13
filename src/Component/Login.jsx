import React from 'react'

class Login extends React.Component{
    constructor(){
        super()
        this.userLogin = this.userLogin.bind(this)
    }
    userLogin = (e)=>{
        e.preventDefault()

    }
    render(){
        return (
            <div>
                <form >
                    <label>User Name: <input type='text' name='usrname' /></label>
                    <label>Password: <input type='password' name='password' /></label>
                    <button >Login</button>

                </form>
            </div>
        );
    }
}

export default Login;