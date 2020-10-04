import PropTypes from 'prop-types';

const ItemFooter = (props) => {

    const {
       text,
    } = props

    return(
        <div style={{display: 'flex', flexDirection: 'row', alignContent: 'center', alignItem: 'center', cursor: 'pointer', fontWeight:'bold', marginTop: 5, marginBottom: 5}}>
            <img src='/flecha-hacia-arriba.svg' style={{width: 15, height: 15, paddingRight: 10, opacity: 0.5}}/>
            <div style={{color: '#f6f6f6'}}>{text}</div>
        </div>
    );
};

ItemFooter.propTypes = {
    text: PropTypes.string.isRequired,
};

ItemFooter.defaultProps = {};

export default ItemFooter;
