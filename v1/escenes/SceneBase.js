import PropTypes from 'prop-types';
import React from 'react'

import Navigation from "../component/commons/navigation";
import Footer from "../component/commons/Footer";

const SceneBase = (props) => {
    const {Child} = props;
    return (
        <div>
            <Navigation />
            <Child />
            <footer>
                <Footer/>
            </footer>
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
