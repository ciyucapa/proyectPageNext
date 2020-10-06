import CardHorizontal from "../commons/cardHorizontal";
import Container from "../commons/container";
import {SANTA_IMAGE} from "../commons/image";

const CardTextHorizontal = () => {
    return(
        <Container>
            <div>
                <CardHorizontal title={'Cojines Navideños'} subtitle={'Caracteristicas'} text={'elaborado con fibra de poliester siiconado'}
                                subtitleTwo={'Medidas'} textOne={'35 cm x 35 cm'} textTwo={'40 cm x 40 cm'} textThree={'45 cm x 45 cm'} isImage={SANTA_IMAGE}/>
            </div>
        </Container>
    );
};

export default CardTextHorizontal
