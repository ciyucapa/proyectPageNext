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
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', backgroundColor: '#f6f6f6', marginTop:10, border: '2px solid #A5AFAA', width: '100%', borderRadius: 50, padding: 5}}>
        <Field type={type} name={name} placeholder={placeholder} style={{border: 'none', outline: 'none'}}/>
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
