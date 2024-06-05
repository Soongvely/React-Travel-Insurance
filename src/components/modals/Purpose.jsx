
const Purpose = ({ type, callback, close }) => {
  return (
        <div className="popup-wrap purpose-modal open">
          <div className="popup-bg"></div>
          <div className="popup type-middle">
            <div className="pop-header">
              <h1 className="pop-title">여행목적 선택</h1>
              <button type="button" className="btn-close" onClick={close}><span>닫기</span></button>
            </div>
            <div className="pop-body tit-line2">
              <div className="ui-scroll">
                <div className="pop-contents" onClick={callback} data-target="purpose">
                  <div className={`select-list purpose-list ${type === "1" && 'current'}`}>
                    <div className="select_item"><input id="purpose_1_1" value="travel" type="radio" name="purpose" /><label htmlFor="purpose_1_1">여행/관광</label></div>
                    <div className="select_item"><input id="purpose_1_2" value="buss_trip" type="radio" name="purpose"/><label htmlFor="purpose_1_2">업무/출장</label></div>
                    <div className="select_item"><input id="purpose_1_3" value="study" type="radio" name="purpose"/><label htmlFor="purpose_1_3">유학/연수/캠프</label></div>
                  </div>
                  <div className={`select-list purpose-list ${type === "2" && 'current'}`}>
                    <p className="teddyx-color">일반여행</p>
                    <div className="select_item"><input id="purpose_2_1" value="travel" type="radio" name="purpose"/><label htmlFor="purpose_2_1">여행/관광</label></div>
                    <div className="select_item"><input id="purpose_2_2" value="study" type="radio" name="purpose"/><label htmlFor="purpose_2_2">유학/연수/캠프</label></div>
                    <div className="select_item"><input id="purpose_2_3" value="job1" type="radio" name="purpose"/><label htmlFor="purpose_2_3">해외취업(사무직)</label></div>

                  </div>
                  <div className={`select-list purpose-list ${type === "3" && 'current'}`} onClick={e => e.stopPropagation()}>
                    <div className="select_item"><input id="purpose_3_1" value="domestic_travel" type="radio" name="purpose"/><label htmlFor="purpose_3_1">국내여행</label></div>
                    <div className="select_item"><input id="purpose_3_2" value="buss_trip" type="radio" name="purpose"/><label htmlFor="purpose_3_2">출장(현장작업없음)</label></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
    );
}

export default Purpose;