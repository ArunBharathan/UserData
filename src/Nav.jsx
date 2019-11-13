import React from 'react'
import {Link} from 'react-router-dom'

class Nav extends React.Component{
    render(){
        return (
            <nav>
                <h1>USER DATA</h1>
                
                <ul className='nav-link'>
                
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/login"><li>Login</li></Link>
                

                </ul>
                
            </nav>
        );
    }
}

export default Nav;