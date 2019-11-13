import React from 'react'

function Filter(props){
    return(
        <div className='filter'>
            <input className='input' type='text' placeholder='User Filter' onChange={text => props.changeText(text.target.value)} />
        </div>
    )
}
export default Filter