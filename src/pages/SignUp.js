import {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../App.css'
import {Link} from "react-router-dom";

const SignUp = () => {

    const [logged, setLogged] = useState(null)
    const onPress = async e => {
        e.preventDefault()
        const mail = e.target.mail.value;
        const pass = e.target.pass.value;
        console.log(mail)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({username: mail, password: pass})
        };
        const res = await fetch("https://fiuber-api-gateway.herokuapp.com" + '/login/signup', requestOptions);
        const response = await res.json();
        console.log(response)
        if (res.login) {
            setLogged("loged in");
        } else {
            setLogged("unable to login");
        }
    }

    return (
        <header >
            {/*<img src={logo} className="App-logo" alt="logo"/ >*/}
            <p align='middle'>
                FIUBER
            </p>
            {/*<form>
                <label>
                    user:
                    <input type="user" name="name"/>
                </label> <br/>
                <label>
                    password:
                    <input type="password" name="name"/>
                </label> <br/>
                <input onClick={() => onPress()} type="button" value="Log in"/>
                <h1>{logged}</h1>
            </form>*/}

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
                {/*<Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>*/}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <h1>{logged}</h1>

                <Link  to={'/login'}>¿Ya tenes una cuenta? Accedé acá</Link>
            </Form>
        </header>
    )
}

export default SignUp