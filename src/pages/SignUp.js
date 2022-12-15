import {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../App.css'
import {Link} from "react-router-dom";
import {Requester} from "../utils/request";

const SignUp = () => {

    const [logged, setLogged] = useState(null)
    const onPress = async e => {
        e.preventDefault()
        console.log(e.target.date.value)
        const req = {
            email: e.target.mail.value,
            password: e.target.pass.value,
            birthDate: e.target.date.value,
            name: e.target.name.value,
            lastName: e.target.lastname.value
        }
        console.log("Request:" + req)
        const body = await Requester.signup(req);
        console.log(body)
        if (body.token) {
            setLogged("New admin registered");
        } else {
            if( body.err && !(body.code === "SERVER_ERROR")) {
                setLogged(body.msg);
            } else {
                setLogged("failed to register new admin");
            }
        }
    }

    return (
        <header >
            <p align='middle'>
                Sign up new fiuber admin
            </p>

            <Form id='login' variant="dark" onSubmit={onPress}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="mail" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        Use the new admin email, not yours.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="New admin name" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Lastname</Form.Label>
                    <Form.Control type="text" name="lastname" placeholder="New admin lastname" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>New admin birthday</Form.Label>
                    <Form.Control type="date" name="date" placeholder="" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="pass" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <h4>{logged}</h4>

            </Form>
        </header>
    )
}

export default SignUp
