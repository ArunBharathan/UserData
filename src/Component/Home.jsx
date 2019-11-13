import React from 'react'
import UserCard from './UserCard';

const getData = ()=>{
    fetch('https://randomuser.me/api/0.8/?results=20')
    .then(res => res.json())
    .then(data => {localStorage.setItem('users',JSON.stringify(data.results));
            console.log('data from api',data.results)})
  
    
  }
  window.onload = getData
class Home extends React.Component{
    constructor(){
        super()
        this.state={
            userdata:[]
        }
    }
    
    show = (e) => {
        e.preventDefault()
        const data=JSON.parse(localStorage.getItem('users'))
        console.log("inside home",data)
        this.setState({
            userdata:data
        })
    }
    UNSAFE_componentWillMount(){
        localStorage.getItem('users') && this.setState({
            userdata:JSON.parse(localStorage.getItem('users'))
        })
    }
    UNSAFE_componentWillUpdate(nextProp, nextState){

    }
    render(){
        return (
            <div className="home">
                <div className="filter"></div>
                <div className="userlist">
                    {this.state.userdata.map((data,index) => {
                        return <UserCard key={index} user={data.user} />
                    } )}
                </div>
                <h1>Home Page</h1>
                {this.state.userdata.map(data => {
                    return data.user.name.first
                })}
                
            </div>
        );
    }
}

export default Home;