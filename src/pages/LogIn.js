import {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../App.css'
import {Link, useNavigate} from "react-router-dom";
import {request, delay} from "../components/request";

const LogIn = () => {


    const [logged, setLogged] = useState(null)

    const onPress = async e => {
        e.preventDefault()
        const req = {email: e.target.mail.value, password:  e.target.pass.value}
        const body = await request(req, "POST");

        console.log(body)
        console.log("token: " + body.token)
        if (body.token) {
            setLogged("loged in :). Redirecting...");
            await delay(3000)
            routeChange("/signup")
        } else {
            setLogged(body.msg);
        }
    }

    let navigate = useNavigate();
    const routeChange = (path) =>{
        navigate(path);
    }

    return (
        <header >
            <p align='middle'>
                Login to FIUBER office
            </p>

            <Form id='login' variant="dark" onSubmit={onPress}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="mail" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="pass" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button> <br/>

                <Link  to={'/signup'}>¿Todavía no tenes cuenta? Create una</Link>

                <h1>{logged}</h1>

            </Form>
        </header>
    )
}

export default LogIn