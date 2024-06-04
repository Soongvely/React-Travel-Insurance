import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { comUtil } from "../../js/util";

/**
 * PC 서브 스탭정보
 * @returns 
 */
const PcSubStep = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const page = location.pathname.replace('/travel/', '');
    const { form } = useSelector(state => state.setter);

    return (
        <aside className="left step-left">
            <div className="step-wrap">
                <div className="step-inner">
                    <ul>
                        <li>
                            <div className="main-name-wrap">
                                <h2 className="past">Step 1. <span>여행정보</span></h2>
                                <button type="button" onClick={() => navigate(`/travel/${form.insType}`)}>수정</button>
                            </div>
                            <div className="list-info-wrap">
                                <p>여행인원</p>
                                <div className="list-name">
                                    <span>- 가입자</span>
                                    <div className="list-info">{comUtil.formatDate(form.birth, '.')} ({comUtil.getInsAge(comUtil.formatDate(form.strDt), form.birth)}세/남)</div>
                                </div>
                            </div>
                            <div className="list-info-wrap">
                                <p>여행기간</p>
                                <div className="list-name">
                                    <span>- 출발일</span>
                                    <div className="list-info">{comUtil.formatDate(form.strDt, '.')} {comUtil.formatTime(form.strTm)}시부터</div>
                                </div>
                                <div className="list-name">
                                    <span>- 도착일</span>
                                    <div className="list-info">{comUtil.formatDate(form.endDt, '.')} {comUtil.formatTime(form.endTm)}시까지</div>
                                </div>
                            </div>
                        </li>
                        <li className={`${page === 'plan' ? 'current' : ''}`}>
                            <h2>Step 2. <span>가입플랜 보험료</span></h2>
                        </li>
                        <li className={`${page === '' ? 'current' : ''}`}>
                            <h2>Step 3. <span>가입자(계약자/피보험자) 정보</span></h2>
                        </li>
                        <li className={`${page === '' ? 'current' : ''}`}>
                            <h2>Step 4. <span>청약 내용 확인 (추가확인사항)</span></h2>
                        </li>
                        <li className={`${page === ' ' ? 'current' : ''}`}>
                            <h2>Step 5. <span>보험료 결제</span></h2>
                        </li>
                        <li>
                            <h2>Step 6. <span>완료</span></h2>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    );
}

export {PcSubStep};