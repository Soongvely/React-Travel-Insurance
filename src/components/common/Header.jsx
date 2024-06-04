import { Link } from 'react-router-dom';

/**
 * PC 헤더
 * @returns 
 */
const PcHeader = () => {
    return (
        <div className="header header-pc">
            <header>
                <Link to="/travel/overseas">
                    <button type="button" className="btn-home" title="홈 버튼">
                        <span className="material-symbols-rounded">home</span>
                    </button>
                </Link>
                <div className="header-inner">
                <a href="/travel/overseas">
                    <img className="shinhan-logo logo" src="/images/travel/jinsol/jinsol-logo.jpg" alt="진솔아이엔에스" style={{position: "relative"}}></img>
                </a>
                </div>
            </header>
        </div>
    );
}

/**
 * 모바일 헤더
 * @returns 
 */
const MoHeader = () => {
    return (
        <div className="header-mo">
            <header>
            <div className="header-inner">
                <button type="button" className="btn-back btn-before back-button"><span></span><span></span><span></span></button>
                <a href="/travel/shinhan">
                    <img className="shinhan-logo logo" src="/images/travel/jinsol/jinsol-logo.jpg" alt="진솔아이엔에스" style={{position: "relative"}}></img>
                </a>
                <button type="button" className="btn-home " title="홈 버튼">
                <span className="material-symbols-rounded">home</span>
                </button>
            </div>
            </header>
        </div>
    );
}

export {PcHeader, MoHeader};
