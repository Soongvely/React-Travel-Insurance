export const setJoinInfo = data => ({ type: 'SET/JOININFO', data });

const moment = require('moment'),
      today = moment(); 

const initalState = {
    // 폼 입력값 객체
    form : {
        strDt   : today.format('YYYY-MM-DD'),
        endDt   : today.add(21, 'days').format('YYYY-MM-DD'),
        strTm   : '00',
        endTm   : '23',
        purpose : '',
        country : '',
        checkYn : '',
    }
}

const setter = (state = initalState, action) => {
    switch (action.type) {
        case 'SET/JOININFO': return {...state, form: action.data};
        default : return state;
    }
}

export default setter;