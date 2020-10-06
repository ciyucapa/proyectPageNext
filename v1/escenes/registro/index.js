import React, {useState} from 'react';
import {ErrorMessage, Form, Formik} from 'formik';
import {EMAIL_ICON, PASSWORD_ICON} from '../../component/commons/image';
import InputField from '../../component/commons/input';

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
        <div>
            <div className="box-login">
                <h1 className="form-title">User register</h1>
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
                          isValid,
                      }) => (
                        <Form>
                            <InputField placeholder={"Email..."} type={"email"} name={"email"} isIcon={EMAIL_ICON}/>
                            <ErrorMessage name="email" component="div" />
                            <InputField placeholder={"Password..."} type={!isShow ? "password" : "text"} name={"password"} isIcon={PASSWORD_ICON} isShowIcon={!isShow} onClick={handleClick}/>
                            <ErrorMessage name="password" component="div" />
                            <InputField type={!isShowTwo ? "password" : "text"} name={"confirmPassword"} placeholder={"confirm password..."} isIcon={PASSWORD_ICON} isShowIcon={!isShowTwo} onClick={handleClickTwo}/>
                            <ErrorMessage name="confirmPassword" component="div" />

                            <button type="submit" disabled={isSubmitting || isValid}>
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default Register;
