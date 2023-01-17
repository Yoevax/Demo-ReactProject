import FormateurCard from "./FormateurCard";

const ListeFormateurs = (props) =>{
    const {listeFormateurs} = props;

    const cards = listeFormateurs.map(formateur =>
        <FormateurCard key={formateur.id} lastname ={formateur.lastname} firstname ={formateur.firstname} birthdate ={formateur.birthdate} avatar ={formateur.avatar} gender ={formateur.gender}/>);
    return(
        <div className="flex">
            {cards}
        </div>
    )
}
export default ListeFormateurs