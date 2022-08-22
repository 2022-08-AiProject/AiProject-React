import { Card, CardBody, CardTitle, Table, FormGroup, Input } from "reactstrap";
import './Tables.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import React, { useState, useEffect,Component } from "react";
import axios from "axios";
import Map from './Map.js'
var foodend_list = [];


// 전체 리스트
var name = [];
var foodname = [];
var price = [];
var score = [];
var location = [];
let category = [];

// 출력할 리스트
var printName = [];
var printFoodname = [];
var printPrice = [];
var printScore = [];
var printLocation = [];


  axios.get('http://localhost:8000/users/foodends/')
.then((response)=>{
// foodend_list.push(response)
// console.log(foodend_list)
// test2.push(response)
// console.log(response.data[0].foodname);
// console.log(response.data[0].foodname);
// for (시작할 값 ; 끝날 값 ; 증가/감소량)
for (var i=0; i<response.data.length;i++){ 
  // name.push(response.data[i].name);
  name.push([response.data[i].name]);
  foodname.push(response.data[i].foodname);
  price.push(response.data[i].price);
  score.push(response.data[i].score);
  location.push(response.data[i].location);
  category.push(response.data[i].category);
  // console.log("["+i+"]"+category[i])

}

// 조건에 맞는 인덱스 번호 검색
var idx = category.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = category.indexOf(element, idx + 1);
}
console.log(indices);
console.log(category)

// // printList에 값 넣기
// for (var i=0; i<indices.length; i++){
//   printName.push(name[indices[i]]);
// }
// console.log("이름 출력 >>>")
// // console.log(printName);
// console.log("가게이름 : " + printName[0]);
}).catch((error)=>{
console.log(error);
})


var indices = []; // 인덱스 번호 저장할 리스트
var element = '한식';




// console.log("++++가게이름 : " + printName[0]);

const Tables = () => {
  let tableData =[ // 5개 출력 한식만
  {
    menu: '연탄불막창',
    price: '14500',
    score: '5.0',
    name: '호랑이곱창',
    address: '광주광역시 동구 지산동 510-6'
  },
  {
    menu: '김치찌개',
    price: '7900',
    score: '5.0',
    name: '킹치찌개찜-조대점',
    address: '광주광역시 동구 서석동 468-31'
  },
  {
    menu: '야채 비빔밥',
    price: '7000',
    score: '5.0',
    name: '더비빔-광주조선대점',
    address: '광주광역시 동구 지산동 521-6'
  },
  {
    menu: '닭한마리칼국수',
    price: '22000',
    score: '5.0',
    name: '진닭한마리칼국수-동구',
    address: '광주광역시 동구 서석동 20-7'
  },
  {
    menu: '삼겹살비빔밥',
    price: '8500',
    score: '5.0',
    name: '더비빔-광주조선대점',
    address: '광주광역시 동구 지산동 521-6'
  },
];
//   let tableData =[ // 5개 출력 양식 한식 가격
//   {
//     menu: '연탄불곱창',
//     price: '13500',
//     score: '5',
//     name: '호랑이곱창',
//     address: '광주광역시 동구 산수동 558-35 1층'
//   },
//   {
//     menu: '스팸김치찌개',
//     price: '11000',
//     score: '4.9',
//     name: '참진김치찌개',
//     address: '광주광역시 동구 산수동 558-35 1층'
//   },
//   {
//     menu: '페퍼로니피자',
//     price: '13900',
//     score: '4.9',
//     name: '피자나라치킨공주-광주조선대점',
//     address: '광주광역시 동구 지산동 514-2'
//   },
//   {
//     menu: '하와이피자',
//     price: '13000',
//     score: '4.9',
//     name: '피자알볼로-동광주점',
//     address: '광주광역시 북구 우산동 258-3'
//   },
//   {
//     menu: '영양닭죽',
//     price: '8400',
//     score: '4.5',
//     name: '앗뜨죽-광주남구점',
//     address: '광주광역시 남구 백운동 686 휴먼시아3단지아파트 2층 201호'
//   },
// ];
// let tableData =[ // 5개 출력
// {
//   menu: '연탄불막창',
//   price: '14500',
//   score: '5.0',
//   name: '호랑이곱창',
//   address: '광주광역시 동구 지산동 510-6'
// },
// {
//   menu: '김치찌개',
//   price: '7900',
//   score: '5.0',
//   name: '킹치찌개찜-조대점',
//   address: '광주광역시 동구 서석동 468-31 서석동'
// },
// {
//   menu: '야채 비빔밥',
//   price: '7000',
//   score: '5.0',
//   name: '더비빔-광주조선대점',
//   address: '광주광역시 동구 지산동 521-6'
// },
// {
//   menu: '닭한마리칼국수',
//   price: '22000',
//   score: '5.0',
//   name: '진닭한마리칼국수-동구점',
//   address: '광주광역시 동구 서석동 20-7 1층'
// },
// {
//   menu: '매운등갈비찜',
//   price: '25000',
//   score: '5.0',
//   name: '광주광역시 동구 서석동 20-7 1층',
//   address: '진닭한마리칼국수-동구점'
// },
// ];
  // console.log(document.body)
// 1. 전체 리스트에서 조건 추려서 출력할 리스트에 5개만 넣음
// 2. tableData에 print~ 리스트의 값 출력
// localStorage.setItem('select', cSelected);
// console.log('select >>> ' + select);
let select = localStorage.getItem("name");
  console.log(select)
  if (select == '1'){
    console.log('참입니다')
  } else{
    console.log('아닙니다')
  }

// console.log(Map(tableData))
// 표 내용

  let token = localStorage.getItem("token");
  let [auth, setAuth] = useState(token);
  useEffect(() => { // 토큰 값이 있으면(로그인 상태면) auth값을 true로 변경
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
            <div className='card-title-div'>
              <CardTitle tag="h5">추천 식당 목록</CardTitle>
            </div>
            <div className="map-option-div">
              {/* 옵션 */}
              {auth ? (
                <FormGroup>
                  <Input
                    id="exampleSelect"
                    name="select"
                    type="select"
                  >
                    <option selected>
                      별점 순으로 정렬
                    </option>
                    <option>
                      가격이 낮은 순으로 정렬
                    </option>
                  </Input>
                </FormGroup>
              ) : ( // 로그인 하지 않았을 때 옵션 목록
                <FormGroup>
                  <Input
                    id="exampleSelect"
                    name="select"
                    type="select"
                  >
                    <option selected>
                      로그인 후 이용 가능합니다
                    </option>
                  </Input>
              </FormGroup>
              )}
            </div>
          </div>
          <Table className="no-wrap mt-3 align-middle table-table" responsive borderless>
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
              {tableData.map((tdata, index) => (
                <tr key={index} className="border-top table-tr">
                  <td>
                    <div className="d-flex align-items-center p-2">
                        <h6 className="mb-0">{tdata.menu}</h6>
                    </div>
                  </td>
                  <td>{tdata.price}</td>
                  <td>
                    {tdata.score}
                  </td>
                  <td>{tdata.name}</td>
                  <td>
                    <span value={tdata.address}>
                      {tdata.address}
                    </span>
                    <CopyToClipboard text={tdata.address} onCopy={()=>alert("주소 복사 성공!")} className="copy-button">
                      {/* 복사 아이콘 */}
                        <img className="copy-img" src="../images/copy.png" alt="복사 버튼" id='copy-img'/>
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

export default Tables;
