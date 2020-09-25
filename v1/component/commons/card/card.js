import ItemCard, {ESTRELLA_ICON, PINGUINO_ICON, SPIDERMAN_ICON} from "./itemCard";
import Container from "../container";

const CardText = () => {
    return(
        <div className="card-container">
            <Container>
                <div className="card">
                    <ItemCard title={"Cojin Decorativo"} text={"Spiderman"} src={SPIDERMAN_ICON} alt="cojin" />
                    <ItemCard title={"Cojin Infantil"} text={"Estrella"} src={ESTRELLA_ICON} alt="start"/>
                    <ItemCard title={"Cojin Navideño"} text={"Pinguino"} src={PINGUINO_ICON} alt="cojin"/>
                </div>
            </Container>
        </div>
    );
};

export default CardText;
