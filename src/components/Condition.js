import PropTypes from "prop-types";

const Condition = (props) =>{
    const {possedeAnimal, nomAnimal, estChien} = props;

    //premiere facon de faire du rendu conditionnel -> le if
    //permet de faire 2 blocs de rendus différents, selon une epression booléenne
    if(possedeAnimal){
        return(
            <div>
                <p>Vous possédez un petit compagnon 🐕🐈‍⬛</p>
                {/* Une autre facon de faire du rendu conditionnel -> le coalesce || */}
                {/* A priviligier poour afficher autre chose si la valeur n'existe pas */}
                {/* Coalesce : essaye de lire la valeur presente dans nomAnimal : s'il ya une, l'affiche. si nomAnimal est unedefined ou null, affichera ce qu'on met apres les || */}
                <p>Son petit nom est : {nomAnimal || "Oh, il n'a pas de nom" }</p> {/*si ya une valeur a nomAnimal -> affiche le nom sinon -> le msg s'affiche */}

                {/* 3e methode pour le rendu conditionnel : la ternaire
                (condition est  vraie) ? si oui : si non */}
                {
                    (estChien)? <img src="./assets/img/chien.png" alt="illustration d'un chien"/>: <img src="./assets/img/chat.png" alt="illustration d'un chat"/>
                }
            </div>
        )

        
    }else{
        return(
            <div>
                <p>Oh, vous ne possédez pas d'animal 😢</p>
                <a href="https://www.sanscollier.be/" rel="noreferrer" target="_blank">Voulez vous en adopter un ?</a>
            </div>
        )  
    }
}

Condition.propTypes = {
    possedeAnimal : PropTypes.bool,
    nomAnimal : PropTypes.string,
    estChien : PropTypes.bool
}

export default Condition