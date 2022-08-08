import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import './Tables.css';

// 클립보드


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
          <CardTitle tag="h5">추천 식당 목록</CardTitle>
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
                    <span>
                      {tdata.address}
                    </span>
                    <span className="copy-button">
                      {/* 복사 아이콘 */}
                        <img className="copy-img" src="../images/copy.png" alt="복사 버튼" />
                    </span>
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
