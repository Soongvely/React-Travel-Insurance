import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MoHeader } from '../components/common/Header.jsx';         // 공통헤더
import { Left, MoSubMain } from '../components/common/SubMain.jsx';   // 사이드영역

/**
 * 플랜 선택
 * @param {*} props 
 * @returns 
 */
const Plan = (props) => {
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
                classNameNm : ''
            });

            setForm({...form, 'purpose': e.target.textContent});
            setIsOpen1(false);
        },
        // 여행국가팝업 콜백함수
        selectCountry: (e) => {
            setcountryInfo({
                value   : e.target.previousSibling.attributes.for?.value,
                text    : e.target.textContent,
                classNameNm : ''
            });
            
            setForm({...form, 'country': e.target.textContent});
            setIsOpen2(false);
        }
    };
    
    return (
        <section className="right">
            <div className="scrollarea">
                <div className="scrollarea_container">
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,200,0,0"/>
                    <MoHeader/> {/* 모바일 헤더 */}
                    <div className="contents">
                        <div className="main-txt">
                            <h1>원하시는 플랜을 선택해 주세요</h1>
                            <div className="mo-step-bar">
                                <span className="blue">3</span>/<span>7</span>
                            </div>
                        </div>
                        <div className="info-data-wrap">
                            <div className="info-list-wrap">
                                <div className="info-list days">8일</div>
                                <div className="info-list numOrGender">1명</div>
                                <div className="info-list position">태국</div>
                            </div>
                        </div>
                        <form className="intro-form">
                            <div className="plans-choice-wrap isWithDomestic">
                                <div className="plans-choice-inner">
                                    <input type="radio" id="insurance0" name="plan-version" value="0"/>
                                    <label forhtml="insurance0">
                                        <div className="plan-choice-box">
                                            <div className="plan-title-wrap">
                                                <div className="plan-title">
                                                    <div className="radio"></div>
                                                    <h3 className="plan-name">든든</h3>
                                                </div>
                                                <div className="js-click-modal detail-overseas-modal-btn detail-insur-btn" data-modal="plan-details-modal">보장 자세히 보기</div>
                                            </div>
                                            <div className="plan-info">
                                                <div>
                                                    <span>보장을 든든하게</span>
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                                <div className="plan-price-box" style={{display: "flex", "gap": "0 4px"}}>
                                                    <div className="plan-price">
                                                        <span className="price-tot">
                                                            <span className="price-tot-num">22,640</span>원
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="plans-choice-wrap isWithDomestic">
                                <div className="plans-choice-inner">
                                    <input type="radio" id="insurance2" name="plan-version" value="2"/>
                                    <label forhtml="insurance2">
                                        <div className="plan-choice-box">
                                            <div className="plan-title-wrap">
                                                <div className="plan-title">
                                                    <div className="radio"></div>
                                                    <h3 className="plan-name">안심</h3>
                                                </div>
                                                <div className="js-click-modal detail-overseas-modal-btn detail-insur-btn" data-modal="plan-details-modal">보장 자세히 보기</div>
                                            </div>
                                            <div className="plan-info">
                                                <div>
                                                    <span></span>
                                                    <span>N01. 여행자들의 선택</span>
                                                    <span></span>
                                                </div>
                                                <div className="plan-price-box" style={{display: "flex", "gap": "0 4px"}}>
                                                    <div className="plan-price">
                                                        <span className="price-tot">
                                                            <span className="price-tot-num">12,360</span>원
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="plans-choice-wrap isWithoutDomestic" style={{display: "none"}}>
                                <div className="plans-choice-inner">
                                    <input type="radio" id="insurance3" name="plan-version" value="3"/>
                                    <label forhtml="insurance3">
                                        <div className="plan-choice-box">
                                            <div className="plan-title-wrap">
                                                <div className="plan-title">
                                                    <div className="radio"></div>
                                                    <h3 className="plan-name">안심<small>실손미포함</small></h3>
                                                </div>
                                                <div className="js-click-modal detail-overseas-modal-btn detail-insur-btn" data-modal="plan-details-modal">보장 자세히 보기</div>
                                            </div>
                                            <div className="plan-info">
                                                <div>
                                                    <span></span>
                                                    <span>N01. 여행자들의 선택</span>
                                                    <span></span>
                                                 </div>
                                                <div className="plan-price-box" style={{display:"flex", "gap": "0 4px"}}>
                                                    <div className="plan-price">
                                                        <span className="price-tot">
                                                            <span className="price-tot-num">11,330</span>원
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </form>

                        <div className="plan-top">
                            <p>국내 질병·상해·실손 의료비 가입</p>
                            <div className="plan-btn">
                                <label>
                                    <input type="checkbox" name="isIncludeDomestic" id="isIncludeDomestic" defaultChecked/>
                                    <div>
                                        <span style={{fontSize: "12px", fontWeight: "400"}} className="on">포함</span>
                                        <span style={{fontSize: "12px", fontWeight: "400"}} className="off">미포함</span>
                                    </div>
                                    <i></i>
                                </label>
                            </div>
                        </div>
                        <div className="link-copy">
                            <span className="lnr lnr-link"></span>
                            <p>링크 공유하기</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="floating">
                <button className="btn-before btn-hide" onClick={() => navigate(-1)}>
                    <span>이전</span>
                </button>
                <button className="btn-next" onClick={() => navigate('/travel/')}>
                    <span>다음</span>
                </button>
            </div>
        </section>
    );
}

export default Plan;
    