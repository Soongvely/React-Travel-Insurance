import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MoHeader } from '../components/common/Header.jsx';
import { comUtil } from '../js/util.js';
import { comPop } from '../js/common.js';
import { JoinJs } from '../js/join.js';

import axios from 'axios';
import $ from 'jquery';
import { useDispatch, useSelector } from 'react-redux';
import { setJoinInfo } from '../reducers/setter.js';

/**
 * 가입정보 입력
 * @param {*} props 
 * @returns 
 */
const Join = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // store state form객체
    const { form } = useSelector(state => state.setter);
    
    // store state 업데이트
    const setForm = (obj) => dispatch(setJoinInfo(obj)); 

    // form객체 값 변경    
    const changeForm = (e) => {
        let value = e.target.name === 'gender' ? e.target.value : comUtil.onlyNum(e);
        setForm({...form, [e.target.name]: value});
    }

    // 유효성 체크
    const validation = async (e) => {
        if ([e.currentTarget.classList].find(e => e.value === 'disabled')) {
            checkBtnDisabled('','show');
            return false;
        } 
        else {
            // 간편 보험료계산
            await insCalculation();
        }
    }

    useEffect(() => {
        checkBtnDisabled('','');
    }, [form]);
    
    var cpViewCount = 0;  // 현재 자녀 수를 확인하기 위한 숫자, 추가 시 +1, 삭제 시 -1
    const checkBtnDisabled = (force, showErr) => {
        var insrdList = force === 'force' ? true : getInsrdList(showErr === 'show' ? true : false);
        if (force || insrdList === false || insrdList.length !== cpViewCount + 1) {
            $('.btn-next').addClass('disabled');
        } else {
            $('.btn-next').removeClass('disabled');
        }
    }

    const getInsrdList = (showErr) => {
        let insrdList = [];
        let insrd = {
            manAge: comUtil.getManAge(form.birth),
            insAge: comUtil.getInsAge(comUtil.formatDate(form.strDt), form.birth),
            favorite: 'N',
            type: 'p',
        }

        if (!comUtil.checkBirth(form.birth, 'p', showErr, '가입자')) {
            return false;
        }
        insrd['birth'] = form.birth;

        if (!form.gender) {
            if (showErr) comPop.msgPop.warn("가입자 성별을 선택해주세요.");
            return false;
        }
        insrd['gender'] = form.gender;
        insrd['nameKor'] = $('#txtInsrdNameKorean').value !== null ? $('#txtInsrdNameKorean').value : '';
        insrd['nameEng'] = $('#txtInsrdNameEnglish').value !== null ? $('#txtInsrdNameEnglish').value : '';
        insrd['isKorean'] = $('#txtInsrdIsKorean').value !== null ? $('#txtInsrdIsKorean').value : '';

        insrdList.push(insrd);

        var isValidList = true;
        /*
        $.each($('.name-birth-form-after-list'), function () {
            var cpidx = $(this).data('idx');
            var cpno = $(this).find('.cp-no').text();
            var birth = $(this).find($('.txtCompanionBirth')).value;
            var gender = $(this).find($('.rdoCompanionGender:checked')).value;

            // age
            if (!JoinJs.checkBirth(birth, 'c', showErr, '동반자(' + cpno + ')')) {
                isValidList = false;
                return false;
            }

            // gender
            if (gender == undefined) {
                if (showErr) comPop.msgPop.warn('동반자(' + cpno + ') 성별을 선택해주세요.');
                isValidList = false;
                return false;
            }

            insrd = {
                birth: birth,
                manAge: moment().diff(moment(birth,'YYYYMMDD'), 'years'),
                // nManAge: moment(stDt, 'YYYYMMDD', false).diff(moment(birth, 'YYYYMMDD'), 'years', false),
                insAge: Math.round(moment(stDt, 'YYYYMMDD', true).diff(moment(birth, 'YYYYMMDD'), 'years', true)),
                gender: gender,
                favorite: favorite,
                type: 'c',
                nameKor: $(this).find($('.txtNameKorean')).value !== null ? $(this).find($('.txtNameKorean')).value : '',
                nameEng: $(this).find($('.txtNameEnglish')).value !== null ? $(this).find($('.txtNameEnglish')).value : '',
                isKorean: $(this).find($('.txtIsKorean')).value !== null ? $(this).find($('.txtIsKorean')).value : '',
                // ssno: $(this).find($('.txtNameSsno')).value !== null ? $(this).find($('.txtNameSsno')).value : '',
            }

            insrdList.push(insrd);
        });
        */

        return isValidList ? insrdList : false;
    }

    // 간편 보험료계산
    const insCalculation = async () => {
        const { birth, gender, strDt, endDt, strTm, endTm } = form;

        const param = {
            "birthRep"  : birth,    // 생년월일
            "gender"    : gender,   // 성별
            "startDate" : comUtil.formatDate(form.strDt, '-'),               // 출발일자(YYYY-MM-DD)
            "tripDate"  : comUtil.getTripDate({strDt, endDt, strTm, endTm}), // 보험기간(여행기간)    
            "planSqe"   : new Date().getFullYear(),                          // 플랜일련번호(연도)
        };

        // call axios
        let result = await axios.post("/common/selectInsuList", param)
                                .catch(err => comPop.msg.warn(`[${err?.response?.status}]\n보험료계산 중 오류가 발생했습니다.`));

        if (result) {
            // form 객체에 저장
            navigate('/travel/plan');
        }
    }

    return (
        <div>
            <section className="right">
                <div className="scrollarea">
                    <div className="scrollarea_container">
                        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,200,0,0"/>
                        <MoHeader/> {/* 모바일 헤더 */}
                        <div className="contents">
                            <div className="main-txt">
                                <h1>가입자 정보를 입력해 주세요</h1>
                                <div className="mo-step-bar">
                                    <span className="blue">2</span>/<span>7</span>
                                </div>
                            </div>
                            <form className="intro-form">
                                <input type="hidden" name="insuranceTy" value="overseas"/>
                                <input type="hidden" name="purposeCd" value="buss_trip"/>
                                <input type="hidden" name="nationCd" value="PH"/>
                                <input type="hidden" name="startDate" value="20240527"/>
                                <div className="travel-purpose" >
                                    <div className="intro-form-list">
                                        <ul>
                                            <li className="birth-input">
                                                <h5>생년월일</h5>
                                                <div className="input-div">
                                                    <input type="tel" className="changeFormber" name="birth" id="birth" value={form.birth} onKeyUp={changeForm} onChange={changeForm} placeholder="예: 19951025" maxLength="8" autoComplete="off"/>
                                                </div>
                                            </li>
                                            <li>
                                                <h5 style={{visibility:"hidden"}}>성별</h5>
                                                <div className="gender-picker">
                                                    <ul>
                                                        <li className="gender-picker-list">
                                                            <input type="radio" name="rdoInsrdGender" id="rdoInsrdGender_1" value="1" onChange={e => setForm({...form, 'gender': e.target.value})}/>
                                                            <label htmlFor="rdoInsrdGender_1" className="radio_btn01">남성</label>
                                                        </li>
                                                        <li className="gender-picker-list">
                                                            <input type="radio" name="rdoInsrdGender" id="rdoInsrdGender_2" value="2" onChange={e => setForm({...form, 'gender': e.target.value})}/>
                                                            <label htmlFor="rdoInsrdGender_2" className="radio_btn01">여성</label>
                                                        </li>
                                                    </ul>
                                                    <input type="hidden" name="txtInsrdNameKorean" id="txtInsrdNameKorean"/>
                                                    <input type="hidden" name="txtInsrdNameEnglish" id="txtInsrdNameEnglish"/>
                                                    <input type="hidden" className="txtInsrdIsKorean" name="txtInsrdIsKorean" id="txtInsrdIsKorean"/>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="intro-form-list add-companion-line">
                                        <div className="children-list children-list" id="companion_list"></div>
                                        {/* 자녀 추가 시 사용하는 html 템플릿 */}
                                        <script id="template_child_info" type="text/template">
                                            <div className="companion-card input_ul no-line companion name-birth-form-after-list">
                                                <div className="companion-card-inner">
                                                    <ul className="companion-card-header">
                                                        <li className="companion-card-header-left">
                                                            <p className="shinhan-color">동반자 <span className="cp-no"></span></p>
                                                        </li>
                                                        <li className="companion-card-header-right delete-btn">
                                                            <span className="lnr lnr-cross"></span>
                                                        </li>
                                                    </ul>
                                                    <div className="companion-card-body">
                                                        <p>생년월일</p>
                                                        <ul>
                                                            <li className="companion-birth">
                                                                <input type="tel" className="changeFormber txtCompanionBirth" name="txtCompanionBirth_no" id="txtCompanionBirth_no" placeholder="예: 19951025" maxLength="8"/>
                                                            </li>
                                                            <li className="companion-gender">
                                                                <input type="radio" className="rdoCompanionGender" name="rdoCompanionGender_no" id="rdoCompanionGender_no_1" value="1"/>
                                                                <label className="radio_btn01" htmlFor="rdoCompanionGender_no_1">남성</label>
                                                                <input type="radio" className="rdoCompanionGender" name="rdoCompanionGender_no" id="rdoCompanionGender_no_2" value="2"/>
                                                                <label className="radio_btn01" htmlFor="rdoCompanionGender_no_2">여성</label>
                                                            </li>
                                                            <input type="hidden" className="txtNameKorean" name="txtNameKorean_no" id="txtNameKorean_no"/>
                                                            <input type="hidden" className="txtNameEnglish" name="txtNameEnglish_no" id="txtNameEnglish_no"/>
                                                            <input type="hidden" className="txtIsKorean" name="txtIsKorean_no" id="txtIsKorean_no"/>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </script>
                                    </div>
                                    {/* 자녀 추가 시 사용하는 html 템플릿 end */}
                                    <div className="add-companion-btn">
                                        <h2>같이 여행가시는 분이 있으시면 선택해 주세요</h2>
                                        <button type="button" className="add-companion btn-more">동반자추가 (최대50명)</button>
                                        <button type="button" className="btn js-click-modal excel-btn" data-modal="companion-excel-modal">
                                            엑셀업로드 (1회 최대 300명)
                                            <img style={{width:"13px"}} src="https://www.teddy10.com/images/travel/domestic/meritz/mo/download.svg" alt="엑셀업로드"/>
                                        </button>
                                    </div>
                                    
                                    <div className="page-title-childbox page-title-childbox-list">
                                        <b>유의사항</b>
                                        <p>만 100세까지 가입 가능합니다.</p>
                                        <p>직접 입력은 최대 50명까지 한번에 가입 가능합니다.</p>
                                        <p>업로드 한 엑셀 파일을 변경할려면 다시 엑셀 업로드를 클릭해 주세요.</p>
                                        <p className="important-color">엑셀 업로드를 원하시는 경우 PC에서 진행해야하며, 최대 300명까지 한번에 가입이 가능합니다.</p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="floating">
                    <button className="btn-before" onClick={() => navigate(-1)}>
                        <span>이전</span>
                    </button>
                    <button className="btn-next disabled" onClick={validation}>
                        <span>다음</span>
                    </button>
                </div>
            </section>
        </div>
    );
}

export default Join;