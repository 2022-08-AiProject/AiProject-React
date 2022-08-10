import {Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem, Button, Input} from "reactstrap";
import './Modify.css';
import React, {useState} from "react";


function Modify(){

    return(
        <div className='modify-div'>
            <Card>
            <CardBody>
                <CardTitle tag="h5">
                    내 정보 수정
                </CardTitle>
            </CardBody>
            <ListGroup flush>
                <ListGroupItem>
                <div className="modify-name-div">
                <span id='modify-name'>이름</span>
                <span className='bracket'>&#40;</span>
                <span id='modify-id'>testId</span>
                <span className='bracket'>&#41;</span>
                </div>
                <hr />
                <CardText className='pwchange-text'>비밀번호 변경</CardText>
                <Input type='text' placeholder='비밀번호 입력' id='pw' className='modify-input'></Input>
                <Input type='text' placeholder='비밀번호 확인' id='pwcheck' className='modify-input'></Input>
                </ListGroupItem>

                <ListGroupItem className='menulist-group'>
                <CardText className="menulist-text">내가 좋아하는 메뉴</CardText>
                <Input type='text' placeholder='좋아하는 메뉴 입력' className='modify-input'></Input>
                <Input type='text' placeholder='좋아하는 메뉴 입력' className='modify-input'></Input>
                <Input type='text' placeholder='좋아하는 메뉴 입력' className='modify-input'></Input>
                </ListGroupItem>
            </ListGroup>
            <CardBody>
                <Button className='modify-btn'>수정</Button>
            </CardBody>
            </Card>
        </div>
    );
    
};

export default Modify;