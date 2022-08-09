import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Nav,
  NavItem,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Button,
} from "reactstrap";
import user1 from "./assets/images/users/user.png";
import './Header.css'

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const Handletoggle = () => {
    setIsOpen(!isOpen);
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
            <span> User님 환영합니다! </span>
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
              <DropdownItem>My Profile</DropdownItem>
              <DropdownItem>Logout</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          {/* 드롭다운 종료 */}
        </div>
      </Collapse>
    </Navbar>
  );
};

export default Header;
