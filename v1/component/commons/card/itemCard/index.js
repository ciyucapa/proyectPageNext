import PropTypes from 'prop-types';

export const SPIDERMAN_ICON = 'ItemCard/SPIDERMAN_ICON';
export const PINGUINO_ICON = 'ItemCard/PINGUINO_ICON';
export const ESTRELLA_ICON = 'ItemCard/ESTRELLA_ICON';

const ItemCard = (props) => {

    const {
       title,
        src,
        text,
    } = props
    return(
        <div className="card-contain">
            <div className="card-item">
                <h2 className="card-title">{title}</h2>
                <h3 className=" card-text col-md">{text}</h3>
                {src === SPIDERMAN_ICON && (
                    <img src={'/spiderman.jpg'} className="card-image" alt="cojines" />
                )}
                {src === PINGUINO_ICON && (
                    <img src={'/pinguino.jpg'} className="card-image" alt="cojines" />
                )}
                {src === ESTRELLA_ICON && (
                    <img src={'/start.jpg'} className="card-image" alt="cojines" />
                )}
            </div>
        </div>
    );
};

ItemCard.propTypes = {
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

ItemCard.defaultProps = {};

export default ItemCard;
