import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting = {"Bienvenido a la tienda"}/>
    </div>
  );
}

export default App;
