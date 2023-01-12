//import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Welcome test = "Super test" monNombrePref={5}/>
    </div>//les attributs se retrouvent dans l'objet props
  );
}
 
export default App;
