import React from 'react';
import faker from 'faker';
import SearchBar from './SearchBar';

const App = () => {
   
    const createUser = () => {
        return {
            name: faker.name.findName(),
            email: faker.internet.email(),
            avatar: faker.image.avatar(),
            jobTitle: faker.name.jobTitle(),
            content: faker.random.words(25),
            countryCode: faker.address.countryCode()
        }
    };
    const createUserList = (numUsers = 10) => {
        return new Array(numUsers)
          .fill(undefined)
          .map(createUser);
    };
    let usersArr = createUserList(10);
    console.log(usersArr);
   
    return (
        <>
            <div className="ui container" style={{marginTop: '20px'}}>
                <div class="ui grid">
                <SearchBar users = {usersArr} />       
                </div>        
            </div>
           
        </>
    );
}

export default App;