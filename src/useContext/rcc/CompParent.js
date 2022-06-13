import React, { Component } from 'react';
import '../../App.css'
import ChildComp from './ChildComp';
import { UserProvider } from './UserContext';

export default class CompParent extends Component {
    state={
        name:"Anjali",
        surname:"Sahu"
    }
  render() {
    //   let friend = {
    //     name:"Kiran",
    //     surname:"Rathor"
    //   }
        
        const {name} = this.state
        const {surname} = this.state
        console.log(name,surname);

   
    return (
        <UserProvider value={this.state}>
            <div className='App App-header'>
                <ChildComp />
            </div>
        </UserProvider>
    );
  }
}
