import ItemCard, {ESTRELLA_ICON, PINGUINO_ICON, SPIDERMAN_ICON} from "./itemCard";
import Container from "../commons/container";

const CardText = () => {
    return(
        <Container>
            <div className="card-container">
                <ItemCard title={"Cojin Decorativo"} text={"Spiderman"} isIcon={SPIDERMAN_ICON} alt="cojin" />
                <ItemCard title={"Cojin Infantil"} text={"Estrella"} isIcon={ESTRELLA_ICON} alt="start"/>
                <ItemCard title={"Cojin Navideño"} text={"Pinguino"} isIcon={PINGUINO_ICON} alt="cojin"/>
            </div>
        </Container>
    );
};

export default CardText;
