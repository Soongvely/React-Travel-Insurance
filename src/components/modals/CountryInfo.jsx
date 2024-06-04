
const CountryInfo = ({close}) => {
    return (
        <div className="popup-wrap countryInfo-modal" style={{display: "block"}}>
            <div className="popup-bg"></div>
            <div className="popup type-middle">
                <div className="pop-header">
                    <h1 className="pop-title">여행국가 선택 안내</h1>
                    <button type="button" className="btn-close" onClick={close}><span>닫기</span></button>
                </div>
                <div className="pop-body tit-line2">
                    <div className="ui-scroll">
                        <div className="pop-contents">
                            <div className="select-list countryInfo-list">
                                <ul className="list-wrap">
                                    <li>한번에 여러 국가 여행 시, 대표 국가 하나만 선택해 주세요.</li>
                                    <li>여행하는 국가에 따라 보험료가 다르지 않습니다.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CountryInfo;