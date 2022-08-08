import { Card, CardBody, ButtonGroup, CardTitle, InputGroup, Button, Input, FormGroup, Label } from "reactstrap";
// import "../assets/scss/style.scss";
import Chart from "react-apexcharts";
import './Map.css';
import { useState } from "react";

const Map = () => {
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
      </ButtonGroup>
      <p>Selected: {JSON.stringify(cSelected)}</p>
      {/* 분류 버튼 end */}
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
        <div className="map"></div>
      </CardBody>
    </Card>
    {/* 지도 end */}
    </div>
  );
};

export default Map;
