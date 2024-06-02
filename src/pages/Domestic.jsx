import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ko } from 'date-fns/locale';
import DatePicker from 'react-datepicker';                     // 달력 팝업
import { MoHeader } from '../components/common/Header.jsx';    // 공통헤더
import { PcSubMain, MoSubMain } from '../components/common/SubMain.jsx';  // 사이드영역
import Purpose from '../components/modals/Purpose.jsx';        // 여행목적 팝업
import Country from '../components/modals/Country.jsx';        // 여행국가 팝업

/**
 * 국내여행
 * @param {*} props 
 * @returns 
 */
const Domestic = (props) => {
    const navigate = useNavigate();

    // App.js props
    let {form, setForm} = props;
    // 보험료계산 버튼
    const [disabled, setDisabled] = useState('disabled');

    // form 객체가 변경될 때 마다 체크
    useEffect(() => {
        // 유효성체크 대상 목록 추출
        let keyList = Object.keys(form).filter(key => !['birth', 'gender'].includes(key));
        // 유효성 체크
        let values = keyList.filter(key => !form[key]);

        !values.length ? setDisabled(false) : setDisabled(true);
        console.log('변경 후 ', form);
    }, [form]);

    // form 객체 값 세팅
    const changeForm = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }
        
    /**
     * Modal Variable
     */
    const [isOpen1, setIsOpen1] = useState(false),
          [isOpen2, setIsOpen2] = useState(false);
    const [purposeInfo, setPurposeInfo] = useState({value:'', text: '여행목적 선택', clssNm:'slct'}),   
          [countryInfo, setcountryInfo] = useState({value:'', text: '처음 여행하는 국가', clssNm:'slct'});

    /**
     * Modal Function
     */
    const modal = {
        // 모달팝업 열기
        open : (e) => {
            e.currentTarget.dataset.pop === 'purpose' ? setIsOpen1(true) : setIsOpen2(true);
        },
        // 모달팝업 닫기
        close: (e) => {
            e.currentTarget.dataset.pop === 'purpose' ? setIsOpen1(false) : setIsOpen2(false);
        },
        // 여행목적팝업 콜백함수
        selectPurpose: (e) => {
            setPurposeInfo({
                value   : e.target.previousSibling.value,
                text    : e.target.textContent,
                classNm : ''
            });

            setForm({...form, 'purpose': e.target.textContent});
            setIsOpen1(false);
        },
        // 여행국가팝업 콜백함수
        selectCountry: (e) => {
            setcountryInfo({
                value   : e.target.previousSibling.attributes.for?.value,
                text    : e.target.textContent,
                classNm : ''
            });
            
            setForm({...form, 'country': e.target.textContent});
            setIsOpen2(false);
        }
    };
    
    return (
        <>
            {/* PC 서브메인 */}
            <PcSubMain/>
            <section className="right">
                <div className="scrollarea">
                    <div className="scrollarea_container">
                        {/* 모바일 헤더 */}
                        <MoHeader/>
                        {/* 모바일 서브메인 영역 */}
                        <MoSubMain/>
                        <div className="contents" id="div1">
                            <div className="main-txt">
                                <h1>여행 일정을 알려주세요</h1>
                            </div>
                            <form className="intro-form">
                                <input type="hidden" name="insuranceTy" value="overseas"/>
                                <input type="hidden" name="purposeCd" value=""/>
                                <input type="hidden" name="nationCd" value=""/>
                                <input type="hidden" name="oldinsuCd" value=""/>
                                <div className="capsule pc-capsule">
                                    <ul>
                                        <li className="list list-abroad" onClick={() => navigate('/travel/overseas')}>
                                            <span>해외여행</span>
                                        </li>
                                        <li className="list list-longTerm">
                                            <span>장기체류</span>
                                        </li>
                                        <li className="list list-domestic current" onClick={() => navigate('/travel/domestic')}>
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
                                        <select id="startTime" name="startTime" className="time-select" defaultValue="00" onChange={changeForm}>
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
                                        <select id="endTime" name="endTime" className="time-select" defaultValue="23" onChange={changeForm}>
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
                                        {/** 여행목적 선택 팝업 */}
                                        <Purpose data-pop="purpose" isOpen={isOpen1} close={modal.close} type={"1"} click={modal.selectPurpose}/>
                                        
                                        <h5>여행목적</h5>
                                        <div className="input-div js-click-modal purpose-modal-btn" onClick={modal.open} data-pop="purpose">
                                            <div className={`placeholder ${purposeInfo.clssNm}`}>{purposeInfo.text}</div>
                                        </div>
                                        </li>
                                        <li className="country_cont">
                                        {/** 여행국가 선택 팝업 */}
                                        <Country data-pop="country" isOpen={isOpen2} close={modal.close} click={modal.selectCountry}/>
                                        
                                        <h5 className="js-click-modal countryInfo-modal-btn" data-modal="countryInfo-modal">여행국가</h5>
                                        <div className="input-div btn js-click-modal country-modal-btn" onClick={modal.open} data-pop="country">
                                            <div className={`placeholder ${countryInfo.clssNm}`}>{countryInfo.text}</div>
                                        </div>
                                        </li>
                                    </ul>
                                    </div>

                                    <div className="obligation-wrap">
                                    <div className="obligation-list-title inpCheck confirmCheck">
                                        <div className="check-list">
                                        <input type="checkbox" id="chkAgreeObligation" name="chkAgreeObligation" value="Y" onChange={e => setForm({...form, 'checkYn':e.currentTarget.checked || ''})}/>
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
                    <button className="btn-next btn-next-first type-full" disabled={disabled} onClick={()=> navigate('/travel/join')}>
                        <span>내 보험료 계산하기</span>
                    </button>
                </div>
            </section>
        </>
    );
}

export default Domestic;
    