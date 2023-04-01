import { Card, CardBody, CardTitle, Table, FormGroup, Input } from "reactstrap";
import "./Tables.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import Map from "./Map.js";
import { connect } from "react-redux";
// import FullLayout from './FullLayout';


const Tables = (props) => {
  console.log(props)
  const [content, setContent] = useState([])
  
  useEffect(() => {
    setContent(props.contents)    
  },[props.contents])
  // 1. 전체 리스트에서 조건 추려서 출력할 리스트에 5개만 넣음
  // 2. tableData에 print~ 리스트의 값 출력
  // localStorage.setItem('select', cSelected);
  // console.log('select >>> ' + select);
  let select = localStorage.getItem("name");
  console.log(select);
  if (select == "1") {
    console.log("참입니다");
  } else {
    console.log("아닙니다");
  }

  // console.log(Map(tableData))
  // 표 내용

  let token = localStorage.getItem("token");
  let [auth, setAuth] = useState(token);
  useEffect(() => {
    // 토큰 값이 있으면(로그인 상태면) auth값을 true로 변경
    if (localStorage.getItem("token") !== null) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, []);
  return (
    <div>
      <Card className="table-card">
        <CardBody>
          <div className="table-title-div">
            <div className="card-title-div">
              <CardTitle tag="h5">추천 식당 목록</CardTitle>
            </div>
            <div className="map-option-div">
              {/* 옵션 */}
              {auth ? (
                <FormGroup>
                  <Input id="exampleSelect" name="select" type="select">
                    <option selected>별점 순으로 정렬</option>
                    <option>가격이 낮은 순으로 정렬</option>
                  </Input>
                </FormGroup>
              ) : (
                // 로그인 하지 않았을 때 옵션 목록
                <FormGroup>
                  <Input id="exampleSelect" name="select" type="select">
                    <option selected>로그인 후 이용 가능합니다</option>
                  </Input>
                </FormGroup>
              )}
            </div>
          </div>
          <Table
            className="no-wrap mt-3 align-middle table-table"
            responsive
            borderless
          >
            <thead>
              <tr>
                <th>메뉴</th>
                <th>가격</th>
                <th className="table-score">별점</th>
                <th>식당명</th>
                <th>위치</th>
              </tr>
            </thead>
            <tbody>
              {content.map((tdata, index) => (
                <tr key={index} className="border-top table-tr">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <h6 className="mb-0">{tdata.foodname}</h6>
                    </div>
                  </td>
                  <td>{tdata.price}</td>
                  <td>{tdata.score}</td>
                  <td>{tdata.name}</td>
                  <td>
                    <span value={tdata.address}>{tdata.address}</span>
                    <CopyToClipboard
                      text={tdata.address}
                      onCopy={() => alert("주소 복사 성공!")}
                      className="copy-button"
                    >
                      {/* 복사 아이콘 */}
                      <img
                        className="copy-img"
                        src="../images/copy.png"
                        alt="복사 버튼"
                        id="copy-img"
                      />
                    </CopyToClipboard>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state)
  return {
    contents : state.sub_contents
  }
}



export default connect(
  mapStateToProps
)(Tables);
