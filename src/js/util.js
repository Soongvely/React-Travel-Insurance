import {comPop, validation, allowOnlyNumber, onlyNum, apiOneday} from './common.js';
export const comUtil = () => {};

const moment = require('moment');

// 숫자 이외의 입력값 제거
comUtil.onlyNum = (e) => {
    return e.currentTarget.value.replace(/[^0-9]/g, '');
}

// 숫자 콤마(,) 추가
comUtil.setComma = (num) => {
    if (!Number(num)) return;

    return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ',');    
}

// 숫자 단위 변환
comUtil.setNumUnit = (num) => {
    if (!Number(num)) return num;
    
    let splitUnit    = 10000;
    let unitArr    = ['', '만', '억', '조', '경'];
    let resultArr  = [];
    let resultStr = '';

    unitArr.map((str, i) => {
        let unitResult = Math.floor((num % Math.pow(splitUnit, i + 1)) / Math.pow(splitUnit, i));
        
        if (unitResult) resultArr[i] = unitResult;
    });
    
    resultArr.map((num, i) => {
        if (num) resultStr = String(comUtil.setComma(num)) + unitArr[i] + resultStr;
    });

    return `${resultStr}원`;
}

// 날짜 포멧
comUtil.formatDate = (param, format='') => {
    // YYYYMMDD 형식으로 변환
    const date = param.replace(/[-./]/g, '').replace(/\s/g, '');
    
    if (Number(date) && date.length === 8) {
        return `${date.substr(0, 4)}${format}${date.substr(4, 2)}${format}${date.substr(6)}`;
    }
}

// 시간 포멧 (오전 오후)
comUtil.formatTime = (param) => {
    return param < 13 ? `오전 ${Number(param) ? Number(param) : 12}` : `오후 ${Number(param) - 12}`;
}

// 만나이 계산
comUtil.getManAge = (birth) => {
    return moment().diff(moment(birth,'YYYYMMDD'), 'years');
}

// 보험나이 계산
comUtil.getInsAge = (date, birth) => {
    return Math.round(moment(date, 'YYYYMMDD', true).diff(moment(birth, 'YYYYMMDD'), 'years', true));
}

// 생년월일 유효성 체크
comUtil.checkBirth = (birth, type, showErr, target) => {
    const moment = require('moment');

    if (!birth) {
        if (showErr) comPop.msg.warn(`${target} 생년월일을 입력하세요.`);
        return false;
    }

    if (birth.length !== 8 || !moment(birth, 'YYYYMMDD', true).isValid()) {
        if (showErr) comPop.msg.warn(`${target}  생년월일 8자리를 입력해 주세요.`);
        return false;
    }

    if (moment().diff(moment(birth, 'YYYYMMDD'), 'days', true) < 0) {
        if (showErr) comPop.msg.warn(`${target} 생년월일을 올바르게 입력해 주세요.`);
        return false;
    }

    let manAge = comUtil.getManAge(birth);

    // 자녀 나이 제한
    if (type === 'p' && manAge < 0) {
        if (showErr) comPop.msg.warn(`${target} 만 ${0}세 이상부터 가입 가능합니다.`);
        return false;
    } 
    else if (manAge > 99) {
        if (showErr) comPop.msg.warn(`${target} 만 ${99}세까지 가입 가능합니다.`);
        return false;
    }

    return true;
}

// 보험기간 계산
comUtil.getTripDate = ({strDt, endDt, strTm, endTm}) => {
    const [sYear, sMonth, sDay] = strDt.split("-"), // 출발 년월일
          [eYear, eMonth, eDay] = endDt.split("-"); // 귀국 년월일
    
    // 출발일과 귀국일 차이 계산
    const getStrTime = new Date(sYear, sMonth, sDay, strTm).getTime(),
          getEndTime = new Date(eYear, eMonth, eDay, endTm).getTime();
    
    return Math.ceil((getEndTime - getStrTime) / 1000 / 60 / 60 / 24);
}