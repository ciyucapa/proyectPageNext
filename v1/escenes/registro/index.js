import React, {useState} from 'react';
import {ErrorMessage, Form, Formik} from 'formik';

import {EMAIL_ICON, PASSWORD_ICON} from '../../component/commons/image';
import InputField from '../../component/commons/input';
import Container from "../../component/commons/container";
import SceneBase from "../SceneBase";

const Register = () => {

    const [isShow, setShow] = useState(false);
    const [isShowTwo, setShowTwo] = useState(false);

    const handleClick = () => {
        setShow(!isShow);
    }

    const handleClickTwo = () => {
        setShowTwo(!isShowTwo);
    }

    return (
        <Container>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center', width: '100%', height: '100%', marginTop: 150, textAlign: 'center'}} >
                <h1>User register</h1>
                <Formik
                    initialValues={{ email: '', password: '', confirmPassword: '' }}

                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        if (values.password.length < 5){
                            errors.password = 'the password must be greater than 5 digits';
                        }
                        if (values.confirmPassword === values.password) {
                            errors.confirmPassword = 'must be equal to the password'
                        }
                        return errors;
                    }}

                    onSubmit = { (values) => {
                        console.log(values)
                    }}
                >
                    {({
                          isSubmitting,

                      }) => (
                        <Form style={{display: 'center', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', padding: 10}}>
                            <InputField placeholder={"Email..."} type={"email"} name={"email"} isIcon={EMAIL_ICON}/>
                            <ErrorMessage name="email" component="div" style={{color: 'red', paddingBottom:5, paddingTop: 5}}/>
                            <InputField placeholder={"Password..."} type={!isShow ? "password" : "text"} name={"password"} isIcon={PASSWORD_ICON} isShowIcon={!isShow} onClick={handleClick}/>
                            <ErrorMessage name="password" component="div" style={{color: 'red', paddingBottom:5, paddingTop: 5}} />
                            <InputField type={!isShowTwo ? "password" : "text"} name={"confirmPassword"} placeholder={"confirm password..."} isIcon={PASSWORD_ICON} isShowIcon={!isShowTwo} onClick={handleClickTwo}/>
                            <ErrorMessage name="confirmPassword" component="div" style={{color: 'red', paddingBottom:5, paddingTop: 5}} />

                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </Container>
    );
};

export default SceneBase(Register);
