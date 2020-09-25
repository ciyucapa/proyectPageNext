import PropTypes from 'prop-types';

const Container = (props) => (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{width: '100%', maxWidth: 1400, display: "flex", justifyContent: "center", alignItems: "center"}}>
            {props.children}
        </div>
    </div>
);

Container.propTypes = {
    children: PropTypes.shape({}).isRequired,
};

Container.defaultProps = {};

export default Container;
