import './App.css';
import Footer from './components/Footer.js'
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';


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
