import React from 'react';
import Blogs from './components/Blogs';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Blog from './components/Blog';
import Main from './components/Main';
import Navbar from './Constants/Navbar';

import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='/Blogs' element={<Blogs/>}></Route>
          <Route path='/SignIn' element = {<SignIn/>}></Route>
          <Route path='/SignUp' element = {<SignUp/>}></Route>
          <Route path='/Blogs/:id' element = {<Blog/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
