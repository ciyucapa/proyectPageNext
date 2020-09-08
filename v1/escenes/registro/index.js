import styles from "../../../styles/Login.module.css";
import {ErrorMessage, Field, Form, Formik} from "formik";
import SceneBase from "../SceneBase";

const Register = () => {
    return (
        <div>

            <div className={styles.box}>
                <h1 className={styles.title}>User register</h1>
                <Formik
                    initialValues={{ firstName: '', lastName: '', email: '', password: '', repeatPassword: '' }}
                    validate={values => {
                        const errors = {};

                        if (!values.firstName) {
                            errors.firstName = 'Required';
                        }
                        if (!values.lastName) {
                            errors.lastName = 'Required';
                        }
                        if (!values.email) {
                            errors.email = 'Required';
                        }
                        if (values.password.length < 5 ) {
                            errors.password = "must not exceed 4 digits"
                        }
                        if (values.password === values.repeatPassword ) {
                            errors.repeatPassword = "must be equal to the password"
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
                            <label>Name
                                <Field type="firstName" name="firstName" className={styles.input}  />
                            </label>
                            <ErrorMessage name="firstName" component="div" />
                            <label>LastName
                                <Field type="lastName" name="lastName" className={styles.input} />
                            </label>
                            <ErrorMessage name="lastName" component="div" />
                            <label>Email
                                <Field type="email" name="email" className={styles.input} />
                            </label>
                            <ErrorMessage name="email" component="div" />
                            <label>Password
                                <Field type="password" name="password" className={styles.input} />
                            </label>
                            <ErrorMessage name="password" component="div" />
                            <label>Repeat Password
                                <Field type="password" name="repeatPassword" className={styles.input} />
                            </label>
                            <ErrorMessage name="repeatPassword" component="div" />
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
    );
};

export default SceneBase(Register);
