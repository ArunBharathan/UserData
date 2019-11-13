import React from 'react'
import UserCard from './UserCard';
import Filter from './Filter';
import { connect } from 'react-redux';


const getData = ()=>{
        
    fetch('https://randomuser.me/api/0.8/?results=20')
    .then(res => res.json())
    .then(data => {localStorage.setItem('users',JSON.stringify(data.results));
            console.log('data from api',data.results)})
  
    
  
}
window.onload = getData()
class Home extends React.Component{
    constructor(){
        super()
        this.state={
            userdata:[],
            filter:'',
            view:false,
            users:{
                gender:'',
                dob:'',
                phone:'',
                username:'',
                password:'',
                email:''

            },
            name:{
                title:'',
                first:'',
                last:'',
            }
        }
    }


    UNSAFE_componentWillMount(){
        if(!localStorage.getItem('users')){setTimeout(()=>{localStorage.getItem('users') && this.setState({
            userdata:JSON.parse(localStorage.getItem('users'))
        })},700)}
        else{
            localStorage.getItem('users') && this.setState({
                userdata:JSON.parse(localStorage.getItem('users'))
            })
        }
        
        
    }
    createUser = () =>{
        this.setState({
            view:true
        })
    }
    changeInput= (e)=>{
        if(e.target.name === 'first' || e.target.name === 'last' || e.target.name === 'title' ){
            this.setState({
                name:{
                    [e.target.name]:e.target.value
                }
            })
        }
        this.setState({
            users:{[e.target.name]:e.target.value}
        })

    }
    pushData = (e)=>{
        e.preventDefault()
        
        let data = this.state.userdata;
        let d2 = data.concat(this.state.name)
        let d3= d2.concat(this.state.users)
        localStorage.setItem('users',JSON.stringify(d3))
        this.setState({
            view:false
        })
    }

    render(){
        return (
            <div className="home">
                {this.state.view && 
                <div className='new'>
                    <form>
                        <input onChange={this.changeInput} name='first' type='text' placeholder='First Name'/>
                        <input onChange={this.changeInput} name='last'  type='text' placeholder='Last Name'/>
                        <input onChange={this.changeInput} name='title' type='text' placeholder='Title'/>
                        <input onChange={this.changeInput} name='gender' type='text' placeholder='Gender'/>
                        <input onChange={this.changeInput} name='dob' type='date' placeholder='DOB'/>
                        <input onChange={this.changeInput} name='email' type='email' placeholder='Email'/>
                        <input onChange={this.changeInput} name='phone' type='tel' placeholder='Phone'/>
                        <input onChange={this.changeInput} name='usrname' type='text'placeholder='Username' />
                        <input onChange={this.changeInput} name='password' type='password'placeholder='Password' />
                        <button onClick={this.pushData}>Create</button>
                    </form>

                </div>}
                <Filter changeText={text => this.setState({filter:text})}/>
                {this.props.isLogedIn ?<div>
                    <button onClick={this.createUser}>create new user</button>
                </div>: null}
                <div className="userlist">
                    {this.state.userdata.filter(filt => {return filt.user.name.first.includes(this.state.filter.toLocaleLowerCase())}).map((data,index) => {
                        return <UserCard key={index} user={data.user} />
                    } )}
                </div>
  
                
                
            </div>
        );
    }
}

const mapStatToProps = (storeState) => {
    return {
        isLogedIn:storeState.isLoged
    }
}

export default connect(mapStatToProps)(Home);