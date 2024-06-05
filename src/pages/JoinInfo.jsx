import { PcSubStep } from '../components/common/SubStep.jsx';   // 사이드영역
import { MoHeader } from '../components/common/Header.jsx';     // 공통헤더
import { useNavigate } from 'react-router-dom';

const JoinInfo = () => {
    const navigate = useNavigate();
    
    return (
        <>
            <PcSubStep/> {/* PC 사이드 스탭 */}
            <section classNameName="right">
                <div classNameName="scrollarea">
                    <div classNameName="scrollarea_container">
                        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,200,0,0"/>
                        <MoHeader/> {/* 모바일 헤더 */}

                        <div className="contents">
                            <div className="main-txt">
                                <h1>가입자 정보를 입력해 주세요</h1>
                                <div className="mo-step-bar">
                                    <span className="blue">4</span>/<span>7</span>
                                </div>
                            </div>
                            <form className="intro-form">
                                <div className="travel-purpose">
                                    <div className="intro-form-list">
                                        <ul>
                                            <li>
                                                <h5>이름</h5>
                                                <div className="input-div">
                                                    <input className="kor-name" koreanonly="" name="sParentNameKor" id="sParentNameKor" type="text" placeholder="예) 홍길동" maxLength="50" value="" autoComplete="off"/>
                                                </div>
                                            </li>
                                            <li>
                                                <h5>영문명</h5>
                                                <div className="input-div">
                                                    <input className="eng-name caps" englishonly="" name="sParentNameEng" id="sParentNameEng" type="text" placeholder="예) HONG GILDONG" maxLength="50" value="" autoComplete="off"/>

                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="intro-form-list">
                                        <h5>주민등록번호</h5>
                                        <ul>
                                            <li>
                                                <div className="input-div">
                                                    <input type="tel" className="disabled onlynumber" name="sParentRegNoHead" id="sParentRegNoHead" placeholder="주민번호 앞자리" maxLength="6" value="521212" readonly="readonly" disabled="" autoComplete="off"/>
                                                </div>
                                            </li>
                                            <span className="border"></span>
                                            <li>
                                                <div className="input-div">
                                                    <input type="tel" className="certi02 security onlynumber" data-birth="19521212" data-gender="1" name="sParentRegNoBody" id="sParentRegNoBody" placeholder="주민번호 뒷자리" maxLength="7" value="" autoComplete="off"/>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="intro-form-list">
                                        <ul>
                                            <li>
                                                <h5>휴대폰번호</h5>
                                                <div className="input-div">
                                                    <input type="tel" className="phone onlynumber" name="sParentCellphone" id="sParentCellphone" placeholder="-없이 숫자만 입력" maxLength="11" value="" autoComplete="off"/>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="intro-form-list">
                                        <ul>
                                            <li>
                                                <h5>이메일</h5>
                                                <div className="input-div">
                                                    <input type="email" className="email" name="sParentEmail" id="sParentEmail" placeholder="예) sample@example.com" data-autoset="email" maxLength="100" value=""/>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <h2 className="cp-title">피보험자 정보</h2>
                                    <div className="intro-form-list companion-cont" data-idx="1">
                                        <div className="companion-card-inner">
                                            <ul className="companion-card-header">
                                                <li className="companion-card-header-left">
                                                    <p className="shinhan-color">동반자 <span className="cp-no">1</span></p>
                                                </li>
                                            </ul>
                                            <div className="companion-card-body">
                                                <ul>
                                                    <li>
                                                        <h5>이름</h5>
                                                        <div className="input-div">
                                                            <input className="kor-name" koreanonly="" name="sCpNameKor_1" id="sCpNameKor_1" type="text" placeholder="한글(홍길동)" maxLength="50" autoComplete="off" value=""/>
                                                        </div>
                                                    </li>
                                                                                                                    <li>
                                                        <h5>영문명</h5>
                                                        <div className="input-div">
                                                            <input className="eng-name caps" englishonly="" name="sCpNameEng_1" id="sCpNameEng_1" type="text" placeholder="영문(HONG GILDONG)" maxLength="50" autoComplete="off" value=""/>
                                                        </div>
                                                    </li>
                                                                                                                </ul>
                                                <ul>
                                                                                                                        <li>
                                                            <h5>주민등록번호 7자리(생년월일/성별)</h5>
                                                            <div className="input-div ssno-wrap">
                                                                <input type="tel" className="disabled onlynumber mynum_head" data-birth="19950211" data-gender="1" name="sCpRegNoHead_1" id="sCpRegNoHead_1" maxLength="6" autoComplete="off" value="950211" readonly="readonly" disabled=""/>
                                                                <div className="border"></div>
                                                                <div className="mynum_body">
                                                                    <input type="tel" className="certi02 onlynumber singlenum" data-birth="19950211" data-gender="1" name="sCpRegNoBody_1" id="sCpRegNoBody_1" maxLength="1" autoComplete="off" value=""/>
                                                                    <span className="mynum_body_after"><i></i><i></i><i></i><i></i><i></i><i></i></span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="nation_wrap">
                                                            <h5>국적여부</h5>
                                                            <div className="input-div">
                                                                <div className="check-list inpCheck">
                                                                    <input type="radio" id="isLocal_k_1" name="isLocal_1" value="1" checked=""/>
                                                                    <label for="isLocal_k_1">
                                                                        <p>한국인</p>
                                                                    </label>
                                                                </div>
                                                                <div className="check-list inpCheck">
                                                                    <input type="radio" id="isLocal_f_1" name="isLocal_1" value="0"/>
                                                                    <label for="isLocal_f_1">
                                                                        <p>외국인</p>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                            </div>
                                        </div>
                                    </div>
                                                                                                                                
                                    <div className="page-title-childbox page-title-childbox-list">
                                        <b>유의사항</b>
                                        <p>보험 가입 완료후, 가입정보에 따라, 가입증명서를 기재하신 이메일로 자동으로 보내드립니다.</p>
                                        <p>일정 변경을 원하시면 계약 취소 후 재가입 바랍니다. 계약 취소는 보험 개시 전에만 가능합니다.</p>
                                        <p>만 100세까지 가입 가능합니다.</p>
                                        <p>외국인은 외국인 등록번호가 있는자에 한해 가입이 가능합니다.</p>
                                        <p>고객 문의 센터 : 02-418-2117</p>
                                    </div>
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

export default JoinInfo;