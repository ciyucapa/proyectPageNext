
import {ErrorMessage, Field, Form, Formik} from "formik";
import SceneBase from "../SceneBase";

const Register = () => {
    return (
        <div>
            <div className="box-login">
                <h1 className="form-title">User register</h1>
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
                                <Field type="firstName" name="firstName" className="input"/>
                            </label>
                            <ErrorMessage name="firstName" component="div"/>
                            <label>LastName
                                <Field type="lastName" name="lastName" className="input"/>
                            </label>
                            <ErrorMessage name="lastName" component="div"/>
                            <label>Email
                                <Field type="email" name="email" className="input"/>
                            </label>
                            <ErrorMessage name="email" component="div"/>
                            <label>Password
                                <Field type="password" name="password" className="input"/>
                            </label>
                            <ErrorMessage name="password" component="div"/>
                            <label>Repeat Password
                                <Field type="password" name="repeatPassword" className="input"/>
                            </label>
                            <ErrorMessage name="repeatPassword" component="div"/>
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
    );
};

export default SceneBase(Register);
