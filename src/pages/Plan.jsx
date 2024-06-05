import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MoHeader } from '../components/common/Header.jsx';     // 공통헤더
import { PcSubStep } from '../components/common/SubStep.jsx';   // 사이드영역
import { useDispatch, useSelector } from 'react-redux';
import { setJoinInfo } from '../reducers/setter.js';
import { comUtil } from '../js/util.js';
import useModal from '../reducers/useModal.ts';
import { dataList } from '../data.js';
import axios from 'axios';

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

    // 간편 보험료 계산
    useEffect(() => {insCalculation()}, []);
    
    // 보험기간 계산
    const getTripDate = () => {
        let { strDt, endDt, strTm, endTm } = form;
        
        return `${comUtil.getTripDate({strDt, endDt, strTm, endTm})}일`;
    }
    
    // 플랜 라디오버튼 핸들러
    const radioHandler = (e) => {
        let label = e.currentTarget.closest('label'),
            input = label.previousSibling;

        input.checked = true;
        setForm({...form, plan: input.value});
    }

    // 보장내역 모달 핸들러
    const modalHandler = (e) => {
        // 여행국가선택안내
        showModal({
            modalType: "PlanDetail",
            modalProps: {
                list : [...form.insInfo.planA, ...form.insInfo.planB],
                insType: form.insType,
                close: hideModal,
            }
        });
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
        //let result = await axios.post("/common/selectInsuList", param)
        //                        .catch(err => comPop.msg.warn(`[${err?.response?.status}]\n보험료계산 중 오류가 발생했습니다.`));
        
        let result = dataList;
        if (Array.isArray(result) && result.length) {
            // 든든플랜
            const planA = result.filter(plan => plan.planNo === "OT4711");
            // 안심플랜
            const planB = result.filter(plan => plan.planNo === "OT4712");
            // form 객체에 저장
            setForm({...form, insInfo: {planA, planB}});
        }
    }

    

    return (
        <>
            {/* PC 사이드 스탭 */}
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
                                        <input type="radio" id="insurance0" name="plan-version" value="0" defaultChecked={form.planCd === '0'}/>
                                        <label forhtml="insurance0">
                                            <div className="plan-choice-box" onClick={radioHandler}>
                                                <div className="plan-title-wrap">
                                                    <div className="plan-title">
                                                        <div className="radio"></div>
                                                        <h3 className="plan-name">든든</h3>
                                                    </div>
                                                    <div className="js-click-modal detail-overseas-modal-btn detail-insur-btn" data-modal="planA" onClick={modalHandler}>보장 자세히 보기</div>
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
                                                                <span className="price-tot-num">{comUtil.setComma(form.insInfo.planA[0].prem)}</span>원
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
                                        <input type="radio" id="insurance2" name="plan-version" value="2" defaultChecked={form.planCd === '2'}/>
                                        <label forhtml="insurance2">
                                            <div className="plan-choice-box" onClick={radioHandler}>
                                                <div className="plan-title-wrap">
                                                    <div className="plan-title">
                                                        <div className="radio"></div>
                                                        <h3 className="plan-name">안심</h3>
                                                    </div>
                                                    <div className="js-click-modal detail-overseas-modal-btn detail-insur-btn" data-modal="planB">보장 자세히 보기</div>
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
                                                                <span className="price-tot-num">{comUtil.setComma(form.insInfo.planB[0].prem)}</span>원
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
    