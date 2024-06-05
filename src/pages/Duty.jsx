import { PcSubStep } from '../components/common/SubStep.jsx';   // 사이드영역
import { MoHeader } from '../components/common/Header.jsx';     // 공통헤더
import { useNavigate } from 'react-router-dom';

const Duty = () => {
    const navigate = useNavigate();

    return (
        <>
            <PcSubStep/> {/* PC 사이드 스탭 */}
            <section classNameName="right">
                <div classNameName="scrollarea">
                    <div classNameName="scrollarea_container">
                        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,200,0,0"/>
                        <MoHeader/> {/* 모바일 헤더 */}

                        <div class="contents">
                            <div class="main-txt">
                                <h1>알릴 의무를 확인해주세요</h1>
                                <div class="mo-step-bar">
                                    <span class="blue">5</span>/<span>7</span>
                                </div>
                            </div>
                            <form class="intro-form">
                                <div class="right_box">
                                    <div class="notification">
                                        <div class="con02">
                                            <div class="agree_radio">
                                                <span class="title04">현재 외국에 거주중이거나 가입장소가 외국입니까?</span>
                                                <span class="step04_radio">
                                                    <input type="radio" id="chkAgreeOverseas1_1" name="chkAgreeOverseas1" value="Y" onclick="chooseChk('1_1');"/>
                                                    <label for="chkAgreeOverseas1_1" class="radio_btn02 yes">예</label>
                                                    <input type="radio" id="chkAgreeOverseas1_2" name="chkAgreeOverseas1" value="N" onclick="chooseChk('1_2');"/>
                                                    <label for="chkAgreeOverseas1_2" class="radio_btn02 no">아니오</label>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="con02">
                                            <div class="agree_radio">
                                                <span class="title04">외국인, 이중국적자, 영주권자의 경우 해당 국적이나 영주권을 가진 국가로 출국합니까?</span>
                                                <span class="step04_radio">
                                                    <input type="radio" id="chkAgreeOverseas2_1" name="chkAgreeOverseas2" value="Y" onclick="chooseChk('2_1');"/>
                                                    <label for="chkAgreeOverseas2_1" class="radio_btn02 yes">예</label>
                                                    <input type="radio" id="chkAgreeOverseas2_2" name="chkAgreeOverseas2" value="N" onclick="chooseChk('2_2');"/>
                                                    <label for="chkAgreeOverseas2_2" class="radio_btn02 no">아니오</label>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="con02">
                                            <div class="agree_radio">
                                                <span class="title04">최근 3개월 이내 <b>입원/수술</b>(제왕절개 포함) 혹은 5년 이내에 11대 질병으로 <b>입원 또는 수술</b>을 받았던 사실이 있습니까?</span>
                                                <span class="step04_radio">
                                                    <input type="radio" id="chkAgreeOverseas3_1" name="chkAgreeOverseas3" value="Y" onclick="chooseChk('3_1');"/>
                                                    <label for="chkAgreeOverseas3_1" class="radio_btn02 yes">예</label>
                                                    <input type="radio" id="chkAgreeOverseas3_2" name="chkAgreeOverseas3" value="N" onclick="chooseChk('3_2');"/>
                                                    <label for="chkAgreeOverseas3_2" class="radio_btn02 no">아니오</label>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="con02">
                                            <div class="agree_radio">
                                                <span class="title04">위험한 운동이나 전문적인 체육/운동 대회 참가를 목적으로 출국합니까?</span>
                                                <span class="step04_radio">
                                                    <input type="radio" id="chkAgreeOverseas4_1" name="chkAgreeOverseas4" value="Y" onclick="chooseChk('4_1');"/>
                                                    <label for="chkAgreeOverseas4_1" class="radio_btn02 yes">예</label>
                                                    <input type="radio" id="chkAgreeOverseas4_2" name="chkAgreeOverseas4" value="N" onclick="chooseChk('4_2');"/>
                                                    <label for="chkAgreeOverseas4_2" class="radio_btn02 no">아니오</label>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="page-title-childbox page-title-childbox-list">
                                    <b>유의사항</b>
                                    <p>가입 전 진단 또는 치료를 받은 질병/상해 및 임신 / 출산에 관련된 의료비는 약관에 따라 보상하지 않습니다.</p>
                                    <p>11대 질병이란? 암 · 백혈병 · 고혈압 · 협심증 · 심근경색 · 심장판막증 · 간경화증 · 뇌졸증(뇌출혈 · 뇌경색) · 당뇨병 · 에이즈(AIDS) 및 HIV 보균 · 직장 또는 항문 관련질환(치질 · 치루(누공) · 치열 (찢어짐) · 항문 농양(고름질) · 직장 또는 항문 탈출 · 항문 출혈 · 항문 궤양 )</p>
                                    <p>전문적인 체육 / 운동대회란? 전문등반 · 스카이다이빙 · 스쿠버다이빙 · 행글라이딩 · 수상보트 · 패러글라이딩 · 자동차 및 오토바이 경주 · 번지점프 · 스키 및 보드 등 이와 유사한 활동</p>
                                </div>
                            </form>
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

export default Duty;