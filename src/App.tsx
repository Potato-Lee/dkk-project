import React from 'react';
import {Routes ,Route} from 'react-router-dom';
import Login from './component/Login';
import Register from './component/Register';
import Main from './component/Main';


function App() {
  return (
    <>
      <Routes>
        <Route path="/main" element={<Main/>}></Route>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/Register" element={<Register/>}></Route>
      </Routes>
    </>
    );
}

export default App;
