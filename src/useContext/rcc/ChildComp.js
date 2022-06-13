import React, { Component } from 'react';
import UseNestChild from './UseNestChild';
import UserContext from './UserContext';

export default class ChildComp extends Component {
    static contextType =  UserContext 
  render() {
    return (
      <div>
        <UseNestChild />
      </div>
    );
  }
}
