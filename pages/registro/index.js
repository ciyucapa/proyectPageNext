import Navigation from "../navigation";
import styles from "../../styles/Login.module.css";
import {ErrorMessage, Field, Form, Formik} from "formik";

export default function Register() {
    return (
        <div>
            <Navigation/>
            <div className={styles.box}>
                <h1 className={styles.title}>Registro de usuario</h1>
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
                            errors.password = "no debe exceder de 4 digitos"
                        }
                        if (values.password === values.repeatPassword ) {
                            errors.repeatPassword = "debe ser igual a la contraseña"
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
                            <label >Nombres
                                <Field type="firstName" name="firstName" className={styles.input}  />
                            </label>
                            <ErrorMessage name="firstName" component="div" />
                            <label >Apellidos
                                <Field type="lastName" name="lastName" className={styles.input} />
                            </label>
                            <ErrorMessage name="lastName" component="div" />
                            <label >Correo electronico
                                <Field type="email" name="email" className={styles.input} />
                            </label>
                            <ErrorMessage name="email" component="div" />
                            <label >Constraseña
                                <Field type="password" name="password" className={styles.input} />
                            </label>
                            <ErrorMessage name="password" component="div" />
                            <label >Confirmar constraseña
                                <Field type="password" name="repeatPassword" className={styles.input} />
                            </label>
                            <ErrorMessage name="repeatPassword" component="div" />
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
