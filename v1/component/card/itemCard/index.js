import PropTypes from 'prop-types';

import {Assets} from "../../../resourser";

export const SPIDERMAN_ICON = 'ItemCard/SPIDERMAN_ICON';
export const PINGUINO_ICON = 'ItemCard/PINGUINO_ICON';
export const ESTRELLA_ICON = 'ItemCard/ESTRELLA_ICON';

const ItemCard = (props) => {

    const {
       title,
        isIcon,
        text,
    } = props
    return(
        <div className="card-contain">
            <div className="card-item">
                <h2 className="card-title">{title}</h2>
                <h3 className=" card-text col-md">{text}</h3>
                {isIcon === SPIDERMAN_ICON && (
                    <img src={Assets.images.spiderman} className="card-image" alt="cojineSpiderman" />
                )}
                {isIcon === PINGUINO_ICON && (
                    <img src={Assets.images.imagePinguino} className="card-image" alt="cojinePinguino" />
                )}
                {isIcon === ESTRELLA_ICON && (
                    <img src={Assets.images.imageCojinStart} className="card-image" alt="cojineStar" />
                )}
            </div>
        </div>
    );
};

ItemCard.propTypes = {
    title: PropTypes.string.isRequired,
    isIcon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

ItemCard.defaultProps = {};

export default ItemCard;
