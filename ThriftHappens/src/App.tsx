
import './App.css';
import ItemContainer from './components/ItemsContainer';
import { products } from "./data/data";

function App() {
    return (
       <>
        <h1>Fruits Counter</h1>
        <ItemContainer data={products} />
      </>
    )
}

export default App
