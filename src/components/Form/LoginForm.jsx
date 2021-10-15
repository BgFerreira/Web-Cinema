import React, { useContext } from "react";
import { useHistory } from "react-router";
import { MyContext } from "../../context/Context.js";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import {StyledInput} from "./StyledInput";
import { StyledForm } from "./StyledForm";
import Footer from "../../components/InitialBox/Footer.jsx";
import Button from "../../components/Button/Button.jsx";

const initialValues = {
    email: "",
    password: ""
}

const validationSchema = Yup.object({
    email: Yup.string().required("Required").email("Invalid Input"),
    password: Yup.string().required("Required")
})

export default function LoginForm(props) {

    const { myLogin } = useContext(MyContext);
    const history = useHistory();

    const redirect = async (values) => {
        await myLogin(values)
        history.push("/home");
    }

    const onSubmit = values => {
        console.log("form data", values);
        redirect(values);
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit && redirect}
        >

            {formik => {
                return (
                    <Form className="input-container" >
                        <div className="form-control">

                            <Field type="email"
                                placeholder={`email@example.com`}
                                name="email"
                                id="email"
                            />

                            <ErrorMessage name="email">
                                {errorMsg => <div className="error">{errorMsg}</div>}
                            </ErrorMessage>

                        </div>

                        <div className="form-control">

                            <Field type="password"
                                placeholder={`***`}
                                name="password"
                                id="password"
                            />

                            <ErrorMessage name="password">
                                {errorMsg => <div className="error">{errorMsg}</div>}
                            </ErrorMessage>
                        </div>

                        <button type="submit" disabled={!formik.isValid}>ENTRAR</button>
                    </Form>
                )
            }}
        </Formik>
    )
}