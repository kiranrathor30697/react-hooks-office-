import React, { useContext } from 'react';
import { UserContext } from './App';

export const NestedCom = () => {
    const user = useContext(UserContext);
  return (
    <div>
        <h1>{user.name}</h1>
        <h1>{user.surname}</h1>
    </div>
  );
}
