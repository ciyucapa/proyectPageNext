import React from 'react'
import Navigation from "../navigation";
import styles from "../../styles/Login.module.css";
import {Formik, Form, Field, ErrorMessage} from 'formik'

export default function Login() {

    return (
        <div>
            <Navigation/>
                <div className={styles.box}>
                    <img src="/logiin.png" style={{width:150, height:150 }} />
                    <h1 className={styles.title}>Login In</h1>
                <Formik
                    initialValues={{ email: '', password: '' }}

                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Required';
                        }
                        if (values.password.length > 3 ) {
                           errors.password = "debe ser mayor a 3 digitos"
                        }
                        return errors;
                    }}

                    onSubmit = { (values) => {
                        console.log(values)
                    }}
                >
                    {({
                          values,
                          errors,
                          isSubmitting,
                          isValid,
                      }) => (
                    <Form>
                        <label >Email
                            <Field type="email" name="email" className={styles.input}  />
                        </label>
                            <ErrorMessage name="email" component="div" />
                        <label >Password
                            <Field type="password" name="password" className={styles.input} />
                        </label>
                            <ErrorMessage name="password" component="div" />
                            <button
                                type="submit"
                                disabled={isSubmitting || isValid }
                                className={styles.boton}
                            >
                                Enviar
                            </button>

                    </Form>
                )}
            </Formik>
            </div>
        </div>
    );
};
