
import {ErrorMessage, Field, Form, Formik} from "formik";

const Register = () => {
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
                        if(values.password.length < 5){
                            errors.password = 'Debe ser Mayor a 5 digitos';
                        }
                        if(values.confirmPassword === values.password){
                            errors.confirmPassword = 'es igual a la contraseña'
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
                                <Field type="email" name="email" />
                                <ErrorMessage name="email" component="div" />
                                <Field type="password" name="password" />
                                <ErrorMessage name="password" component="div" />
                                <Field type="password" name="confirmPassword" />
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
