import React, { useContext } from "react";
import { useHistory } from "react-router";
import { MyContext } from "../../context/Context.js";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { ErrorSpan } from "./StyledForm";
import Button from "../../components/Button/Button.jsx";

const initialValues = {
    email: "",
    password: ""
}

const validationSchema = Yup.object({
    email: Yup.string().required("Email required").email("Input a valid email"),
    password: Yup.string().required("Password required").min(6, "Too Short")
})

export default function LoginForm(props) {

    const { myLogin } = useContext(MyContext);
    const history = useHistory();

    const redirect = async (values) => {
        await myLogin(values)
        history.push("/home");
    }

    const onSubmit = values => {
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
                    <Form
                        className="input-container"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-evenly",
                            alignItems: "center",
                            height: "100%",
                            width: "100%"
                        }}>
                         
                        <h1>Login</h1>

                        <div
                            className="form-control"
                            style={{
                                width: "60%",
                            }}
                        >

                            <label htmlFor="email">EMAIL: </label>
                            <Field type="email"
                                placeholder={`Enter your email:`}
                                name="email"
                                id="email"
                                style={{
                                    background: "#eeeeee",
                                    borderRadius: "20px",
                                    width: "100%",
                                    height: "40px",
                                    border: "solid 2px #c20",
                                    color: "#111",
                                    padding: "0 10px",
                                    fontSize: "18px"
                                }}
                            />

                            <ErrorMessage name="email"
                                render={msg => <ErrorSpan>{msg}</ErrorSpan>}>
                            </ErrorMessage>

                        </div>

                        <div
                            className="form-control"
                            style={{
                                width: "60%"
                            }}>

                            <label>PASSWORD: </label>
                            <Field type="password"
                                placeholder={`Enter your password:`}
                                name="password"
                                id="password"
                                style={{
                                    background: "#eeeeee",
                                    borderRadius: "20px",
                                    width: "100%",
                                    height: "40px",
                                    border: "solid 2px #c20",
                                    color: "#111",
                                    padding: "0 10px",
                                    fontSize: "18px",
                                }}
                            />

                            <ErrorMessage name="password"
                                render={msg => <ErrorSpan>{msg}</ErrorSpan>}>
                            </ErrorMessage>
                        </div>

                        <Button type="submit" disabled={!formik.isValid}>LOGIN</Button>
                    </Form>
                )
            }}
        </Formik>
    )
}