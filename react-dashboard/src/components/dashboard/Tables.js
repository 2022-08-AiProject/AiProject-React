import { Card, CardBody, CardTitle, Table, FormGroup, Input } from "reactstrap";
import './Tables.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

// 표 내용
const tableData = [
  {
    menu: "메뉴",
    price: "14,000 ₩",
    score: "★ 4.5",
    name: "식당명",
    address: "광주 동구 동명동 73-18"
  }
];

const Tables = () => {

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
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>메뉴</th>
                <th>가격</th>
                <th>별점</th>
                <th>식당명</th>
                <th>위치</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((tdata, index) => (
                <tr key={index} className="border-top">
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
