import React from 'react'

import {Formik, Form, Field, ErrorMessage} from 'formik';
import SceneBase from "../SceneBase";

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
                        }
                        if (values.password.length > 8 ) {
                            errors.password = "must be greater than 8 characters"
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
                            <label>Email
                                <Field type="email" name="email" className="input"/>
                            </label>
                            <ErrorMessage name="email" component="div" className="error"/>
                            <label>Password
                                <Field type="password" name="password" className="input"/>
                            </label>
                            <ErrorMessage name="password" component="div" className="error"/>
                            <button
                                type="submit"
                                disabled={isSubmitting || isValid }
                                className="button"
                            >
                                Send
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
};

export default SceneBase(Login);
