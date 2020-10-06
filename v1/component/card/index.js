import Container from "../commons/container";
import CardVertical from "../commons/cardVertical";
import {SPIDER_ICON, ESTRELLA_ICON, PENGUIN_ICON} from "../commons/image";

const CardText = () => {
    return(
        <Container>
            <div className="card-container">
                <CardVertical title={"Cojin Decorativo"} text={"Spiderman"} isImage={SPIDER_ICON} />
                <CardVertical title={"Cojin Infantil"} text={"Estrella"} isImage={ESTRELLA_ICON} />
                <CardVertical title={"Cojin Navideño"} text={"Pinguino"} isImage={PENGUIN_ICON} />
            </div>
        </Container>
    );
};

export default CardText;
