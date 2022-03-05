import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from './components/layout/Footer.js'
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/layout/NavBar.js';
import ItemDetailContainer from './components/ItemDetailContainer.js';


import './App.css';


function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route index element={<ItemListContainer/>}></Route>
        <Route path='categoria'>
          <Route path=':category' element={<ItemListContainer/>}></Route>
        </Route>
        <Route path='/detail/:id' element={<ItemDetailContainer/>}></Route>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
