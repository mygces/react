import React from 'react';

const FlagCard = (selectedUser) => {
    const user = selectedUser.user[0];
    let flagURL = "//www.countryflags.io/" + user.countryCode + "/flat/64.png";

    return (      
        <>  
            <div className="ui segment one column grid">
                <div className="row">
                    <div className="column">
                        <img src={flagURL} alt="flag" />
                        <div className="description">{user.content}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FlagCard;