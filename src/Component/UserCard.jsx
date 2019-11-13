import React from 'react'

function UserCard (props){
    return(
        <div className='card'>
            <div className='cardheader'>
                <img src={props.user.picture.thumbnail} alt='user_image'/>
                <h2>{props.user.name.title} {props.user.name.first}</h2>
            </div>
            <div className='cardbody'>
                <h4>email: {props.user.email}</h4>
                <h4>Username: {props.user.username}</h4>
                <h4>Phone: {props.user.phone}</h4>
                <h4>Cell:{props.user.cell}</h4>

            </div>

        </div>
    )
}
export default UserCard