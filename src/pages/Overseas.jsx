import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker'; // 달력
import { ko } from 'date-fns/locale';
import { MoHeader } from '../components/common/Header.jsx';              // 공통헤더 컴포넌트
import { PcSubMain, MoSubMain } from '../components/common/SubMain.jsx'; // 서브메인 컴포넌트
import { useDispatch, useSelector } from 'react-redux';
import { setJoinInfo } from "../reducers/setter";
import useModal  from '../reducers/useModal.ts'; // 모달 커스텀 훅

/**
 * 해외여행
 * @param {*} props 
 * @returns 
 */
const Overseas = () => {
    const navigate = useNavigate();
    const dispatch =  useDispatch();
    
    const { showModal, hideModal } = useModal();

    // store state form객체
    const { form } = useSelector(state => state.setter);
    
    // 보험료계산 버튼속성 제어
    const [disabled, setDisabled] = useState('disabled');
    
    // store state 업데이트
    const setForm = (obj) => dispatch(setJoinInfo(obj)); 

    // store state 업데이트 핸들러
    const setFormHandler = (e) => {
        if (e.currentTarget.dataset.modal) {
            if (e.target.nodeName  !== 'LABEL') return; 

            setForm({...form, [e.target.previousSibling.name]: e.target.textContent});

            hideModal();
        }
        else {
            setForm({...form, [e.target.name]: e.target.value});
        }
    }

    // 현재 페이지 정보 저장
    useEffect(() => {setForm({...form, page: 'overseas'})}, []);

    // form객체가 변경될 때 마다 체크
    useEffect(() => {
        // 유효성체크 대상 목록 추출
        let keyList = Object.keys(form).filter(key => !['birth', 'gender'].includes(key));
        // 유효성 체크
        let values = keyList.filter(key => !form[key]);

        !values.length ? setDisabled(false) : setDisabled(true);
    }, [form]);

    // 모달 이벤트 핸들러
    const modalHandler = {
        // 여행목적
        purpose: () => {
            showModal({
                modalType: "PurposeModal",
                modalProps: {
                    type: "1",
                    close: hideModal,
                    callback: setFormHandler,
                }
           });
        },
        // 여행국가
        country: () => {
            showModal({
                modalType: "CountryModal",
                modalProps: {
                    close: hideModal,
                    callback: setFormHandler,
                }
           });
        },
        // 여행국가선택안내
        countryInfo: () => {
            showModal({
                modalType: "CountryInfoModal",
                modalProps: {
                    close: hideModal,
                }
           });
        }
    }

    return (
        <>
            {/* PC 서브메인 */}
            <PcSubMain/>
            <section className="right">
                <div className="scrollarea">
                    <div className="scrollarea_container">
                        {/* 모바일웹 헤더 */}
                        <MoHeader/>
                        {/* 모바일 서브메인 영역 */}
                        <MoSubMain/>
                        <div className="contents" id="div1">
                            <div className="main-txt">
                                <h1>여행 일정을 알려주세요</h1>
                            </div>
                            <form className="intro-form">
                                <div className="capsule pc-capsule">
                                    <ul>
                                    <li className="list list-abroad current" onClick={() => navigate('/travel/overseas')}>
                                        <span>해외여행</span>
                                    </li>
                                    <li className="list list-longTerm ">
                                        <span>장기체류</span>
                                    </li>
                                    <li className="list list-domestic " onClick={() => navigate('/travel/domestic')}>
                                        <span>국내여행</span>
                                    </li>
                                    </ul>
                                </div>
                                <div className="longtermCheck">
                                    <div className="intro-form-list select-input">
                                    <h5>출발일시</h5>
                                    <ul>
                                        <div className="input-div select-input">
                                        {/**
                                        <input type="text" placeholder="출발날짜 (YYYYMMDD)" title="출발일(YYYYMMDD) : 입력형식에 맞춰 입력해주세요." id="strDt" name="strDt" value={strDt } readOnly="readOnly" autoComplete="off" className="hasDatepicker" />
                                        */}
                                        <DatePicker 
                                            className="hasDatepicker"
                                            locale={ko}
                                            selected={form.strDt} 
                                            onChange={date => setForm({...form, 'strDt': date})}
                                            dateFormat="yyyy-MM-dd"
                                            onKeyDown={e => e.preventDefault()}
                                        />
                                        <i className="depart-date-icon" htmlFor="depart-datepicker">
                                            <img className="calendar" src='https://www.teddy10.com/images/travel/overseas/meritz/mo/calendar.svg' alt="출발일 선택"></img>
                                        </i>
                                        </div>
                                        <div className="depart select">
                                        <select id="startTime" name="startTime" className="time-select" defaultValue="00" onChange={setFormHandler}>
                                            <option value="00">00시</option>
                                            <option value="01">01시</option>
                                            <option value="02">02시</option>
                                            <option value="03">03시</option>
                                            <option value="04">04시</option>
                                            <option value="05">05시</option>
                                            <option value="06">06시</option>
                                            <option value="07">07시</option>
                                            <option value="08">08시</option>
                                            <option value="09">09시</option>
                                            <option value="10">10시</option>
                                            <option value="11">11시</option>
                                            <option value="12">12시</option>
                                            <option value="13">13시</option>
                                            <option value="14">14시</option>
                                            <option value="15">15시</option>
                                            <option value="16">16시</option>
                                            <option value="17">17시</option>
                                            <option value="18">18시</option>
                                            <option value="19">19시</option>
                                            <option value="20">20시</option>
                                            <option value="21">21시</option>
                                            <option value="22">22시</option>
                                            <option value="23">23시</option>
                                        </select>
                                        </div>
                                    </ul>
                                    </div>
                                    <div className="intro-form-list">
                                    <h5>도착일시</h5>
                                    <ul>
                                        <div className="input-div select-input">
                                        {/**
                                        * <input type="text" placeholder="도착일(YYYYMMDD)" title="도착일(YYYYMMDD) : 입력형식에 맞춰 입력해주세요" id="endDt" name="endDt" value={endDt} readOnly="readOnly" autoComplete="off" className="hasDatepicker" />
                                        */}
                                        <DatePicker 
                                            className="hasDatepicker"
                                            locale={ko}
                                            selected={form.endDt} 
                                            onChange={date => setForm({...form, 'endDt': date})}
                                            dateFormat="yyyy-MM-dd"
                                            onKeyDown={e => e.preventDefault()}
                                        />
                                        <i className="arrive-date-icon" htmlFor="arrive-datepicker">
                                            <img className="calendar" src="https://www.teddy10.com/images/travel/overseas/meritz/mo/calendar.svg" alt="출발일 선택"></img>
                                        </i>
                                        </div>
                                        <div className="arrive select">
                                        <select id="endTime" name="endTime" className="time-select" defaultValue="23" onChange={setFormHandler}>
                                            <option value="00">00시</option>
                                            <option value="01">01시</option>
                                            <option value="02">02시</option>
                                            <option value="03">03시</option>
                                            <option value="04">04시</option>
                                            <option value="05">05시</option>
                                            <option value="06">06시</option>
                                            <option value="07">07시</option>
                                            <option value="08">08시</option>
                                            <option value="09">09시</option>
                                            <option value="10">10시</option>
                                            <option value="11">11시</option>
                                            <option value="12">12시</option>
                                            <option value="13">13시</option>
                                            <option value="14">14시</option>
                                            <option value="15">15시</option>
                                            <option value="16">16시</option>
                                            <option value="17">17시</option>
                                            <option value="18">18시</option>
                                            <option value="19">19시</option>
                                            <option value="20">20시</option>
                                            <option value="21">21시</option>
                                            <option value="22">22시</option>
                                            <option value="23">23시</option>
                                        </select>
                                        </div>
                                    </ul>
                                    </div>
                                    <div className="intro-form-list">
                                    <ul className="col">
                                        <li className="purpose_cont">
                                        <h5>여행목적</h5>
                                        <div className="input-div js-click-modal purpose-modal-btn" onClick={modalHandler.purpose} data-modal="purpose">
                                            <div className={`placeholder ${form.purpose ? '' : 'slct'}`}>{form.purpose || '여행목적 선택'}</div>
                                        </div>
                                        </li>
                                        <li className="country_cont">
                                        <h5 className="js-click-modal countryInfo-modal-btn" onClick={modalHandler.countryInfo}>여행국가</h5>
                                        <div className="input-div btn js-click-modal country-modal-btn" onClick={modalHandler.country}  data-modal="country">
                                            <div className={`placeholder ${form.country ? '' : 'slct'}`}>{form.country || '처음 여행하는 국가'}</div>
                                        </div>
                                        </li>
                                    </ul>
                                    </div>

                                    <div className="obligation-wrap">
                                    <div className="obligation-list-title inpCheck confirmCheck">
                                        <div className="check-list">
                                        <input type="checkbox" id="chkAgreeObligation" name="chkAgreeObligation" checked={form.checkYn} onChange={e => setForm({...form, 'checkYn': e.currentTarget.checked || ''})}/>
                                        <label htmlFor="chkAgreeObligation">
                                            <p>여행 제한/금지 지역 확인</p>
                                        </label>
                                        </div>
                                        <span className="lnr lnr-chevron-down expand_more open"></span>
                                    </div>
                                    <div className="inpCheck-terms">
                                        <ul>
                                        <li className="contents noti">
                                            외교통상부가 지정하는 지역별 여행경보 단계 중 적색경보(철수권고), 흑색경보 (여행금지)지역을 방문하실 경우 보험가입과 보상이 불가능 하오니 외교통상부의 해외안전 여행 사이트
                                            <a className="sub-color" href="https://www.0404.go.kr/dev/main.mofa" rel="noreferrer" target="_blank">www.0404.go.kr</a>를
                                            방문하시어 여행하려는 국가가 안전한 지역인지 반드시 확인하세요.
                                        </li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="floating">
                    <button className="btn-start type-full">
                    <span>
                        <a href="#div1" className="btn-start">가입하러 가기</a>
                    </span>
                    </button>
                    <button className="btn-next btn-next-first type-full" disabled={disabled} onClick={()=> navigate('/travel/join')}>
                        <span>내 보험료 계산하기</span>
                    </button>
                </div>
            </section>  
        </>
    );
}

export default Overseas;
    