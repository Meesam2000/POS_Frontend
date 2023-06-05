import React from 'react'

const loginUser =JSON.parse(localStorage.getItem('user'))

export default function UserImage() {
    return (
        <div>
            <img src={`http://localhost:5000/profileImg/${loginUser.profileimage}`} alt="user" width={45} height={40} style={{borderRadius:'50px'}}/>
        </div>
    )
}
