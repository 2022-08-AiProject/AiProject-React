import { Card, CardBody, ButtonGroup, CardTitle, InputGroup, Button, Input, FormGroup} from "reactstrap";
// import "../assets/scss/style.scss";
import './Map.css';
import { useState } from "react";

var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

var test = ['광주광역시 북구 풍향동 579-5 1층	','광주광역시 남구 방림동 536-35 미래샷시 536-35 미래샷시 1층','광주 동구 지산동 694-33번지 1층'];
var test1 = ['광주광역시 동구 서석동 422-17','광주광역시 동구 산수동 553-34 1층','광주광역시 동구 금동 8-11 1층'];
var markers = []
function setMarkers(map) {
  for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(map);
  }            
}
function addMarker(coords,map,kakao) {
  var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
  var imageSize = new kakao.maps.Size(24, 35);
  var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);  
  var marker = new kakao.maps.Marker({
      map: map, // 마커를 표시할 지도
      position: coords, // 마커를 표시할 위치
      image : markerImage 
    });
    markers.push(marker);
    console.log(markers)
    return marker.setMap(map);

}
const Map = () => {
//스크립트 파일 읽어오기
  const new_script = src => { 
    return new Promise((resolve, reject) => { 
      const script = document.createElement('script'); 
      script.src = src; 
      script.addEventListener('load', () => { 
        resolve(); 
      }); 
      script.addEventListener('error', e => { 
        reject(e); 
      }); 
      document.head.appendChild(script); 
    }); 
  };
  useState(() => {
    //카카오맵 스크립트 읽어오기
    const my_script = new_script('https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=5824c6e33d49a063790c607abe299380');
    
    // 스크립트 읽기 완료 후 카카오맵 설정
    my_script.then(() => {
      console.log('script loaded!!!');  
      const kakao = window['kakao']; 
      kakao.maps.load(() => {
        var locPosition = new kakao.maps.LatLng(35.146304, 126.921031);
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
        mapOption = {
          center: locPosition, //좌표설정 광주
          // center: new kakao.maps.LatLng(33.450705, 126.570677), //좌표설정 제주도
          level: 6 
        }; 
        const map = new kakao.maps.Map(mapContainer, mapOption); //맵생성
        const my_script1 = new_script('//dapi.kakao.com/v2/maps/sdk.js?appkey=5824c6e33d49a063790c607abe299380&libraries=services');

        my_script1.then(() => {
          const geocoder = new kakao.maps.services.Geocoder();
          
          
          // 검색을 하면 출력
          var s = document.getElementById("search");
          s.addEventListener("click", searchfood);
          function searchfood() { 
            setMarkers(null);     
            console.log('script1 loaded!!!'); 
            for (var adresslist in test){
            geocoder.addressSearch(test[adresslist], function(result, status) {
            // 정상적으로 검색이 완료됐으면 
            if (status === kakao.maps.services.Status.OK) {
                var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                // 결과값으로 받은 위치를 마커로 표시합니다
                addMarker(coords,map,kakao);
                }
                });            
              }
            }        

              // 식당 추천 버튼을 누르면 내위치를 기준으로 식당을 추천해줌
              var t = document.getElementById("event");
              t.addEventListener("click", imhere);
              function imhere() {
                setMarkers(null);
                if (navigator.geolocation) {
                  console.log('script12 loaded!!!');
                // GeoLocation을 이용해서 접속 위치를 얻어옵니다
                navigator.geolocation.getCurrentPosition(function(position) {
                var lat = position.coords.latitude, // 위도
                    lon = position.coords.longitude; // 경도
                var locPosition = new kakao.maps.LatLng(lat, lon); // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
                var marker = new kakao.maps.Marker({
                  position: locPosition
                });
                marker.setMap(map);
                map.setCenter(locPosition);
                
                  for (var adresslist in test1){
                    geocoder.addressSearch(test1[adresslist], function(result, status) {
                    // 정상적으로 검색이 완료됐으면 
                    if (status === kakao.maps.services.Status.OK) {
                      var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                      // 결과값으로 받은 위치를 마커로 표시합니다
                      addMarker(coords,map,kakao);
                    // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                    } 
                  });            
                }
              }
            );
          }};
// 식당 추천을누르면 내위치 기준으로 식당출력?? 아니면 움직인 좌표 기준 식당출력 :https://apis.map.kakao.com/web/sample/addMapCenterChangedEvent/
// 마커 제거(기능이 바뀔때 마다), 최소화면단위 500
        }).catch(() => {
            console.log("error");
          });
        });   
      }); 
    },[]);


  
  // 분류 체크박스
  const [cSelected, setCSelected] = useState([]);
  const onCheckboxBtnClick = (selected) => {
    const index = cSelected.indexOf(selected);
    if (index < 0) {
      cSelected.push(selected);
    } else {
      cSelected.splice(index, 1);
    }
    setCSelected([...cSelected]);
  };

  // // 가격 선택
  const [rSelected, setRSelected] = useState(null);

  return (
    <div>
      {/* 검색창 */}
      <InputGroup className="search-bar">
        <Input placeholder="메뉴 검색하기"/>
        {/* 검색 버튼 */}
        <Button id='search' className="search-button" >
          찾기
        </Button>
      </InputGroup>
      {/* 검색창 end */}
    <Button id="event"className="btn-recommend" >추천받기</Button>

      {/* 분류 버튼*/}
      <ButtonGroup className="btn-food">
        <Button
          // color="primary"
          outline
          onClick={() => onCheckboxBtnClick(1)}
          active={cSelected.includes(1)}
        >
          한식
        </Button>
        <Button
          // color="primary"
          outline
          onClick={() => onCheckboxBtnClick(2)}
          active={cSelected.includes(2)}
        >
          중식
        </Button>
        <Button
          // color="primary"
          outline
          onClick={() => onCheckboxBtnClick(3)}
          active={cSelected.includes(3)}
        >
          양식
        </Button>
        <Button
          // color="primary"
          outline
          onClick={() => onCheckboxBtnClick(4)}
          active={cSelected.includes(4)}
        >
          일식
        </Button>
        <Button
          // color="primary"
          outline
          onClick={() => onCheckboxBtnClick(5)}
          active={cSelected.includes(5)}
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
          1만원
        </Button>
        <Button
          outline
          onClick={() => setRSelected(2)}
          active={rSelected === 2}
        >
          2만원
        </Button>
        <Button
          outline
          onClick={() => setRSelected(3)}
          active={rSelected === 3}
        >
          3만원
        </Button>
        <Button
          outline
          onClick={() => setRSelected(4)}
          active={rSelected === 4}
        >
          3만원 이상
        </Button>
      </ButtonGroup>
      {/* 임시 출력용 */}
      <br />
      <span>분류 선택: {JSON.stringify(cSelected)},</span>
      <span>가격 선택: {rSelected}</span>
      {/* 가격 버튼 end */}
    {/* 지도 */}
    <Card className="map-card">
      <CardBody>
          <div className="map-search-div">
            <CardTitle tag="h5">맛집 찾기</CardTitle>
          </div>

        <div id="map" className="map">
    </div>
      </CardBody>
    </Card>
    {/* 지도 end */}
    </div>
  );
};

export default Map;
