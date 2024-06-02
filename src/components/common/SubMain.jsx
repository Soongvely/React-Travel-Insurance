import { useLocation } from "react-router-dom";

/**
 * PC 서브메인
 * @returns 
 */
const PcSubMain = () => {
    const location = useLocation();
    const page = (location.pathname).replace('/travel/', '');

    return (
        <aside className="left">
             {/** 해외여행 */}
            <div className={`left-pdt-details overseas ${page === 'overseas' ? 'current' : ''}`}>
                <div className="top-banner">
                <div className="top-txt">
                    <p>해외갈 때 꼭 챙기세요!</p>
                    <div className="main-txt">
                        <h1>해외여행보험</h1>
                    </div>
                    <div className="small-txt">
                        <span>해외 의료비는 물론 휴대품손해(분실제외) 보장,</span>
                        <span>항공기 지연비용(4시간이상) 든든하게 보장해드려요</span>
                        <span>(3개월 이내 해외여행)</span>
                        <span className="noti">*해당 특약 가입 시</span>
                    </div>
                </div>
                </div>
                <div className="bottom-banner">
                <div className="intro">
                    <img src="/images/travel/jinsol/intro.png" alt=""></img>
                </div>
                <div className="button-wrap">
                    <button type="button" className="btn js-click-modal" data-modal="obligations-overseas-modal">알아두실 사항</button>
                    <button type="button" className="btn-view-terms"><span>약관보기</span></button>
                </div>
                <div className="deliberation">
                    진솔아이엔에스(주) 대표자: 이승연
                    <br />
                    사업자등록번호:/ 312-80-79401ㅣ대리점등록번호: 2023051402
                    <br />
                    준법감시인 확인필 제2024-1100002 (2024.04.24~2025.04.23)
                </div>
                </div>
            </div>

             {/** 국내여행 */}
            <div className={`left-pdt-details domestic ${page === 'domestic' ? 'current' : ''}`}>
                <div className="top-banner">
                <div className="top-txt">
                    <p>안전한 여행, 국내여행이라고 잊지마세요</p>
                    <div className="main-txt">
                    <h1>국내여행보험</h1>
                    </div>
                    <div className="small-txt">
                    <span>국내에서 여행갈 때, 출장갈 때, 제주에서 한달 살 때,</span>
                    <span>예기치 못한 상해/레저, 응급실 치료, 휴대품손해(분실제외)</span>
                    <span>및 배상책임을 든든하게 케어 받으세요</span>
                    <span className="noti">*해당특약 가입 시</span>
                    </div>
                </div>
                </div>
                <div className="bottom-banner">
                <div className="intro" style={{marginTop:'15px'}}>
                    <img src="/images/travel/jinsol/intro-domestic.png" alt=""></img>
                </div>
                <div className="button-wrap">
                    <button type="button" className="btn js-click-modal" data-modal="obligations-domestic-modal">알아두실 사항</button>
                    <button type="button" className="btn-view-terms"><span>약관보기</span></button>
                </div>
                <div className="deliberation">
                    진솔아이엔에스 대표자: 이승연
                    <br />
                    사업자등록번호: 312-80-79401ㅣ대리점등록번호: 2023051402
                    <br />
                    준법감시인 확인필 제2024-1100001 (2024.04.24~2025.04.23)
                </div>
                </div>
            </div>
        </aside>
    );
}

/**
 * 모바일 서브메인
 * @returns 
 */
const MoSubMain = () => {
    const location = useLocation();
    const page = (location.pathname).replace('/travel/', '');

    return (
        <aside className="left left-mo" style={{marginTop:"62px"}}>
            {/** 해외여행 */}
            <div className={`left-pdt-details overseas  ${page === 'overseas' ? 'current' : ''}`}>
                <div className="top-banner">
                    <div className="top-txt">
                    <p>해외갈 때 꼭 챙기세요!</p>
                    <div className="main-txt">
                        <h1>해외여행보험</h1>
                    </div>
                    <div className="small-txt">
                        <span>해외 의료비는 물론 휴대품손해(분실제외) 보장,</span>
                        <span>항공기 지연비용(4시간이상) 든든하게 보장해드려요</span>
                        <span>(3개월 이내 해외여행)</span>
                        <span className="noti">*해당 특약 가입 시</span>
                    </div>
                    </div>
                </div>
                <div className="bottom-banner">
                    <div className="intro">
                        <img src="/images/travel/jinsol/intro.png" alt=""></img>
                    </div>
                    <div className="button-wrap">
                    <button type="button" className="btn js-click-modal" data-modal="obligations-overseas-modal">알아두실 사항</button>

                    <button type="button" className="btn-view-terms"><span>약관보기</span></button>
                    </div>
                    <div className="deliberation">
                    진솔아이엔에스(주) 대표자: 이승연
                    <br />
                    사업자등록번호: 312-80-79401ㅣ대리점등록번호: 2023051402
                    <br />
                    준법감시인 확인필 제2024-1100002 (2024.04.24~2025.04.23)
                    </div>
                </div>
            </div>
            
            {/** 국내여행 */}
            <div className={`left-pdt-details domestic ${page === 'domestic' ? 'current' : ''}`}>
                <div className="top-banner">
                    <div className="top-txt">
                    <p>안전한 여행, 국내여행이라고 잊지마세요</p>
                    <div className="main-txt">
                        <h1>든든 국내여행보험</h1>
                    </div>
                    <div className="small-txt">
                        <span>국내에서 여행갈 때, 출장갈 때, 제주에서 한달 살 때,</span>
                        <span>예기치 못한 상해/레저, 응급실 치료,</span>
                        <span>휴대품손해(분실제외) 및 배상책임을 든든하게 케어 받으세요</span>
                        <span className="noti">*해당특약 가입 시</span>
                    </div>
                    </div>
                </div>
                <div className="bottom-banner">
                    <div className="intro">
                    <img src="/images/travel/jinsol/intro-domestic.png" alt=""></img>
                    </div>
                    <div className="deliberation">
                    진솔아이엔에스(주) 대표자: 이승연
                    <br />
                    사업자등록번호: 312-80-79401ㅣ대리점등록번호: 2023051402
                    <br />
                    준법감시인 확인필 제2024-1100001 (2024.04.24~2025.04.23)
                    </div>
                    <div className="button-wrap">
                    <button type="button" className="btn js-click-modal" data-modal="obligations-domestic-modal">알아두실 사항</button>

                    <button type="button" className="btn-view-terms"><span>약관보기</span></button>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export {PcSubMain, MoSubMain};