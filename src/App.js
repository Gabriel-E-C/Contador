import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemCount from './components/ItemCount';
import CartWidget from './components/CartWidget';

function App() {
  function onAdd (cantProd){
    return(
        alert ('Se agregaron los productos al carrito')
    )
  }

  return (
    <>
      <NavBar />
      <ItemCount stock={5} inicial={0} onAdd={onAdd}/>
    </>
  );
}

export default App;
