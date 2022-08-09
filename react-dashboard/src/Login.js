import './Login.css';
import {Form, FormGroup, Input, Label, Button} from "reactstrap";
import { Link } from "react-router-dom";

function Login(){
    return(
        <div className="login-div">
            <div className="form-div">
                <h5>로그인</h5>
                <hr />
                <Form inline>
                    <FormGroup floating>
                    <Input
                        id="loginId"
                        name="loginId"
                        placeholder="Id"
                        type="text"
                    />
                    <Label for="loginId">
                        아이디
                    </Label>
                    </FormGroup>
                    {' '}
                    <FormGroup floating>
                    <Input
                        id="loginPassword"
                        name="loginPassword"
                        placeholder="Password"
                        type="password"
                    />
                    <Label for="loginPassword">
                        비밀번호
                    </Label>
                    </FormGroup>
                    {' '}
                    <Button className='login-btn'>
                    로그인
                    </Button>
                </Form>
                <div className='join-div'>
                    <Link to='/join'>
                    <span className='join-link'>회원가입</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;