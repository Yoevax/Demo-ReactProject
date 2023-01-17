
import PropTypes from "prop-types"; //import du package prop-types pr pouvoir utiliser les types sur les proprietés
import './Welcome.css';
import styleWelcome from './Welcome.module.css'; /* L'avantage de cette méthode est que chaque nom de classe CSS sera automatiquement généré sous la forme de « [filename]_[classname]_[hash] »,
pour éviter des conflits.*/

const Welcome = (props) =>{
    const{pouet, test, monNombrePref} = props;
    console.log(props);
    return (
        <div>
          <h1 className="text-red"> Hello 💕</h1>
          <h2 className={styleWelcome.maSuperClasse}> OK? {pouet} {monNombrePref}/{monNombrePref} </h2>
          <h2> Il est comment mon test? {test}</h2>
        </div>
    )
}

//Pour les valeurs par defaut des props
//Les valeurs que prendront les proprietés par défaut si on ne les fournit pas qd on appelle le composant dans app.js
Welcome.defaultProps = {
    pouet: "non", //ici, pouet n'est pas fourni, elle prendre la valeur "non"
    test: "Un truc",  // comme on a fourni "Super test" dans truc, lors de l'appel, cela va ecraser "un truc" qui a été mis par défaut
    monNombrePref : 0
}

//Pour définir les types de props
Welcome.propTypes = { //petit maj car c une proprieté de welcome
    //nomProprieté: type
    pouet : PropTypes.string, //maj car ca vient de l'import
    test : PropTypes.string,
    monNombrePref : PropTypes.number
}


export default Welcome;
