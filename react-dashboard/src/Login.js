import "./Login.css";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";
import React, { useState, useEffect } from "react";

function Login() {
  // django 연결
  const [id, setId] = useState(""); // 아이디
  const [password, setPassword] = useState(""); // 비밀번호

  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      // window.location.replace('http://localhost:3000/');
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    const user = {
      username: id,
      password: password,
    };

    axios
      .post("http://localhost:8000/users/login/", user)
      .then((res) => {
        if (res.data.token) {
          console.log(res.data.token);
          localStorage.clear();
          localStorage.setItem("token", res.data.token);
          // 사용하려면 App.js에서 /로 라우팅해야 한다
          window.location.replace("/");
        } else {
          setId("");
          setPassword("");
          localStorage.clear();
        }
      })
      .catch((err) => {
        console.clear();
        alert("아이디 또는 비밀번호가 일치하지 않습니다");
        setId("");
        setPassword("");
      });
  };

  return (
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
            <Label className="loginId">아이디</Label>
          </FormGroup>{" "}
          <FormGroup floating>
            <Input
              id="loginPassword"
              name="loginPassword"
              placeholder="Password"
              type="password"
              value={password}
              onChange={onChangePassword}
            />
            <Label className="loginPassword">비밀번호</Label>
          </FormGroup>{" "}
          <Button className="login-btn" type="submit">
            로그인
          </Button>
        </Form>
        <div className="join-btn-div">
          <Link to="/join">
            <span className="join-link">회원가입</span>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
