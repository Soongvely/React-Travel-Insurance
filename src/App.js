
import { Route, Routes } from 'react-router-dom';
import { PcHeader } from './components/common/Header.jsx'; // PC 공통헤더 컴포넌트
import Overseas from './pages/Overseas.jsx';
import Domestic from './pages/Domestic.jsx';
import Join from './pages/Join.jsx';
import Plan from './pages/Plan.jsx';
import GlobalModal from './components/modals/GlobalModal.tsx';  // 전역 모달 컴포넌트

function App() {
  return (
    <div className="App">
      {/* Global Modal */}
      <GlobalModal />
      
      <div id="wrap">
        <div className="container">
          {/* common-header */}
          <PcHeader/>
          
          <main className="section01">
            <div className="main">
              <Routes>
                <Route path="/travel/overseas" element={<Overseas/>}></Route> {/** 해외여행 입력 폼 */}
                <Route path="/travel/domestic" element={<Domestic/>}></Route> {/** 국내여행 입력 폼 */}
                <Route path="/travel/join" element={<Join/>}></Route> {/** 가입자 정보 입력 폼 */}
                <Route path="/travel/plan" element={<Plan/>}></Route> {/** 플랜 선택 폼 */}
              </Routes>
            </div>
          </main> 
        <div className="popup-wrap countryInfo-modal">
          <div className="popup-bg"></div>
          <div className="popup type-middle">
            <div className="pop-header">
              <h1 className="pop-title">여행국가 선택 안내</h1>
              <button type="button" className="btn-close"><span>닫기</span></button>
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
        <div className="popup-wrap obligations-overseas-modal">
          <div className="popup-bg"></div>
          <div className="popup type-middle">
            <div className="pop-header">
              <h1 className="pop-title">알아두실 사항</h1>
              <button type="button" className="btn-close"><span>닫기</span></button>
            </div>
            <div className="pop-body tit-line2">
              <div className="ui-scroll">
                <div className="pop-contents">

                  <div className="q-scrollarea">
                    <div className="q-scrollarea_content" style={{maxHeight:"645px", minHeight: "100%", minwidth: "100%", "overflowY": "scroll"}}>
                      <div className="contents-box contents-box-first">
                        <p className="before-minus">
                          산악등반이나 스키 등 기타 위험이 높은 레저활동, 직업(직무) 또는 동호회 활동목적의 행위로 인해 상해 관련 보험금 지급사유가 발생한 때에는 해당 보험금을 지급하지 않습니다.
                        </p>
                        <p className="before-minus">
                          해외실손의료비, 휴대품손해는 다수계약(공제계약포함)이 체결되어 있는 경우, 약관에 따라 실손비례 보상됩니다.
                        </p>
                        <p className="before-minus">
                          보험계약 체결 전 상품설명서 및 약관을 반드시 확인하시기 바랍니다.
                        </p>
                        <p className="before-minus">
                          보험계약자가 기존보험계약을 해지하고, 새로운 보험계약을 체결할 경우 인수거절, 보험료 인상, 보장내용 축소 등 불이익이 생길 수 있습니다.
                        </p>
                        <p className="before-minus">
                          면책사항 및 제급제한 사유 등으로 보험금이 제한될 수 있습니다.
                        </p>
                        <p className="before-minus">
                          이 보험계약은 예금자보험법에 따라 해약환급금(또는 만기시 보험금)에 기타지급금을 합한 금액이 1인당 “5천만원까지”(본 보험회사의 여타 보호상품과 합산)보호됩니다. 이와 별도로 본 보험회사 보호상품의 사고보험금을 합산한 금액이 1인당 “5천만원까지”보호 됩니다.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="popup-wrap obligations-domestic-modal">
          <div className="popup-bg"></div>
          <div className="popup type-middle">
            <div className="pop-header">
              <h1 className="pop-title">알아두실 사항</h1>
              <button type="button" className="btn-close"><span>닫기</span></button>
            </div>
            <div className="pop-body tit-line2">
              <div className="ui-scroll">
                <div className="pop-contents">

                  <div className="q-scrollarea">
                    <div className="q-scrollarea_content" style={{maxHeight:"645px", minHeight: "100%", minWidth: "100%", "overflowY": "scroll"}}>
                      <div className="contents-box contents-box-first">
                        <p className="before-minus">
                          산악등반이나 스키 등 기타 위험이 높은 레저활동, 직업(직무) 또는 동호회 활동목적의 행위로 인해 상해 관련 보험금 지급사유가 발생한 때에는 해당 보험금을 지급하지 않습니다.
                        </p>
                        <p className="before-minus">
                          실손의료비, 배상책임, 휴대품손해는 다수계약 (공제계약포함)이 체결되어 있는 경우, 약관에 따 라 실손비례 보상됩니다.
                        </p>
                        <p className="before-minus">
                          보험계약 체결 전 상품설명서 및 약관을 반드시 확인하시기 바랍니다.
                        </p>
                        <p className="before-minus">
                          보험계약자가 기존보험계약을 해지하고, 새로운 보험계약을 체결할 경우 인수거절, 보험료 인상, 보장내용 축소 등 불이익이 생길 수 있습니다.
                        </p>
                        <p className="before-minus">
                          면책사항 및 지급제한 사유 등으로 보험금 지급이 제한될 수 있습니다.
                        </p>
                        <p className="before-minus">
                          이 보험계약은 예금자보호법에 따라 해약환급금 (또는 만기시 보험금)에 기타지급금을 합한 금액 이 1인당 5천만원까지"(본 보험회사의 여타 보 호상품과 합산) 보호됩니다. 이와별도로 본 보험 회사 보호상품의 사고보험금을 합산한 금액이 1 인당 " 5천만원까지" 보호됩니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="popup-wrap obligations-longterm-modal">
          <div className="popup-bg"></div>
          <div className="popup type-middle">
            <div className="pop-header">
              <h1 className="pop-title">알아두실 사항</h1>
              <button type="button" className="btn-close"><span>닫기</span></button>
            </div>
            <div className="pop-body tit-line2">
              <div className="ui-scroll">
                <div className="pop-contents">

                  <div className="q-scrollarea">
                    <div className="q-scrollarea_content" style={{maxHeight:"645px", minHeight: "100%", minWidth: "100%", "overflowY": "scroll"}}>
                      <div className="contents-box contents-box-first">
                        <p className="before-minus">
                          해외의료비, 중대사고 구조송환비용, 배상책임은 다수계약(공제계약포함)이 체결되어 있는 경우, 약관에 따라 실손비례 보상됩니다.
                        </p>
                        <p className="before-minus">
                          보험계약 체결 전 상품설명서 및 약관을 반드시 확인하시기 바랍니다.
                        </p>
                        <p className="before-minus">
                          보험계약자가 기존보험계약을 해지하고, 새로운 보험계약을 체결할 경우 인수거절, 보험료 인상, 보장내용 축소 등 불이익이 생길 수 있습니다.
                        </p>
                        <p className="before-minus">
                          면책사항 및 지급제한 사유 등으로 보험금 지급이 제한될 수 있습니다.
                        </p>
                        <p className="before-minus">
                          이 보험계약은 예금자보호법에 따라 해약환급금 (또는 만기시 보험금)에 기타지급금을 합한 금액 이 1인당 5천만원까지"(본 보험회사의 여타 보 호상품과 합산) 보호됩니다. 이와별도로 본 보험 회사 보호상품의 사고보험금을 합산한 금액이 1 인당 5천만원까지" 보호됩니다
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="popup-wrap prev-insurance-companies-modal">
          <div className="popup-bg"></div>
          <div className="popup type-middle">
            <div className="pop-header">
              <h1 className="pop-title">보험사 선택</h1>
              <button type="button" className="btn-close"><span>닫기</span></button>
            </div>
            <div className="pop-body tit-line2">
              <div className="ui-scroll">
                <div className="pop-contents">
                  <div className="select-list old-insu-list">
                    <div className="select_item"><input id="INS_SH" value="SH" type="radio" name="oldinsu" /><label htmlFor="INS_SH">신한</label></div>
                    <div className="select_item"><input id="INS_MR" value="MR" type="radio" name="oldinsu" /><label htmlFor="INS_MR">메리츠</label></div>
                    <div className="select_item"><input id="INS_HN" value="HN" type="radio" name="oldinsu" /><label htmlFor="INS_HN">하나</label></div>
                    <div className="select_item"><input id="INS_DB" value="DB" type="radio" name="oldinsu" /><label htmlFor="INS_DB">DB</label></div>
                    <div className="select_item"><input id="INS_KB" value="KB" type="radio" name="oldinsu" /><label htmlFor="INS_KB">KB</label></div>
                    <div className="select_item"><input id="INS_SS" value="SS" type="radio" name="oldinsu" /><label htmlFor="INS_SS">삼성</label></div>
                    <div className="select_item"><input id="INS_LT" value="LT" type="radio" name="oldinsu" /><label htmlFor="INS_LT">롯데</label></div>
                    <div className="select_item"><input id="INS_HH" value="HH" type="radio" name="oldinsu" /><label htmlFor="INS_HH">한화</label></div>
                    <div className="select_item"><input id="INS_HD" value="HD" type="radio" name="oldinsu" /><label htmlFor="INS_HD">현대</label></div>
                    <div className="select_item"><input id="INS_CR" value="CR" type="radio" name="oldinsu" /><label htmlFor="INS_CR">캐롯</label></div>
                    <div className="select_item"><input id="INS_ETC" value="ETC" type="radio" name="oldinsu" /><label htmlFor="INS_ETC">기타</label></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
  
}

export default App;
