import React from 'react';
import PropTypes from 'prop-types';
import {Field} from 'formik';

import ImageField from "../image";

const InputField = (props) => {

    const {
        type,
        name,
        placeholder,
        isIcon,
        onClick,
        isShowIcon,
    } = props

    return(
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignContent: 'center', alignItems: 'center', backgroundColor: '#f6f6f6', marginTop:10, marginBottom: 10, border: '2px solid #A5AFAA', borderRadius: 50, paddingLeft: 20, paddingRight: 20}}>
        <Field type={type} name={name} placeholder={placeholder} style={{border: 'none', outline: 'none', background: 'none', paddingTop: 10, paddingBottom: 10}}/>
        <ImageField isImage={isIcon} onClick={onClick} isShowIcon={isShowIcon}/>
    </div>
    );
};

InputField.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    isIcon: PropTypes.bool.isRequired,
    onClick: PropTypes.func,
    isShowIcon: PropTypes.bool,
};

InputField.defaultProps = {}

export default InputField
