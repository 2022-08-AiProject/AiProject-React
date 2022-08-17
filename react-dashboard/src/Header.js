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
import './Header.css';
import axios from "axios";
import React, { useState, useEffect } from 'react';

function Header(props) {
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
  const changeMypage= () =>{
    document.location.href = '#/mypage';
  }
  // Login 이동
  const changeLogin= () =>{
    document.location.href = '#/login';
  }

  // 알림창
  const alertLogin= () => {
    alert('먼저 로그인 해주세요.');
  }

  // 토큰
  const [auth, setAuth] = useState('')

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      setAuth(true)
    }
  }, [])

  // fetch to axios 수정 
  const handleLogout = () => {
    // let token = localStorage.getItem('token')

    axios.get('http://localhost:8000/users/logout/')
      .then(res => {
        if(res.data.success){
          props.history.push('/');
        } else {
          alert('로그아웃 실패');
        }
        // localStorage.clear()
        // // 사용하려면 App.js에서 /로 라우팅해야 한다
        // window.location.replace('/')
      });
  }

  // 유저 이름
  const [username, setUsername] = useState("User");

  const getUser = () => {
    let token = localStorage.getItem('token')
    axios.get('http://localhost:8000/users/user', {headers:{"Authorization": `Bearer ${token}`}})
      .then(res => {
        console.log(res.data)
      })
  }

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
            { auth ? 
            <Link to="/login" className="login-link"> 로그인하기 </Link>
            :
            <Link to="#/mypage" className="login-link"> {username}님 환영합니다! </Link>
            }
            
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
              { auth ? 
              <DropdownItem className="mypage-menu" onClick={alertLogin}>My Page</DropdownItem>
              :
              <DropdownItem className="mypage-menu" onClick={changeMypage}>My Page</DropdownItem>
              }
              
              { auth ? 
              <DropdownItem className="logout-menu" onClick={changeLogin}>Login</DropdownItem>
              :
              <DropdownItem className="logout-menu" onClick={handleLogout}>Logout</DropdownItem>
              }
            </DropdownMenu>
          </Dropdown>
          {/* 드롭다운 종료 */}
        </div>
      </Collapse>
    </Navbar>
  );
};

export default Header;
