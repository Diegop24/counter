
import './App.css';
import Calculadora from'./components/Calculo/Calculadora'
import List from './components/card/List';
function App(){
    return(
      <div className="App">
        <p className= 'text-white bg-success'>
        <h1>Taller De Construcción - Diego Peñarrieta Guale </h1> </p>
        <Calculadora/>
        <List/>

      
      </div>
    )
    
  }
  export default App;

