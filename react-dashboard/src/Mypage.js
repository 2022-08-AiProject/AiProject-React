import {Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem, Button} from "reactstrap";
import './Mypage.css';
import React, {useState, useEffect} from "react";
import Footer from './Footer';
import axios from "axios";

function Mypage(){
    // 이미지 랜덤 출력 기능
    /* eslint no-restricted-globals: ["off"] */
    let randomNumber = Math.floor(Math.random() * 10); // 랜덤 숫자
    const [food, setFood] = useState('./images/food0'+randomNumber+'.jpg') // 기본값 설정
    onload = function randomImage(){ // 새로고침 시 이미지 변경
        setFood('./images/food0'+randomNumber+'.jpg');
    }
    const changeModify= () =>{
        document.location.href = '#/modify';
    }

    // 유저 아이디
    let userId = localStorage.getItem("userId"); 
    // 마이페이지 정보
    const [name, setName] = useState("이름");
    const [id, setId] = useState("testId");
    const [menu1, setMenu1] = useState("좋아하는 메뉴 1");
    const [menu2, setMenu2] = useState("좋아하는 메뉴 2");
    const [menu3, setMenu3] = useState("좋아하는 메뉴 3");
    // 마이페이지 연결
    useEffect(() => {
        axios
            .get("http://localhost:8000/users/mypage/"+userId, { // 장고 주소 적어야함
            username: userId, // 장고의 username = userId
            })
            .then((res) => {
            console.log('mypage >>> '+res.data);
            // 데이터 출력 확인 후 set~으로 정보 채워주기
            });
    }, []);
    

    return(
        <div>
            <div className='mypage-div'>
                <Card>
                <CardBody>
                    <CardTitle tag="h5">
                        마이페이지
                    </CardTitle>
                </CardBody>
                <div className='card-img-div'>
                    <img
                        alt="음식 이미지"
                        src={food}
                        className='card-img'
                        />
                </div>
                <ListGroup flush>
                    <ListGroupItem>
                    <span id='user-name'>{name}</span>
                    <span className='bracket'>&#40;</span>
                    <span id='user-id'>{id}</span>
                    <span className='bracket'>&#41;</span>
                    </ListGroupItem>

                    <ListGroupItem className='menulist-group'>
                    <CardText className="menulist-text">내가 좋아하는 메뉴</CardText>
                    <p className='menulist-menu' id='mypage-menu1'>{menu1}</p>
                    <p className='menulist-menu' id='mypage-menu2'>{menu2}</p>
                    <p className='menulist-menu' id='mypage-menu3'>{menu3}</p>
                    </ListGroupItem>
                </ListGroup>
                <CardBody>
                    <Button className='mypage-btn' onClick={changeModify}>수정</Button>
                </CardBody>
                </Card>
            </div>
            <Footer />
        </div>
    );
    
};

export default Mypage;