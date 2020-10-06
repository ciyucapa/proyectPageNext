import Container from "../commons/container";
import CardVertical from "../commons/cardVertical";
import {SPIDERMAN_ICON, ESTRELLA_ICON, PINGUINO_ICON} from "../commons/image";

const CardText = () => {
    return(
        <Container>
            <div className="card-container">
                <CardVertical title={"Cojin Decorativo"} text={"Spiderman"} isImage={SPIDERMAN_ICON} />
                <CardVertical title={"Cojin Infantil"} text={"Estrella"} isImage={ESTRELLA_ICON} />
                <CardVertical title={"Cojin Navideño"} text={"Pinguino"} isImage={PINGUINO_ICON} />
            </div>
        </Container>
    );
};

export default CardText;
