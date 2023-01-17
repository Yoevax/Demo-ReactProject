import PropTypes from "prop-types";

const Collection = (props) =>{
    const {nomFormateurs} = props;
    return (
        <div>
            <ul>
                {/* Pour chacun des noms de formateurs, crée un li contenant le nom */}
                {/* 1er facon de faire : mettre le .map direct dans le rendu du composant */}
                {/*  tjr mettre une clé unique, stable (un id en db par ex) et si pas d'id, comme notre cas actuel, la key peut etre l'index de lelement du tableau*/}
                {nomFormateurs.map((nom, index) => <li key = {index}>{nom}</li>)}
            </ul> 
        </div>
    )
}

export default Collection