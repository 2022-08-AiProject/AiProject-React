import './Join.css';
import {Form, FormGroup, Input, Label, Button, FormFeedback, FormText} from "reactstrap";
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

function Join(){
    // 뒤로가기
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    return(
        <div className="join-div">
            <div className="form-div">
                <h5>회원가입</h5>
                <hr />
                <Form>
                    <Label className="join-label">
                    이름
                    </Label>
                    <Input className="join-name" type="string" autoFocus/>
                    {/* <p className="name-error">이름은 필수 입력 요소입니다.</p> */}
                    <Label className="join-label">
                    아이디
                    </Label>
                    <Input className="join-id" type="string"/>
                    <Label className="join-label">
                    비밀번호
                    </Label>
                    <Input className="join-pw" type="password"/>
                    <Label className="join-label">
                    비밀번호 확인
                    </Label>
                    <Input className="join-pwcheck" type="password"/>
                    {/* <Label className="join-label">
                    좋아하는 메뉴
                    </Label>
                    <div className="like-menu">
                        <Input className="like1" type="string"/>
                        <Input className="like2" type="string"/>
                        <Input className="like3" type="string"/>
                    </div> */}
                    {/* 가입 버튼 */}
                    <Button className='join-btn'>
                    회원가입
                    </Button>
                    <Button className='back-btn' onClick={goBack}>
                    가입취소
                    </Button>
                </Form>
            </div>
            <Footer />
        </div>
    );
};

export default Join;