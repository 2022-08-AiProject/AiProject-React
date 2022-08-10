import {Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem, Button} from "reactstrap";
import './Modify';
import React, {useState} from "react";


function Modify(){

    return(
        <div className='modify-div'>
            <Card>
            <CardBody>
                <CardTitle tag="h5">
                    내 정보 수정
                </CardTitle>
            </CardBody>s
            <ListGroup flush>
                <ListGroupItem>
                <span id='user-name'>이름</span>
                <span className='bracket'>&#40;</span>
                <span id='user-id'>testId</span>
                <span className='bracket'>&#41;</span>
                </ListGroupItem>

                <ListGroupItem className='menulist-group'>
                <CardText className="menulist-text">내가 좋아하는 메뉴</CardText>
                <p className='menulist-menu' id='modify-menu1'>menu1</p>
                <p className='menulist-menu' id='modify-menu2'>menu2</p>
                <p className='menulist-menu' id='modify-menu3'>menu3</p>
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