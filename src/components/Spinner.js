import React from 'react';

const Spinner = () => {
 return (
   <div className="ui active dimmer spinner">
      <div className="ui big text loader">
         Loading...
      </div>
   </div>
 );
};

export default Spinner;