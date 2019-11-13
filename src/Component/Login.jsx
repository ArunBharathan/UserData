import React from 'react'
// import {signin,signout} from './action'
import {connect} from 'react-redux'

import userdata from './Data'

class Login extends React.Component{
    constructor(){
        super()
        this.state={
            
            usrname:'',
            password:''
        }
        this.userLogin = this.userLogin.bind(this)
    }
    onTexChange = (e) => {
        
        this.setState({
            [e.target.name]:e.target.value
        })
  
    }

    userLogin = (e)=>{
        e.preventDefault()

        if(this.state.usrname === userdata.username && this.state.password === userdata.password){
            this.props.login()
            
        }
    }
    render(){
        
        return (
            <div className='new'>
                {this.props.isLogedIn ? <button onClick={(e) => {e.preventDefault()
                    this.props.logout()}}>Logout</button> :<form >
                   
                    <label>User Name: <input onChange={this.onTexChange} type='text' name='usrname' /></label>
                    <label>Password: <input onChange={this.onTexChange}  type='password' name='password' /></label>
                    <button onClick={this.userLogin}>Login</button>
                    
                </form>}
                
                
            </div>
        );
    }
}
const mapStatToProps = (storeState) => {
    return {
        isLogedIn:storeState.isLoged
    }
}
const mapDispatchToProp = (dispatch) => {
    return {
        login:() => dispatch({type:'SIGN_IN'}),
        logout:() => dispatch({type:'SIGN_OUT'})
    }

}

export default connect(mapStatToProps,mapDispatchToProp)(Login);