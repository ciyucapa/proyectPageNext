import PropTypes from 'prop-types';

import ImageField from "../image";

const CardVertical = (props) => {

    const {title, text, isImage} = props

    return(
        <div className="card-contain">
            <div className="card-item">
                <h2 className="card-title">{title}</h2>
                <h3 className=" card-text col-md">{text}</h3>
                <ImageField isImage={isImage}/>
            </div>
        </div>
    );
};

CardVertical.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    isImage: PropTypes.bool.isRequired,
};

CardVertical.defaultProps = {};

export default CardVertical;
