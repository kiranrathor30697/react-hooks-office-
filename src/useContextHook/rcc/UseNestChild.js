import React, { Component } from 'react';
import UserContext, { UserProvider } from './UserContext';

export default class UseNestChild extends Component {

  static contextType = UserContext    
  render() {
     let friend = this.context;
    return (
      <div>
        {/* {console.log(user.name)} */}
        {friend.name}{" "}{friend.surname}
      </div>
    );
  }
}


