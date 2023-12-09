import logo from './logo.svg';
import './App.css';
import SubirProductos from './pages/SubirProductos/SubirProductos';
import VerProductos from "./pages/VerProductos/VerProductos"
import { CaritoComprarContex } from './contexts/carito';
import {CaritoComprarProvider} from "../src/contexts/carito"
function App() {
  return (
    <div className="App">
      <CaritoComprarProvider>
        <SubirProductos></SubirProductos>
        <VerProductos></VerProductos> 
      </CaritoComprarProvider>
      
    </div>
  );
}

export default App;
