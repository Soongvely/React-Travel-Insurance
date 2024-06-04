export const setJoinInfo = data => ({ type: 'SET/JOININFO', data });

export const showModal = (element)=> ({ type: "SHOW_MODAL", payload: element });
export const dropModal = ()=> ({ type: "DROP_MODAL"});

const moment = require('moment'),
      today = moment(); 

const initialState = {
    // 폼 입력값 객체
    form : {
        strDt   : today.format('YYYY-MM-DD'),                   // 출발일시
        endDt   : today.add(21, 'days').format('YYYY-MM-DD'),   // 도착일시
        strTm   : '00', // 출발시간
        endTm   : '23', // 도착시간
        purpose : '',   // 여행목적
        country : '',   // 여행국가
        birth   : '',   // 생년월일
        gender  : '',   // 성별
        checkYn : '',   // 여행 제한/금지 지역확인 체크여부
        insType : '',   // 보험 종류(해외/국내)
        insInfo : [],   // 보험료계산 결과
        plan    : '0',  // 가입플랜
    },
    modal : {
        show: false,			// 모달 표시 여부
  element: null			// 모달 Component
    }
}

const setter = (state = initialState, action) => {
    switch (action.type) {
        case 'SET/JOININFO': return {...state, form: action.data};
        default : return state;
    }
}

export function snackbar(state = initialState, action) {
    switch(action.type) {
      case "SHOW_MODAL":
        document.querySelector('body').style.overflow = "hidden";
        return state.set('show', true)
                    .set('element', action.payload);
      case "DROP_MODAL":
        document.querySelector('body').removeAttribute('style');
        return state.set('show', false);
      default:
        return state;
    }
  }

export default setter;