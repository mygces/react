import React from 'react';

const UserDetail = (selectedUser) => {
    const user = selectedUser.user[0];
    console.log('You got ' + user.name);

    return (      
        <>  
            <div className="ui segment one column grid">
                <div className="row">
                    <div className="column">
                        <img src={user.avatar} alt="avatar" />
                        <div className="email">{user.email}</div>
                        <div className="job">{user.jobTitle}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserDetail;