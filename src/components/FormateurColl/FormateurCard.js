import styleFormateurCard from "./FormateurCard.module.css";

const FormateurCard = (props) =>{
    const {lastname, firstname, birthdate, avatar, gender} = props;
    return(
        //si gender est male mettra la classe blue, si gender est pas male, mettra la classe pink
        <div className={(gender === "male") ? styleFormateurCard.blue : styleFormateurCard.pink}>
            <img className = {styleFormateurCard.avatar} src = {avatar} alt="avatar"/>
            <p>{firstname} {lastname}</p>
            <p>{birthdate}</p>
        </div>
    )
}


export default FormateurCard