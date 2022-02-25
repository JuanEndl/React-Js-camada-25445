import Footer from './components/layout/Footer.js'
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/layout/NavBar.js';


import './App.css';


function App() {


  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemListContainer></ItemListContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
