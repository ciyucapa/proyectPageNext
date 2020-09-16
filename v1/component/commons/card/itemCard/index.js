import PropTypes from 'prop-types';

const ItemCard = (props) => {

    const {
       title,
        src,
    } = props
    return(
        <div className="card-contain">
            <h2 className="card-title">{title}</h2>
            <img src={src} className="card-image" />
        </div>
    );
};

ItemCard.propTypes = {
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
};

ItemCard.defaultProps = {};

export default ItemCard;
