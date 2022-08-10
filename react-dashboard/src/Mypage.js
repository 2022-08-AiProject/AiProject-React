import {Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem, Button} from "reactstrap";
import './Mypage.css';
import React, {useState} from "react";


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

    return(
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
                <span id='user-name'>이름</span>
                <span className='bracket'>&#40;</span>
                <span id='user-id'>testId</span>
                <span className='bracket'>&#41;</span>
                </ListGroupItem>

                <ListGroupItem className='menulist-group'>
                <CardText className="menulist-text">내가 좋아하는 메뉴</CardText>
                <p className='menulist-menu' id='mypage-menu1'>menu1</p>
                <p className='menulist-menu' id='mypage-menu2'>menu2</p>
                <p className='menulist-menu' id='mypage-menu3'>menu3</p>
                </ListGroupItem>
            </ListGroup>
            <CardBody>
                <Button className='mypage-btn' onClick={changeModify}>수정</Button>
            </CardBody>
            </Card>
        </div>
    );
    
};

export default Mypage;