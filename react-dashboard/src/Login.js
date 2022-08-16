import './Login.css';
import {Form, FormGroup, Input, Label, Button} from "reactstrap";
import { Link } from "react-router-dom";
import Footer from './Footer';
import axios from "axios";
import React, { useState, useEffect } from 'react';

function Login(){
    // django 연결
    const [id, setId] = useState(''); // 아이디
    const [password, setPassword] = useState(''); // 비밀번호

    const onChangeId = (e) => {
        setId(e.target.value);
      };
      const onChangePassword = (e) => {
        setPassword(e.target.value);
      };

    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            // window.location.replace('http://localhost:3000/');
          }
    }, []);

    const onSubmit = e => {
        e.preventDefault();

        const user = {
            username: id,
            password: password
        };
        fetch('http://localhost:8000/users/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.key) {
                localStorage.clear();
                localStorage.setItem('token', data.key);
                window.location.replace('http://localhost:3000/');
                } else {
                setId('');
                setPassword('');
                localStorage.clear();
                }
            });
    }

    return(
        <div className="login-div">
            <div className="form-div">
                <h5>로그인</h5>
                <hr />
                <Form inline onSubmit={onSubmit}>
                    <FormGroup floating>
                    <Input
                        id="loginId"
                        name="loginId"
                        placeholder="Id"
                        type="string"
                        value={id}
                        onChange={onChangeId}
                    />
                    <Label className="loginId">
                        아이디
                    </Label>
                    </FormGroup>
                    {' '}
                    <FormGroup floating>
                    <Input
                        id="loginPassword"
                        name="loginPassword"
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={onChangePassword}
                    />
                    <Label className="loginPassword">
                        비밀번호
                    </Label>
                    </FormGroup>
                    {' '}
                    <Button className='login-btn'>
                    로그인
                    </Button>
                </Form>
                <div className='join-btn-div'>
                    <Link to='/join'>
                    <span className='join-link'>회원가입</span>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;