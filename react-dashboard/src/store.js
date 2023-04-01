import * as types from "./redux/user/action"


const initialState = {
    mode : '', // WELCOME READ CATEGORY
    main_contents : [], 
    sub_contents : [],
    user_name : '',
    category : '',
}


export function reducer(state = initialState, action){
    console.log(action)
    // 메인 화면 진입시
    if(action.type === 'WELCOME'){
        return { ...state, mode : 'WELCOME', main_contents : action.contents};
    }
    // 추천받기 버튼 클릭시
    if(action.type === 'AUTO_CHOICE'){
        let newContents = state.main_contents.filter((item,i) => i < 5)
        return {...state, mode : 'AUTO_CHOICE', sub_contents : newContents}
    }
    // 찾기 버튼 클릭시
    if(action.type === 'SEARCH_CHOICE'){
        let newContents = state.main_contents.filter((item,i) => item.foodname.indexOf(action.text) !== -1)
        console.log(newContents)
        return {...state, mode : "SEARCH_CHOICE", sub_contents : newContents}
    }
    // 음식 카테고리 버튼 클릭시
    if(action.type === 'CATEGORY'){
        let newContents = state.main_contents.filter(item => item.category === action.category)
        return { ...state, mode : 'CATEGORY', category : action.category, sub_contents : newContents}
    }
    // 가격 카테고리 버튼 클릭시
    if(action.type === 'PRICE_CHOICE'){
        let newContents = state.main_contents.filter(item => item.price <= action.price)
        return { ...state, mode : 'PRICE_CHOICE', sub_contents : newContents}
    }
    return state
}


console.log(reducer.state)

