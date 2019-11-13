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
            filter:''
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
    UNSAFE_componentDidMount(){
      
    }
    UNSAFE_componentWillMount(){
        if(!localStorage.getItem('users')){setTimeout(()=>{localStorage.getItem('users') && this.setState({
            userdata:JSON.parse(localStorage.getItem('users'))
        })},500)}
        else{
            localStorage.getItem('users') && this.setState({
                userdata:JSON.parse(localStorage.getItem('users'))
            })
        }
        
        
    }
    UNSAFE_componentWillUpdate(nextProp, nextState){
        
    }
    render(){
        return (
            <div className="home">
                <Filter changeText={text => this.setState({filter:text})}/>
                {this.props.isLogedIn ?<div>
                    <button>create new user</button>
                </div>: null}
                <div className="userlist">
                    {this.state.userdata.filter(filt => {return filt.user.name.first.includes(this.state.filter.toLocaleLowerCase())}).map((data,index) => {
                        return <UserCard key={index} user={data.user} />
                    } )}
                </div>
                <h1>Home Page</h1>
                
                
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