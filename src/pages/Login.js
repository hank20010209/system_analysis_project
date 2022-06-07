import React, { useState, useRef } from 'react';
import { Form, Button, Overlay, Tooltip } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [tooltipStatus, setTooltipStatus] = useState(false);
    const naviagte = useNavigate();
    const target = useRef(null);
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const promise = await fetch('http://localhost:3030/api/users/login', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        const json = await promise.json();
        if (json.authentication) {
            props.onLogin(json);
            naviagte("/");
        } else {
            setTooltipStatus(true);
            setTimeout(() => {
                setTooltipStatus(false);
            }, 2000);
        }
        console.log(json);
    }

    return (
        <div className='login d-flex flex-row justify-content-center'>
            <Form className='login-form' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!email || !password} ref={target}>
                    登入
                </Button>
            </Form>
            <Overlay target={target.current} show={tooltipStatus} placement="right">
                {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                        帳戶或密碼不正確
                    </Tooltip>
                )}
            </Overlay>
        </div>
    )
}

export default Login;