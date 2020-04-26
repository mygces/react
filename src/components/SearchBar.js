import React, { useState } from 'react';
import UserDetail from './UserDetail';
import FlagCard from './FlagCard';
import Spinner from './Spinner';

const Searchbar = (users) => {
    //Handle search
    const [email, setEmail] = useState("");
    const [hasResult, setHasResult] = useState(0);
    const [user, setUser] = useState(null);   
    const [spin, setSpinner] = useState(false); 
    
    const searchEmail = (event) => {
        setSpinner(true);
        event.preventDefault(); 
        searchUsers(email);     
    }
    const userList = users.users.map((user) =>
        <div className="item" key={user.email} style={{margin: '20px auto', width: '280px'}} onClick={e => setSearchEmail(user.email)}>
            <img className="ui avatar image" src={user.avatar} alt="avatar"/>
            <div className="content">
                <div className="header">{user.name}</div>
                <div className="description">{user.email}</div>
            </div>
        </div>
    );
    
    function searchUsers(newEmail){        
        setEmail(newEmail);
        const selectedUser = users.users.filter(user => user.email === newEmail);
 
        if(selectedUser.length){
            setHasResult(1);
            setUser(selectedUser);
        }else{
            setHasResult(2);
            showWarning('block')
        }
        setTimeout(function() {            
            setSpinner(false);
        }, 1000);       
    }

    function showWarning(display){ 
       var messageBox = document.getElementById('message');
        if(messageBox !== null)  messageBox.style.display = display;
    }

    function setSearchEmail(newEmail){
        searchUsers(newEmail);   
    }  

    return (
        <>
            <div className="four wide column">
                <div className="ui segment">
                    <form className="ui form" onSubmit = {searchEmail}>
                        <div className="field">
                            <label>User Search</label>
                            <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                        </div>
                    </form>
                </div> 
                
                <div className="ui list">
                        {userList}
                </div>
            </div>
            <div className="nine wide column">
                {spin && (
                    <>
                    <Spinner />
                    </>
            )}
                {hasResult === 1 && (
                    <>
                    <UserDetail user = {user} />
                    <FlagCard user = {user} />
                    </>
                )}
                {hasResult === 2 && (
                    <>
                        <div className="ui warning message" id="message" style={{display: 'block', marginTop: '106px'}}>
                            <i className="close icon" onClick={e => showWarning('none')} ></i>
                            <div className="header">
                                No results!
                            </div>
                        </div>                    
                    </>    
                )}            
            </div> 
        </>
    );
}

export default Searchbar;