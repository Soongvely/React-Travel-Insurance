
const NoteInfo = () => {
    return (
        <div className="popup-wrap obligations-overseas-modal" style={{display: "block"}}>
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
                                <div className="q-scrollarea_content" style={{maxHeight: "645px", minHeight: "100%", minWidth: "100%"}}>
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
    );
}

export default NoteInfo;