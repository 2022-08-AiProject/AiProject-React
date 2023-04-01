
function addMarker(coords, kakao, map) {
    let imageSrc =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
    let imageSize = new kakao.maps.Size(24, 35);
    let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
    let marker = new kakao.maps.Marker({
      map: map, // 마커를 표시할 지도
      position: coords, // 마커를 표시할 위치
      image: markerImage,
    });
    markers.push(marker);
  
    return marker.setMap(map);
  }
  


const new_script = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.addEventListener("load", () => {
        resolve();
      });
      script.addEventListener("error", (e) => {
        reject(e);
      });
      document.head.appendChild(script);
    });
  };



const my_script = new_script(
    "https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=5824c6e33d49a063790c607abe299380"
  );
  // 스크립트 읽기 완료 후 카카오맵 설정
    console.log(window["kakao"].maps)

  my_script.then(() => {
    const kakao = window["kakao"];
    setObkakao(kakao);
    kakao.maps.load(() => {
      let locPosition = new kakao.maps.LatLng(35.146304, 126.921031);
      let mapContainer = document.getElementById("map"), // 지도를 표시할 div
        mapOption = {
          center: locPosition, //좌표설정 광주
          // center: new kakao.maps.LatLng(33.450705, 126.570677), //좌표설정 제주도
          level: 6,
        };
      const map = new kakao.maps.Map(mapContainer, mapOption); //맵생성
      const my_script1 = new_script(
        "//dapi.kakao.com/v2/maps/sdk.js?appkey=5824c6e33d49a063790c607abe299380&libraries=services"
      );

      my_script1
        .then(() => {
          const geocoder = new kakao.maps.services.Geocoder();
       
          // 검색을 하면 출력 ////////////////////////////////////////////////////
          const s = document.getElementById("search");
          s.addEventListener("click", searchfood);
          function searchfood() {
            console.log(props)
            setMarkers(null);
            for (let adresslist in test1) {
              geocoder.addressSearch(
                test1[adresslist],
                function (result, status) {
                  try{
                  // 정상적으로 검색이 완료됐으면
                  if (status === kakao.maps.services.Status.OK) {
                    let coords = new kakao.maps.LatLng(
                      result[0].y,
                      result[0].x
                    );
                    // 결과값으로 받은 위치를 마커로 표시합니다
                    addMarker(coords, map, kakao);
                    map.setCenter();
                  }
                } catch (error){
                  console.log(error.name,' : ', error.message)
                }

                }
              );
            }
          }
          // 식당 추천 버튼을 누르면 내위치를 기준으로 식당을 추천해줌
          const t = document.getElementById("event");
          
          console.log(main_object)
          
          
          s.addEventListener("click", searchfood);
          // t.addEventListener("click", props.onAutoChoice(props.sub_contents));
          t.addEventListener("click", imhere(props.sub_contents, kakao, map, geocoder));
      

          // navigator.geolocation.getCurrentPosition(function (position) {
          function imhere(data, kakao, map, geocoder) {

            setMain_Object(data)
            setMarkers(null);
            // localStorage.setItem("name", cSelected);
            // localStorage.getItem("name");
            
            // GeoLocation을 이용해서 접속 위치를 얻어옵니다
              //   let lat = position.coords.latitude, // 위도  
              //     lon = position.coords.longitude; // 경도
              //   let locPosition = new kakao.maps.LatLng(lat, lon); // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
              //   let marker = new kakao.maps.Marker({
              //     position: locPosition,  
              //   });
              //   marker.setMap(map);
              //   map.setCenter(locPosition);
                //한식 버튼과 2만원 버튼이 눌렸을 때
                // rSelected == '2'
        
                for (let i in data) {
                  geocoder.addressSearch(data[i].location, function (result, status) {
                    console.log(data[i].location)
                  try {
                    // 정상적으로 검색이 완료됐으면
                    if (status === kakao.maps.services.Status.OK) {
                      let coords = new kakao.maps.LatLng(
                        result[0].y,
                        result[0].x
                      );  
                      // 결과값으로 받은 위치를 마커로 표시합니다
                      addMarker(coords, map, kakao);
                    }
                  } catch (error){
                    console.log(error.name,' : ', error.message)
                  }  
                  });
                }  
              // });  
            
          }    


          // 식당 추천을누르면 내위치 기준으로 식당출력?? 아니면 움직인 좌표 기준 식당출력 :https://apis.map.kakao.com/web/sample/addMapCenterChangedEvent/
          // 마커 제거(기능이 바뀔때 마다), 최소화면단위 500
        })  
        .catch(() => {
          console.log("error");
        });  
    }); 
    return kakao   
  });  