
import './App.css';
import ThriftHappensApp from './components/ThriftHappensApp';
import { products } from "./data/data";

function App() {
    return (
       <>
        <h1>Fruits Counter</h1>
        <ThriftHappensApp data={products} />
      </>
    )
}

export default App
