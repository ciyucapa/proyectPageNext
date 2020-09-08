import React from 'react'
import styles from "../../../styles/Login.module.css";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import SceneBase from "../SceneBase";

const Login = () => {

    return (
        <div>
            <div className={styles.box}>
                <img src="/login.png" style={{width:150, height:150 }} alt="login"/>
                <h1 className={styles.title}>Login In</h1>
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
                                <Field type="email" name="email" className={styles.input}/>
                            </label>
                            <ErrorMessage name="email" component="div" className={styles.error} />
                            <label>Password
                                <Field type="password" name="password" className={styles.input}/>
                            </label>
                            <ErrorMessage name="password" component="div" className={styles.error} />
                            <button
                                type="submit"
                                disabled={isSubmitting || isValid }
                                className={styles.button}
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
