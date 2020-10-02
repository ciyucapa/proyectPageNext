import React, {useState} from 'react';
import {Field} from 'formik';
import PropTypes from 'prop-types';
import {Assets} from "../../../resourser";

export const EMAIL_ICON = 'InputField/EMAIL_ICON';
export const PASSWORD_ICON = 'InputField/PASSWORD_ICON';
export const TEXT_ICON = 'InputField/TEXT_ICON';

const InputField = (props) => {

    const [isShow, setShow] = useState(false);
    const [isShowIcon, setShowIcon] = useState(false);
    const handleShow = () => {
        setShow(!isShow);
        setShowIcon(!isShowIcon);
    }

    const {
        type,
        name,
        placeholder,
        isIcon,
    } = props

    return(
    <div style={{display: 'flex', justifyContent: 'center', backgroundColor: '#f6f6f6', marginTop:10, border: '2px solid #A5AFAA', width: '100%', borderRadius: 50, padding: 5}}>
        <Field type={type} name={name} placeholder={placeholder} style={{border: 'none', outline: 'none'}}/>
        { isIcon === TEXT_ICON && (
            <img src={Assets.images.username} alt='icon-user' style={{opacity:0.5, width: 25, height:25}}/>
        )}
        { isIcon === EMAIL_ICON && (
            <img src={Assets.images.email} alt='icon-user' style={{marginLeft: 5, opacity:0.5, width: 25, height:25}}/>
        )}
        { isIcon === PASSWORD_ICON &&(
            <img src={isShowIcon ? 'visible.png' : 'visible-ocultar.png'} alt='icon-user' onClick={handleShow} style={{opacity:0.5, width: 25, height:25}}/>
        )}
    </div>
    );
};

InputField.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    isIcon: PropTypes.bool.isRequired,
};

InputField.defaultProps = {}

export default InputField
