import { Link } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Nav,
  NavItem,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Button,
} from "reactstrap";
import user1 from "./assets/images/users/user.png";
import "./Header.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  // const [users, setUsers] = useState("");
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const Handletoggle = () => {
    setIsOpen(!isOpen);
  };

  // Mypage 이동
  const changeMypage = () => {
    document.location.href = "#/mypage";
  };
  // Login 이동
  const changeLogin = () => {
    document.location.href = "#/login";
  };

  // 알림창
  const alertLogin = () => {
    alert("먼저 로그인 해주세요.");
  };

  // 토큰
  let token = localStorage.getItem("token");
  const [auth, setAuth] = useState(token);
  console.log("token: " + auth);

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, []);

  // fetch to axios 수정
  const handleLogout = () => {
    // let token = localStorage.getItem('token')

    axios.get("http://localhost:8000/users/logout/").then((res) => {
      localStorage.removeItem("token");
      setAuth(false);
      console.log("logout : " + auth);
      window.location.replace("/");
      // localStorage.clear()
      // // 사용하려면 App.js에서 /로 라우팅해야 한다
      // window.location.replace('/')
    });
  };

  const getUser = () => {
    let token = localStorage.getItem("token");
    axios
      .get("http://localhost:8000/users/user", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <Navbar color="light" expand="md">
      <div className="hstack gap-2">
        <Button
          color="light"
          size="sm"
          className="d-sm-block d-md-none"
          onClick={Handletoggle}
        >
          {isOpen ? (
            <i className="bi bi-x"></i>
          ) : (
            <i className="bi bi-three-dots-vertical"></i>
          )}
        </Button>
      </div>

      <Collapse navbar isOpen={isOpen}>
        {/* 로고 */}
        <Nav className="me-auto" navbar>
          <NavItem>
            <Link to="/starter" className="title-link">
              🍽️ 맛있는 일주일
            </Link>
          </NavItem>
        </Nav>
        <div className="user-div">
          {/* 로그인/회원 닉네임 */}
          <Nav className="nickname">
            {auth ? (
              <Link to="#/mypage" className="login-link">
                {" "}
                {getUser.last_name}님 환영합니다!{" "}
              </Link>
            ) : (
              <Link to="/login" className="login-link">
                {" "}
                로그인하기{" "}
              </Link>
            )}
          </Nav>
          {/* 아이콘 */}
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle color="light">
              <img
                src={user1}
                alt="profile"
                className="rounded-circle"
                width="30"
              ></img>
            </DropdownToggle>
            {/* 아이콘 드롭다운 */}
            <DropdownMenu>
              <DropdownItem header>Info</DropdownItem>
              {auth ? (
                <DropdownItem className="mypage-menu" onClick={changeMypage}>
                  My Page
                </DropdownItem>
              ) : (
                <DropdownItem className="mypage-menu" onClick={alertLogin}>
                  My Page
                </DropdownItem>
              )}

              {auth ? (
                <DropdownItem className="logout-menu" onClick={handleLogout}>
                  Logout
                </DropdownItem>
              ) : (
                <DropdownItem className="logout-menu" onClick={changeLogin}>
                  Login
                </DropdownItem>
              )}
            </DropdownMenu>
          </Dropdown>
          {/* 드롭다운 종료 */}
        </div>
      </Collapse>
    </Navbar>
  );
}

export default Header;
