import {
  Card,
  CardBody,
  ButtonGroup,
  CardTitle,
  InputGroup,
  Button,
  Input,
} from "reactstrap";
import "./Map.css";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { connect } from "react-redux";




// let test1 = ['광주광역시 동구 지산동 510-6', '광주광역시 동구 서석동 468-31 서석동', '광주광역시 동구 지산동 521-6', '광주광역시 동구 서석동 20-7 1층', '광주광역시 동구 지산동 521-6'];//한식만 눌렀을때
// let test1 = ['광주광역시 동구 지산동 510-6', '광주광역시 동구 산수동 558-35 1층', '광주광역시 동구 지산동 514-2', '광주광역시 북구 우산동 258-3', '광주광역시 남구 백운동 686 휴먼시아3단지아파트 2층 201호']//한식 양식 가격 눌렀을때
let test1 = [
  "광주 남구 백운동 590-6 1층",
  "광주광역시 동구 대인동 312-19",
  "광주광역시 동구 학동 1012 학2마을아파트 상가동 105호",
  "광주광역시 동구 지산동 507-2 1층",
  "광주광역시 남구 양림동 279-2 풍성한맛집",
]; //내가 좋아하는 메뉴

let markers = [];

function addMarker(coords, kakao, map){
  // let mapContainer = document.getElementById("map");
  // let map = new kakao.maps.Map(mapContainer, {
  //   center: new kakao.maps.LatLng(35.146304, 126.921031),
  //   level: 6,
  // });
  let imageSrc =
  "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
  let imageSize = new kakao.maps.Size(24,35);
  let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
  let marker = new kakao.maps.Marker({
    map : map,
    position : coords,
    image : markerImage,
  })
  markers.push(marker)
  return marker.setMap(map)
}

function imhere(props){
  props.onAutoChoice()
}

function setMarkers(map) {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

function textdata(e){
  console.log(e.target.value)
}



const Map = (props) => {
  const [search, setSearch] = useState('')
  const { kakao } = window;
  const geocoder = new kakao.maps.services.Geocoder();
  
  function searchfood(props, e){
    props.onSearchChoice(e.target.value)
  }

  // 데이터 불러오기
  useEffect(() => {
    axios
      .get("http://localhost:8000/users/foodends/")
      .then((response) => {
        let result = response.data.filter(
          (v, i) => response.data.findIndex((x) => x.name === v.name) === i
        );
        props.onREAD(result);
      })
      .catch((error) => {
        console.log(error.name + ": " + error.message);
      });

    // ID : map 인 태그를 찾아 지도 삽입하기
    kakao.maps.load(() => {
      let mapContainer = document.getElementById("map");
      let map = new kakao.maps.Map(mapContainer, {
        center: new kakao.maps.LatLng(35.146304, 126.921031),
        level: 6,
      });
    });

    document.getElementById("search").addEventListener("click", (e)=>searchfood(props, e));
    document.getElementById("event").addEventListener("click", ()=>imhere(props));
    
  }, []);
  //스크립트 파일 읽어오기


  useEffect(()=>{
  let mapContainer = document.getElementById("map");
  let map = new kakao.maps.Map(mapContainer, {
    center: new kakao.maps.LatLng(35.146304, 126.921031),
    level: 6,
  });
  setMarkers(null);
  for (let i in props.sub_contents){
    geocoder.addressSearch(props.sub_contents[i].location, function (result, status){
      try{
        if(status === kakao.maps.services.Status.OK){
          let coords = new kakao.maps.LatLng(
            result[0].y,
            result[0].x
          );
          addMarker(coords ,kakao, map);
          map.setCenter();
        }
      } catch(err){
          console.log(err)
      }
    })
  }
  },[props.sub_contents])
  // 분류 체크박스
  const [cSelected, setCSelected] = useState([]);
  const onCheckboxBtnClick = (selected) => {
    const index = cSelected.indexOf(selected);
    console.log(selected);
    if (index < 0) {
      cSelected.push(selected);
      props.onCategory(selected);
    } else {
      cSelected.splice(index, 1);
    }
    setCSelected([...cSelected]);
  };
  console.log(cSelected);

  // // 가격 선택
  const [rSelected, setRSelected] = useState(null);
  console.log(props.sub_contents);
  return (
    <div>
      {/* 검색창 */}
      <InputGroup className="search-bar">
        <Input className="search_bar" placeholder="메뉴 검색하기" onChange={(e)=>setSearch(e.target.value)}/>
        {/* 검색 버튼 */}
        <Button id="search" className="search-button" onClick={(e) => textdata(e)} value={search}>
          찾기
        </Button>
      </InputGroup>
      {/* 검색창 end */}
      <Button id="event" className="btn-recommend">
        추천받기
      </Button>

      {/* 분류 버튼*/}
      <ButtonGroup className="btn-food">
        <Button
          // color="primary"
          outline
          onClick={() => onCheckboxBtnClick("한식")}
          active={cSelected.includes("한식")}
        >
          한식
        </Button>
        <Button
          // color="primary"
          outline
          onClick={() => onCheckboxBtnClick("중식")}
          active={cSelected.includes("중식")}
        >
          중식
        </Button>
        <Button
          // color="primary"
          outline
          onClick={() => onCheckboxBtnClick("양식")}
          active={cSelected.includes("양식")}
        >
          양식
        </Button>
        <Button
          // color="primary"
          outline
          onClick={() => onCheckboxBtnClick("일식")}
          active={cSelected.includes("일식")}
        >
          일식
        </Button>
        <Button
          // color="primary"
          outline
          onClick={() => onCheckboxBtnClick("분식")}
          active={cSelected.includes("분식")}
        >
          분식
        </Button>
      </ButtonGroup>
      {/* 분류 버튼 end */}
      {/* 가격 버튼*/}
      <ButtonGroup className="btn-price">
        <Button
          outline
          onClick={() => setRSelected(1)}
          active={rSelected === 1}
        >
          7,000원
        </Button>
        <Button
          outline
          onClick={() => setRSelected(2)}
          active={rSelected === 2}
        >
          15,000원
        </Button>
        <Button
          outline
          onClick={() => setRSelected(3)}
          active={rSelected === 3}
        >
          25,000원
        </Button>
        <Button
          outline
          onClick={() => setRSelected(4)}
          active={rSelected === 4}
        >
          25,000원 이상
        </Button>
      </ButtonGroup>
      {/* 임시 출력용 */}
      {/* <br />
      <span>분류 선택: {JSON.stringify(cSelected)},</span>
      <span>가격 선택: {rSelected}</span> */}
      {/* 가격 버튼 end */}
      {/* 지도 */}
      <Card className="map-card">
        <CardBody>
          <div className="map-search-div">
            <CardTitle tag="h5">맛집 찾기</CardTitle>
          </div>

          <div id="map" className="map"></div>
        </CardBody>
      </Card>
      {/* 지도 end */}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    mode: state.mode,
    sub_contents: state.sub_contents,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onREAD: (test1) => dispatch({ type: "WELCOME", contents: test1 }),
    onAutoChoice: () => dispatch({ type: "AUTO_CHOICE" }),
    onCategory: (category) =>
      dispatch({ type: "CATEGORY", category: category }),
    onSearchChoice : (text) => dispatch({type : "SEARCH_CHOICE", text: text})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
