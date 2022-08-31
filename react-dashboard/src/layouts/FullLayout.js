import { Outlet } from "react-router-dom";
import Header from "../Header.js";
import { Container } from "reactstrap";
import axios from "axios";


const FullLayout = () => {

  var food_list = [];
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
    food_list.push(response.data)
    // console.log("["+i+"]"+category[i])
  
  }}).catch((error)=>{
    console.log(error);
    })
  


  return (
    <main>
      <div className="pageWrapper d-lg-flex">
        {/********Sidebar**********/}
        {/* <aside className="sidebarArea shadow" id="sidebarArea">
          <Sidebar />
        </aside> */}
        {/********Content Area**********/}

        <div className="contentArea">
          {/********header**********/}
          <Header />
          {/********Middle Content**********/}
          <Container className="p-4 wrapper" fluid>
            <Outlet />
          </Container>
        </div>
      </div>
    </main>
  );
};

export default FullLayout;
