import PropTypes from 'prop-types';
import React from 'react'

import NavBar from "../component/navigation";

const SceneBase = (props) => {
    const {Child} = props;
    return (
        <div>
            <NavBar/>
            <Child />
        </div>
    );
};

SceneBase.propTypes = {
    Child: PropTypes.shape({}).isRequired,
};

SceneBase.defaultProps = {};

export default (Child) => {
    return class extends React.Component {
        static getInitialProps(ctx) {
            if(Child.getInitialProps)
                return Child.getInitialProps(ctx);
        }
        render() {
            return <SceneBase Child={Child} />
        }

    };
};
