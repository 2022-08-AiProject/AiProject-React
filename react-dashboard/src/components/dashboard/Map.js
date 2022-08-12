import { Card, CardBody, ButtonGroup, CardTitle, InputGroup, Button, Input, FormGroup} from "reactstrap";
// import "../assets/scss/style.scss";
import './Map.css';
import { useState } from "react";


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
    // var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
    
    //스크립트 읽기 완료 후 카카오맵 설정
    my_script.then(() => {
      console.log('script loaded!!!');  
      const kakao = window['kakao']; 
      kakao.maps.load(() => {
        const mapContainer = document.getElementById('map');
        const options = { 
          center: new kakao.maps.LatLng(35.146304, 126.921031), //좌표설정
          level: 3 
        }; 
        const map = new kakao.maps.Map(mapContainer, options); //맵생성
        //마커설정
        // var imageSize = new kakao.maps.Size(24, 35);
        // var markerImage = new kakao.maps.MarkerImage(imageSize,imageSrc);
        const markerPosition = new kakao.maps.LatLng(35.146304, 126.921031); 
        const marker = new kakao.maps.Marker({ 
          position: markerPosition
          // image : markerImage
        }); 
        marker.setMap(map); 
      });   
    }); 
  }, []);

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

  // 가격 선택
  const [rSelected, setRSelected] = useState(null);

  return (
    <div>
      {/* 검색창 */}
      <InputGroup className="search-bar">
        <Input placeholder="메뉴 검색하기"/>
        {/* 검색 버튼 */}
        <Button className="search-button" >
          찾기
        </Button>
      </InputGroup>
      {/* 검색창 end */}
      <Button className="btn-recommend">추천받기</Button>
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
        <Button
          // color="primary"
          outline
          onClick={() => onCheckboxBtnClick(6)}
          active={cSelected.includes(6)}
        >
          기타
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
        <div className="map-title-div">
          <div className="map-search-div">
            <CardTitle tag="h5">맛집 찾기</CardTitle>
          </div>
          <div className="map-option-div">
            {/* 옵션 */}
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
                <option>
                  거리가 가까운 순으로 정렬
                </option>
              </Input>
            </FormGroup>
          </div>
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
