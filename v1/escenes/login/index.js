import React, {useState} from 'react'
import {Formik, Form, ErrorMessage} from 'formik';

import InputField from "../../component/commons/input";
import {EMAIL_ICON, PASSWORD_ICON} from "../../component/commons/image";
import {Assets} from "../../resourser";

const Login = () => {

    const [isShow, setShow] = useState(false);

    const handleClick = () => {
        setShow(!isShow);
    }

    return (
        <div>
            <div className="box-login">
                <img src={Assets.images.loginAccess} style={{width:70, height:70 }} alt="login"/>
                <h1 className="form-title">Login In</h1>
                <Formik
                    initialValues={{ email: '', password: '' }}

                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        if(values.password.length < 5){
                            errors.password = 'must be greater than 5 digits';
                        }
                        return errors;
                    }}

                    onSubmit = { (values) => {
                        console.log(values)
                    }}
                >
                    {({
                          isSubmitting,
                          isValid,
                      }) => (
                        <Form className="form">
                            <InputField placeholder={"Email..."} type={"email"} name={"email"} isIcon={EMAIL_ICON}/>
                            <ErrorMessage name="email" component="div" className="error" />
                            <InputField placeholder={"Password..."} type={!isShow ? "password" : "text"} name={"password"} isIcon={PASSWORD_ICON} isShowIcon={!isShow} onClick={handleClick}/>
                            <ErrorMessage name="password" component="div" className="error" />
                            <button type="submit" disabled={isSubmitting} className="button">
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
};

export default Login;
