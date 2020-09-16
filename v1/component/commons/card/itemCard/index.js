import PropTypes from 'prop-types';

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
                <h3>{text}</h3>
                <img src={src} className="card-image" />
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
