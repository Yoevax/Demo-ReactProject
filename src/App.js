//import logo from './logo.svg';
import './App.css';
// import Welcome from './components/Welcome';
// import Condition from './components/Condition';
// import Collection from './components/Collection';
import ListeFormateurs from './components/FormateurColl/ListeFormateurs';

function App() {
  const nomForm = ["Aude", "Aurélien", "Mélanie", "Loic", "Quentin", "Rudi"];
  const formateurs = [
    {id : 1, lastname :"Beurive", firstname : "Aude", birthdate : "16/10/1989", avatar : "./assets/img/aude.png", gender : "female"},
    {id : 2, lastname :"Strimelle", firstname : "Aurélien", birthdate : "01/11/1989", avatar : "./assets/img/aurelien.png", gender : "male"},
    {id : 3, lastname :"Chaineux", firstname : "Gavin", birthdate : "18/10/1993", avatar : "./assets/img/gavin.png", gender : "male"},
    {id : 4, lastname :"Ly", firstname : "Khun", birthdate : "06/05/1982", avatar : "./assets/img/khun.png", gender : "male"}
  ]

  
  return (//les attributs se retrouvent dans l'objet props
    <div className="App">
      {/* <Welcome test = "Super test" monNombrePref={5}/> 
      <Condition possedeAnimal={true} nomAnimal = "Axel" estChien={false}/> */}
      {/* <Collection nomFormateurs = {nomForm} /> */}
      <ListeFormateurs listeFormateurs ={formateurs}/>

    </div>
  );
}
 
export default App;
