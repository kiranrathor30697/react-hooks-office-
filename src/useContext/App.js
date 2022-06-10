import { createContext, useState } from 'react';
import '../App.css';
import UseContext from './UseContext';
export const UserContext = createContext();
let App = () => {

  const [data,setData] = useState({
    name:'Kiran',
    surname:'Rathor'
  })
  return (
    <div className="App App-header">
     <UserContext.Provider value={data}>
      <h1>Use Context</h1>
      <UseContext />
     </UserContext.Provider>  
    </div>
  );
}

export default App;
