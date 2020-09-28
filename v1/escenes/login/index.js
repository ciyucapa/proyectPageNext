import React from 'react'

import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

const Login = () => {

    return (
        <div>
            <div className="box-login">
                <img src="/login.png" style={{width:150, height:150 }} alt="login"/>
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
                            errors.password = 'Debe ser Mayor a 5 digitos';
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
                            <Field type="email" name="email"/>
                            <ErrorMessage name="email" component="div" className="error" />
                            <Field type="password" name="password"/>
                            <ErrorMessage name="password" component="div" className="error" />
                            <button type="submit" disabled={isSubmitting}>
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
