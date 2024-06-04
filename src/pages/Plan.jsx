import { useNavigate } from 'react-router-dom';
import { MoHeader } from '../components/common/Header.jsx';     // 공통헤더
import { PcSubStep } from '../components/common/SubStep.jsx';   // 사이드영역
import { useDispatch, useSelector } from 'react-redux';
import { setJoinInfo } from '../reducers/setter.js';
import { comUtil } from '../js/util.js';
import useModal from '../reducers/useModal.js';

/**
 * 플랜 선택
 * @param
 * @returns 
 */
const Plan = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // 커스텀 모달 훅
    const { showModal, hideModal } = useModal();
    
    // store state form객체
    const { form } = useSelector(state => state.setter);
    const setForm = obj => dispatch(setJoinInfo(obj));

    const handleRadio = (e) => {
        let label = e.currentTarget.closest('label'),
            input = label.previousSibling;

        input.checked = true;
        setForm({...form, plan: input.value});
    }

    // 보험기간 계산
    const getTripDate = () => {
        let { strDt, endDt, strTm, endTm } = form;
        
        return `${comUtil.getTripDate({strDt, endDt, strTm, endTm})}일`;
    }

    const modalHandler = () => {
        // 여행국가선택안내
        showModal({
            modalType: "CountryInfoModal",
            modalProps: {
                close: hideModal,
            }
        });
    }

    //플랜아이디별 필터
    const planA = form.insInfo.filter(plan => plan.planNo === "OT4711");
    const planB = form.insInfo.filter(plan => plan.planNo === "OT4712");
console.log(planA, planB);
    return (
        <>
            <PcSubStep/>
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
                                    <div className="info-list days">{getTripDate()}</div>
                                    <div className="info-list numOrGender">1명</div>
                                    <div className="info-list position">{form.country}</div>
                                </div>
                            </div>
                            <form className="intro-form">
                                <div className="plans-choice-wrap isWithDomestic">
                                    <div className="plans-choice-inner">
                                        <input type="radio" id="insurance0" name="plan-version" value="0" defaultChecked={form.plan === '0'}/>
                                        <label forhtml="insurance0">
                                            <div className="plan-choice-box" onClick={handleRadio}>
                                                <div className="plan-title-wrap">
                                                    <div className="plan-title">
                                                        <div className="radio"></div>
                                                        <h3 className="plan-name">든든</h3>
                                                    </div>
                                                    <div className="js-click-modal detail-overseas-modal-btn detail-insur-btn" data-modal="plan-details-modal" onClick={modalHandler}>보장 자세히 보기</div>
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
                                        <input type="radio" id="insurance2" name="plan-version" value="2" defaultChecked={form.plan === '2'}/>
                                        <label forhtml="insurance2">
                                            <div className="plan-choice-box" onClick={handleRadio}>
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
        </>
    );
}

export default Plan;
    