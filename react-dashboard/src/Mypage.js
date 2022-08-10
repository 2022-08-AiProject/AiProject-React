import {Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem, CardLink} from "reactstrap";
import './Mypage.css';

function Mypage(){
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
                    alt="Card"
                    src="./images/lunch.jpg"
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
                <ListGroupItem>
                A second item
                </ListGroupItem>
                <ListGroupItem>
                And a third item
                </ListGroupItem>
            </ListGroup>
            <CardBody>
                <CardLink href="#">
                Card Link
                </CardLink>
                <CardLink href="#">
                Another Card Link
                </CardLink>
            </CardBody>
            </Card>
        </div>
    );
};

export default Mypage;