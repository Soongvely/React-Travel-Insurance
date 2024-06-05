
const Country = ({ close, callback }) => {
    return (
        <div className="popup-wrap country-modal open"> 
            <div className="popup-bg"></div>
            <div className="popup type-middle">
                <div className="pop-header">
                    <h1 className="pop-title">여행국가 선택</h1>
                    <button type="button" className="btn-close" onClick={close}><span>닫기</span></button>
                </div>
                <div className="pop-body tit-line2">
                    <div className="ui-scroll">
                        <div className="pop-contents">
                            <div className="select-list country-list" data-target="country" onClick={callback} style={{maxHeight: "350px", height: "360px", "overflowY": "scroll"}}>
                                <p className="teddyx-color" onClick={e => e.stopPropagation()}>주요국가</p>
                                <div className="select_item"><input id="CA" value="CA" type="radio" name="country" /><label htmlFor="CA">캐나다</label></div>
                                <div className="select_item"><input id="US" value="US" type="radio" name="country" /><label htmlFor="US">미국</label></div>
                                <div className="select_item"><input id="TH" value="TH" type="radio" name="country" /><label htmlFor="TH">태국</label></div>
                                <div className="select_item"><input id="PH" value="PH" type="radio" name="country" /><label htmlFor="PH">필리핀</label></div>
                                <div className="select_item"><input id="CN" value="CN" type="radio" name="country" /><label htmlFor="CN">중국</label></div>
                                <div className="select_item"><input id="MY" value="MY" type="radio" name="country" /><label htmlFor="MY">말레이시아</label></div>
                                <div className="select_item"><input id="AU" value="AU" type="radio" name="country" /><label htmlFor="AU">호주</label></div>
                                <div className="select_item"><input id="JP" value="JP" type="radio" name="country" /><label htmlFor="JP">일본</label></div>
                                <div className="select_item"><input id="VN" value="VN" type="radio" name="country" /><label htmlFor="VN">베트남</label></div>
                                <p className="teddyx-color" onClick={e => e.stopPropagation()}>전체국가</p>
                                <div className="select_item"><input id="GH" value="GH" type="radio" name="country" /><label htmlFor="GH">가나</label></div>
                                <div className="select_item"><input id="GA" value="GA" type="radio" name="country" /><label htmlFor="GA">가봉</label></div>
                                <div className="select_item"><input id="GY" value="GY" type="radio" name="country" /><label htmlFor="GY">가이아나</label></div>
                                <div className="select_item"><input id="GM" value="GM" type="radio" name="country" /><label htmlFor="GM">감비아</label></div>
                                <div className="select_item"><input id="GG" value="GG" type="radio" name="country" /><label htmlFor="GG">건지섬</label></div>
                                <div className="select_item"><input id="GP" value="GP" type="radio" name="country" /><label htmlFor="GP">과들루프</label></div>
                                <div className="select_item"><input id="GT" value="GT" type="radio" name="country" /><label htmlFor="GT">과테말라</label></div>
                                <div className="select_item"><input id="GU" value="GU" type="radio" name="country" /><label htmlFor="GU">괌</label></div>
                                <div className="select_item"><input id="VA" value="VA" type="radio" name="country" /><label htmlFor="VA">교황청(바티칸)</label></div>
                                <div className="select_item"><input id="GD" value="GD" type="radio" name="country" /><label htmlFor="GD">그레나다</label></div>
                                <div className="select_item"><input id="GR" value="GR" type="radio" name="country" /><label htmlFor="GR">그리스</label></div>
                                <div className="select_item"><input id="GL" value="GL" type="radio" name="country" /><label htmlFor="GL">그린란드</label></div>
                                <div className="select_item"><input id="GN" value="GN" type="radio" name="country" /><label htmlFor="GN">기니</label></div>
                                <div className="select_item"><input id="GW" value="GW" type="radio" name="country" /><label htmlFor="GW">기니비사우</label></div>
                                <div className="select_item"><input id="NA" value="NA" type="radio" name="country" /><label htmlFor="NA">나미비아</label></div>
                                <div className="select_item"><input id="NR" value="NR" type="radio" name="country" /><label htmlFor="NR">나우루</label></div>
                                <div className="select_item"><input id="NG" value="NG" type="radio" name="country" /><label htmlFor="NG">나이지리아</label></div>
                                <div className="select_item"><input id="AQ" value="AQ" type="radio" name="country" /><label htmlFor="AQ">남극대륙</label></div>
                                <div className="select_item"><input id="ZA" value="ZA" type="radio" name="country" /><label htmlFor="ZA">남아공(남아프리카공화국)</label></div>
                                <div className="select_item"><input id="NL" value="NL" type="radio" name="country" /><label htmlFor="NL">네덜란드</label></div>
                                <div className="select_item"><input id="NP" value="NP" type="radio" name="country" /><label htmlFor="NP">네팔</label></div>
                                <div className="select_item"><input id="NO" value="NO" type="radio" name="country" /><label htmlFor="NO">노르웨이</label></div>
                                <div className="select_item"><input id="NF" value="NF" type="radio" name="country" /><label htmlFor="NF">노퍽섬</label></div>
                                <div className="select_item"><input id="NZ" value="NZ" type="radio" name="country" /><label htmlFor="NZ">뉴질랜드</label></div>
                                <div className="select_item"><input id="NC" value="NC" type="radio" name="country" /><label htmlFor="NC">뉴칼레도니아</label></div>
                                <div className="select_item"><input id="NU" value="NU" type="radio" name="country" /><label htmlFor="NU">니우에</label></div>
                                <div className="select_item"><input id="NE" value="NE" type="radio" name="country" /><label htmlFor="NE">니제르</label></div>
                                <div className="select_item"><input id="NI" value="NI" type="radio" name="country" /><label htmlFor="NI">니카라과</label></div>
                                <div className="select_item"><input id="TW" value="TW" type="radio" name="country" /><label htmlFor="TW">대만(타이완)</label></div>
                                <div className="select_item"><input id="DK" value="DK" type="radio" name="country" /><label htmlFor="DK">덴마크</label></div>
                                <div className="select_item"><input id="DO" value="DO" type="radio" name="country" /><label htmlFor="DO">도미니카공화국</label></div>
                                <div className="select_item"><input id="DM" value="DM" type="radio" name="country" /><label htmlFor="DM">도미니카연방</label></div>
                                <div className="select_item"><input id="DE" value="DE" type="radio" name="country" /><label htmlFor="DE">독일</label></div>
                                <div className="select_item"><input id="TL" value="TL" type="radio" name="country" /><label htmlFor="TL">동티모르</label></div>
                                <div className="select_item"><input id="LA" value="LA" type="radio" name="country" /><label htmlFor="LA">라오스</label></div>
                                <div className="select_item"><input id="LR" value="LR" type="radio" name="country" /><label htmlFor="LR">라이베리아</label></div>
                                <div className="select_item"><input id="LV" value="LV" type="radio" name="country" /><label htmlFor="LV">라트비아</label></div>
                                <div className="select_item"><input id="RU" value="RU" type="radio" name="country" /><label htmlFor="RU">러시아</label></div>
                                <div className="select_item"><input id="LB" value="LB" type="radio" name="country" /><label htmlFor="LB">레바논</label></div>
                                <div className="select_item"><input id="LS" value="LS" type="radio" name="country" /><label htmlFor="LS">레소토</label></div>
                                <div className="select_item"><input id="RE" value="RE" type="radio" name="country" /><label htmlFor="RE">레위니옹</label></div>
                                <div className="select_item"><input id="RO" value="RO" type="radio" name="country" /><label htmlFor="RO">루마니아</label></div>
                                <div className="select_item"><input id="LU" value="LU" type="radio" name="country" /><label htmlFor="LU">룩셈부르크</label></div>
                                <div className="select_item"><input id="RW" value="RW" type="radio" name="country" /><label htmlFor="RW">르완다</label></div>
                                <div className="select_item"><input id="LY" value="LY" type="radio" name="country" /><label htmlFor="LY">리비아</label></div>
                                <div className="select_item"><input id="LT" value="LT" type="radio" name="country" /><label htmlFor="LT">리투아니아</label></div>
                                <div className="select_item"><input id="LI" value="LI" type="radio" name="country" /><label htmlFor="LI">리히텐슈타인</label></div>
                                <div className="select_item"><input id="MG" value="MG" type="radio" name="country" /><label htmlFor="MG">마다가스카르</label></div>
                                <div className="select_item"><input id="MQ" value="MQ" type="radio" name="country" /><label htmlFor="MQ">마르티니크</label></div>
                                <div className="select_item"><input id="MH" value="MH" type="radio" name="country" /><label htmlFor="MH">마셜제도</label></div>
                                <div className="select_item"><input id="YT" value="YT" type="radio" name="country" /><label htmlFor="YT">마요트</label></div>
                                <div className="select_item"><input id="MO" value="MO" type="radio" name="country" /><label htmlFor="MO">마카오</label></div>
                                <div className="select_item"><input id="MK" value="MK" type="radio" name="country" /><label htmlFor="MK">마케도니아</label></div>
                                <div className="select_item"><input id="MW" value="MW" type="radio" name="country" /><label htmlFor="MW">말라위</label></div>
                                <div className="select_item"><input id="ML" value="ML" type="radio" name="country" /><label htmlFor="ML">말리</label></div>
                                <div className="select_item"><input id="IM" value="IM" type="radio" name="country" /><label htmlFor="IM">맨섬</label></div>
                                <div className="select_item"><input id="MX" value="MX" type="radio" name="country" /><label htmlFor="MX">멕시코</label></div>
                                <div className="select_item"><input id="MC" value="MC" type="radio" name="country" /><label htmlFor="MC">모나코</label></div>
                                <div className="select_item"><input id="MA" value="MA" type="radio" name="country" /><label htmlFor="MA">모로코</label></div>
                                <div className="select_item"><input id="MU" value="MU" type="radio" name="country" /><label htmlFor="MU">모리셔스</label></div>
                                <div className="select_item"><input id="MR" value="MR" type="radio" name="country" /><label htmlFor="MR">모리타니아</label></div>
                                <div className="select_item"><input id="MZ" value="MZ" type="radio" name="country" /><label htmlFor="MZ">모잠비크</label></div>
                                <div className="select_item"><input id="ME" value="ME" type="radio" name="country" /><label htmlFor="ME">몬테네그로</label></div>
                                <div className="select_item"><input id="MS" value="MS" type="radio" name="country" /><label htmlFor="MS">몬트세랫</label></div>
                                <div className="select_item"><input id="MD" value="MD" type="radio" name="country" /><label htmlFor="MD">몰도바</label></div>
                                <div className="select_item"><input id="MV" value="MV" type="radio" name="country" /><label htmlFor="MV">몰디브</label></div>
                                <div className="select_item"><input id="MT" value="MT" type="radio" name="country" /><label htmlFor="MT">몰타</label></div>
                                <div className="select_item"><input id="MN" value="MN" type="radio" name="country" /><label htmlFor="MN">몽골</label></div>
                                <div className="select_item"><input id="VI" value="VI" type="radio" name="country" /><label htmlFor="VI">미국령버진아일랜드</label></div>
                                <div className="select_item"><input id="AS" value="AS" type="radio" name="country" /><label htmlFor="AS">미국령사모아</label></div>
                                <div className="select_item"><input id="UM" value="UM" type="radio" name="country" /><label htmlFor="UM">미국령소군도</label></div>
                                <div className="select_item"><input id="MM" value="MM" type="radio" name="country" /><label htmlFor="MM">미얀마(버마)</label></div>
                                <div className="select_item"><input id="FM" value="FM" type="radio" name="country" /><label htmlFor="FM">미크로네시아</label></div>
                                <div className="select_item"><input id="VU" value="VU" type="radio" name="country" /><label htmlFor="VU">바누아투</label></div>
                                <div className="select_item"><input id="BH" value="BH" type="radio" name="country" /><label htmlFor="BH">바레인</label></div>
                                <div className="select_item"><input id="BB" value="BB" type="radio" name="country" /><label htmlFor="BB">바베이도스</label></div>
                                <div className="select_item"><input id="BS" value="BS" type="radio" name="country" /><label htmlFor="BS">바하마</label></div>
                                <div className="select_item"><input id="BD" value="BD" type="radio" name="country" /><label htmlFor="BD">방글라데시</label></div>
                                <div className="select_item"><input id="BM" value="BM" type="radio" name="country" /><label htmlFor="BM">버뮤다</label></div>
                                <div className="select_item"><input id="BJ" value="BJ" type="radio" name="country" /><label htmlFor="BJ">베냉</label></div>
                                <div className="select_item"><input id="VE" value="VE" type="radio" name="country" /><label htmlFor="VE">베네수엘라</label></div>
                                <div className="select_item"><input id="BE" value="BE" type="radio" name="country" /><label htmlFor="BE">벨기에</label></div>
                                <div className="select_item"><input id="BY" value="BY" type="radio" name="country" /><label htmlFor="BY">벨라루스</label></div>
                                <div className="select_item"><input id="BZ" value="BZ" type="radio" name="country" /><label htmlFor="BZ">벨리즈</label></div>
                                <div className="select_item"><input id="BA" value="BA" type="radio" name="country" /><label htmlFor="BA">보스니아헤르체고비나</label></div>
                                <div className="select_item"><input id="BW" value="BW" type="radio" name="country" /><label htmlFor="BW">보츠와나</label></div>
                                <div className="select_item"><input id="BO" value="BO" type="radio" name="country" /><label htmlFor="BO">볼리비아</label></div>
                                <div className="select_item"><input id="BI" value="BI" type="radio" name="country" /><label htmlFor="BI">부룬디</label></div>
                                <div className="select_item"><input id="BF" value="BF" type="radio" name="country" /><label htmlFor="BF">부르키나파소</label></div>
                                <div className="select_item"><input id="BV" value="BV" type="radio" name="country" /><label htmlFor="BV">부베섬</label></div>
                                <div className="select_item"><input id="BT" value="BT" type="radio" name="country" /><label htmlFor="BT">부탄</label></div>
                                <div className="select_item"><input id="BG" value="BG" type="radio" name="country" /><label htmlFor="BG">불가리아</label></div>
                                <div className="select_item"><input id="BR" value="BR" type="radio" name="country" /><label htmlFor="BR">브라질</label></div>
                                <div className="select_item"><input id="BN" value="BN" type="radio" name="country" /><label htmlFor="BN">브루나이</label></div>
                                <div className="select_item"><input id="WS" value="WS" type="radio" name="country" /><label htmlFor="WS">사모아</label></div>
                                <div className="select_item"><input id="SA" value="SA" type="radio" name="country" /><label htmlFor="SA">사우디아라비아</label></div>
                                <div className="select_item"><input id="GS" value="GS" type="radio" name="country" /><label htmlFor="GS">사우스조지아사우스샌드위치제도</label></div>
                                <div className="select_item"><input id="MP" value="MP" type="radio" name="country" /><label htmlFor="MP">사이판(북마리아나제도)</label></div>
                                <div className="select_item"><input id="CQ" value="CQ" type="radio" name="country" /><label htmlFor="CQ">사크섬</label></div>
                                <div className="select_item"><input id="SM" value="SM" type="radio" name="country" /><label htmlFor="SM">산마리노</label></div>
                                <div className="select_item"><input id="ST" value="ST" type="radio" name="country" /><label htmlFor="ST">상투메프린시페</label></div>
                                <div className="select_item"><input id="MF" value="MF" type="radio" name="country" /><label htmlFor="MF">생마르탱</label></div>
                                <div className="select_item"><input id="BL" value="BL" type="radio" name="country" /><label htmlFor="BL">생바르텔레미</label></div>
                                <div className="select_item"><input id="PM" value="PM" type="radio" name="country" /><label htmlFor="PM">생피에르미클롱</label></div>
                                <div className="select_item"><input id="EH" value="EH" type="radio" name="country" /><label htmlFor="EH">서사하라</label></div>
                                <div className="select_item"><input id="SN" value="SN" type="radio" name="country" /><label htmlFor="SN">세네갈</label></div>
                                <div className="select_item"><input id="RS" value="RS" type="radio" name="country" /><label htmlFor="RS">세르비아</label></div>
                                <div className="select_item"><input id="SC" value="SC" type="radio" name="country" /><label htmlFor="SC">세이셸</label></div>
                                <div className="select_item"><input id="LC" value="LC" type="radio" name="country" /><label htmlFor="LC">세인트루시아</label></div>
                                <div className="select_item"><input id="VC" value="VC" type="radio" name="country" /><label htmlFor="VC">세인트빈센트그레나딘</label></div>
                                <div className="select_item"><input id="KN" value="KN" type="radio" name="country" /><label htmlFor="KN">세인트키츠네비스</label></div>
                                <div className="select_item"><input id="SH" value="SH" type="radio" name="country" /><label htmlFor="SH">세인트헬레나</label></div>
                                <div className="select_item"><input id="SO" value="SO" type="radio" name="country" /><label htmlFor="SO">소말리아</label></div>
                                <div className="select_item"><input id="SB" value="SB" type="radio" name="country" /><label htmlFor="SB">솔로몬제도</label></div>
                                <div className="select_item"><input id="SD" value="SD" type="radio" name="country" /><label htmlFor="SD">수단</label></div>
                                <div className="select_item"><input id="SR" value="SR" type="radio" name="country" /><label htmlFor="SR">수리남</label></div>
                                <div className="select_item"><input id="LK" value="LK" type="radio" name="country" /><label htmlFor="LK">스리랑카</label></div>
                                <div className="select_item"><input id="SJ" value="SJ" type="radio" name="country" /><label htmlFor="SJ">스발바르제도</label></div>
                                <div className="select_item"><input id="SZ" value="SZ" type="radio" name="country" /><label htmlFor="SZ">스와질란드</label></div>
                                <div className="select_item"><input id="SE" value="SE" type="radio" name="country" /><label htmlFor="SE">스웨덴</label></div>
                                <div className="select_item"><input id="CH" value="CH" type="radio" name="country" /><label htmlFor="CH">스위스</label></div>
                                <div className="select_item"><input id="ES" value="ES" type="radio" name="country" /><label htmlFor="ES">스페인</label></div>
                                <div className="select_item"><input id="SK" value="SK" type="radio" name="country" /><label htmlFor="SK">슬로바키아</label></div>
                                <div className="select_item"><input id="SI" value="SI" type="radio" name="country" /><label htmlFor="SI">슬로베니아</label></div>
                                <div className="select_item"><input id="SY" value="SY" type="radio" name="country" /><label htmlFor="SY">시리안아랍공화국(시리아)</label></div>
                                <div className="select_item"><input id="SL" value="SL" type="radio" name="country" /><label htmlFor="SL">시에라리온</label></div>
                                <div className="select_item"><input id="SX" value="SX" type="radio" name="country" /><label htmlFor="SX">신트마르턴</label></div>
                                <div className="select_item"><input id="SG" value="SG" type="radio" name="country" /><label htmlFor="SG">싱가포르</label></div>
                                <div className="select_item"><input id="AE" value="AE" type="radio" name="country" /><label htmlFor="AE">아랍에미리트</label></div>
                                <div className="select_item"><input id="AW" value="AW" type="radio" name="country" /><label htmlFor="AW">아루바</label></div>
                                <div className="select_item"><input id="AM" value="AM" type="radio" name="country" /><label htmlFor="AM">아르메니아</label></div>
                                <div className="select_item"><input id="AR" value="AR" type="radio" name="country" /><label htmlFor="AR">아르헨티나</label></div>
                                <div className="select_item"><input id="IS" value="IS" type="radio" name="country" /><label htmlFor="IS">아이슬란드</label></div>
                                <div className="select_item"><input id="HT" value="HT" type="radio" name="country" /><label htmlFor="HT">아이티</label></div>
                                <div className="select_item"><input id="IE" value="IE" type="radio" name="country" /><label htmlFor="IE">아일랜드</label></div>
                                <div className="select_item"><input id="AZ" value="AZ" type="radio" name="country" /><label htmlFor="AZ">아제르바이잔</label></div>
                                <div className="select_item"><input id="AF" value="AF" type="radio" name="country" /><label htmlFor="AF">아프가니스탄</label></div>
                                <div className="select_item"><input id="AD" value="AD" type="radio" name="country" /><label htmlFor="AD">안도라</label></div>
                                <div className="select_item"><input id="AN" value="AN" type="radio" name="country" /><label htmlFor="AN">안틸레스</label></div>
                                <div className="select_item"><input id="AL" value="AL" type="radio" name="country" /><label htmlFor="AL">알바니아</label></div>
                                <div className="select_item"><input id="DZ" value="DZ" type="radio" name="country" /><label htmlFor="DZ">알제리</label></div>
                                <div className="select_item"><input id="AO" value="AO" type="radio" name="country" /><label htmlFor="AO">앙골라</label></div>
                                <div className="select_item"><input id="AG" value="AG" type="radio" name="country" /><label htmlFor="AG">앤티가바부다</label></div>
                                <div className="select_item"><input id="AI" value="AI" type="radio" name="country" /><label htmlFor="AI">앵귈라</label></div>
                                <div className="select_item"><input id="ER" value="ER" type="radio" name="country" /><label htmlFor="ER">에리트레아</label></div>
                                <div className="select_item"><input id="EE" value="EE" type="radio" name="country" /><label htmlFor="EE">에스토니아</label></div>
                                <div className="select_item"><input id="EC" value="EC" type="radio" name="country" /><label htmlFor="EC">에콰도르</label></div>
                                <div className="select_item"><input id="ET" value="ET" type="radio" name="country" /><label htmlFor="ET">에티오피아</label></div>
                                <div className="select_item"><input id="SV" value="SV" type="radio" name="country" /><label htmlFor="SV">엘살바도르</label></div>
                                <div className="select_item"><input id="GB" value="GB" type="radio" name="country" /><label htmlFor="GB">영국</label></div>
                                <div className="select_item"><input id="VG" value="VG" type="radio" name="country" /><label htmlFor="VG">영국령버진아일랜드</label></div>
                                <div className="select_item"><input id="IO" value="IO" type="radio" name="country" /><label htmlFor="IO">영국령인도양지역</label></div>
                                <div className="select_item"><input id="YE" value="YE" type="radio" name="country" /><label htmlFor="YE">예멘</label></div>
                                <div className="select_item"><input id="OM" value="OM" type="radio" name="country" /><label htmlFor="OM">오만</label></div>
                                <div className="select_item"><input id="AT" value="AT" type="radio" name="country" /><label htmlFor="AT">오스트리아</label></div>
                                <div className="select_item"><input id="HN" value="HN" type="radio" name="country" /><label htmlFor="HN">온두라스</label></div>
                                <div className="select_item"><input id="AX" value="AX" type="radio" name="country" /><label htmlFor="AX">올란드제도</label></div>
                                <div className="select_item"><input id="WF" value="WF" type="radio" name="country" /><label htmlFor="WF">왈리스퓌튀나</label></div>
                                <div className="select_item"><input id="JO" value="JO" type="radio" name="country" /><label htmlFor="JO">요르단</label></div>
                                <div className="select_item"><input id="UG" value="UG" type="radio" name="country" /><label htmlFor="UG">우간다</label></div>
                                <div className="select_item"><input id="UY" value="UY" type="radio" name="country" /><label htmlFor="UY">우루과이</label></div>
                                <div className="select_item"><input id="UZ" value="UZ" type="radio" name="country" /><label htmlFor="UZ">우즈베키스탄</label></div>
                                <div className="select_item"><input id="UA" value="UA" type="radio" name="country" /><label htmlFor="UA">우크라이나</label></div>
                                <div className="select_item"><input id="IQ" value="IQ" type="radio" name="country" /><label htmlFor="IQ">이라크</label></div>
                                <div className="select_item"><input id="IR" value="IR" type="radio" name="country" /><label htmlFor="IR">이란</label></div>
                                <div className="select_item"><input id="IL" value="IL" type="radio" name="country" /><label htmlFor="IL">이스라엘</label></div>
                                <div className="select_item"><input id="EG" value="EG" type="radio" name="country" /><label htmlFor="EG">이집트</label></div>
                                <div className="select_item"><input id="IT" value="IT" type="radio" name="country" /><label htmlFor="IT">이탈리아</label></div>
                                <div className="select_item"><input id="IN" value="IN" type="radio" name="country" /><label htmlFor="IN">인도</label></div>
                                <div className="select_item"><input id="ID" value="ID" type="radio" name="country" /><label htmlFor="ID">인도네시아</label></div>
                                <div className="select_item"><input id="JM" value="JM" type="radio" name="country" /><label htmlFor="JM">자메이카</label></div>
                                <div className="select_item"><input id="ZM" value="ZM" type="radio" name="country" /><label htmlFor="ZM">잠비아</label></div>
                                <div className="select_item"><input id="JE" value="JE" type="radio" name="country" /><label htmlFor="JE">저지섬</label></div>
                                <div className="select_item"><input id="GQ" value="GQ" type="radio" name="country" /><label htmlFor="GQ">적도기니</label></div>
                                <div className="select_item"><input id="KP" value="KP" type="radio" name="country" /><label htmlFor="KP">조선민주주의인민공화국</label></div>
                                <div className="select_item"><input id="GE" value="GE" type="radio" name="country" /><label htmlFor="GE">조지아</label></div>
                                <div className="select_item"><input id="CF" value="CF" type="radio" name="country" /><label htmlFor="CF">중앙아프리카공화국</label></div>
                                <div className="select_item"><input id="DJ" value="DJ" type="radio" name="country" /><label htmlFor="DJ">지부티</label></div>
                                <div className="select_item"><input id="GI" value="GI" type="radio" name="country" /><label htmlFor="GI">지브롤터</label></div>
                                <div className="select_item"><input id="ZW" value="ZW" type="radio" name="country" /><label htmlFor="ZW">짐바브웨</label></div>
                                <div className="select_item"><input id="TD" value="TD" type="radio" name="country" /><label htmlFor="TD">차드</label></div>
                                <div className="select_item"><input id="CZ" value="CZ" type="radio" name="country" /><label htmlFor="CZ">체코</label></div>
                                <div className="select_item"><input id="CL" value="CL" type="radio" name="country" /><label htmlFor="CL">칠레</label></div>
                                <div className="select_item"><input id="BQ" value="BQ" type="radio" name="country" /><label htmlFor="BQ">카리브 네덜란드</label></div>
                                <div className="select_item"><input id="CM" value="CM" type="radio" name="country" /><label htmlFor="CM">카메룬</label></div>
                                <div className="select_item"><input id="CV" value="CV" type="radio" name="country" /><label htmlFor="CV">카보베르데</label></div>
                                <div className="select_item"><input id="KZ" value="KZ" type="radio" name="country" /><label htmlFor="KZ">카자흐스탄</label></div>
                                <div className="select_item"><input id="QA" value="QA" type="radio" name="country" /><label htmlFor="QA">카타르</label></div>
                                <div className="select_item"><input id="KH" value="KH" type="radio" name="country" /><label htmlFor="KH">캄보디아</label></div>
                                <div className="select_item"><input id="KE" value="KE" type="radio" name="country" /><label htmlFor="KE">케냐</label></div>
                                <div className="select_item"><input id="KY" value="KY" type="radio" name="country" /><label htmlFor="KY">케이맨제도</label></div>
                                <div className="select_item"><input id="KM" value="KM" type="radio" name="country" /><label htmlFor="KM">코모로</label></div>
                                <div className="select_item"><input id="XK" value="XK" type="radio" name="country" /><label htmlFor="XK">코소보</label></div>
                                <div className="select_item"><input id="CR" value="CR" type="radio" name="country" /><label htmlFor="CR">코스타리카</label></div>
                                <div className="select_item"><input id="CC" value="CC" type="radio" name="country" /><label htmlFor="CC">코코스제도</label></div>
                                <div className="select_item"><input id="CI" value="CI" type="radio" name="country" /><label htmlFor="CI">코트디부아르</label></div>
                                <div className="select_item"><input id="CO" value="CO" type="radio" name="country" /><label htmlFor="CO">콜롬비아</label></div>
                                <div className="select_item"><input id="CG" value="CG" type="radio" name="country" /><label htmlFor="CG">콩고공화국</label></div>
                                <div className="select_item"><input id="CD" value="CD" type="radio" name="country" /><label htmlFor="CD">콩고민주공화국</label></div>
                                <div className="select_item"><input id="CU" value="CU" type="radio" name="country" /><label htmlFor="CU">쿠바</label></div>
                                <div className="select_item"><input id="KW" value="KW" type="radio" name="country" /><label htmlFor="KW">쿠웨이트</label></div>
                                <div className="select_item"><input id="CK" value="CK" type="radio" name="country" /><label htmlFor="CK">쿡제도</label></div>
                                <div className="select_item"><input id="CW" value="CW" type="radio" name="country" /><label htmlFor="CW">큐라소</label></div>
                                <div className="select_item"><input id="HR" value="HR" type="radio" name="country" /><label htmlFor="HR">크로아티아</label></div>
                                <div className="select_item"><input id="CX" value="CX" type="radio" name="country" /><label htmlFor="CX">크리스마스섬</label></div>
                                <div className="select_item"><input id="KG" value="KG" type="radio" name="country" /><label htmlFor="KG">키르기스스탄</label></div>
                                <div className="select_item"><input id="KI" value="KI" type="radio" name="country" /><label htmlFor="KI">키리바시</label></div>
                                <div className="select_item"><input id="CY" value="CY" type="radio" name="country" /><label htmlFor="CY">키프로스</label></div>
                                <div className="select_item"><input id="TJ" value="TJ" type="radio" name="country" /><label htmlFor="TJ">타지키스탄</label></div>
                                <div className="select_item"><input id="TZ" value="TZ" type="radio" name="country" /><label htmlFor="TZ">탄자니아</label></div>
                                <div className="select_item"><input id="TC" value="TC" type="radio" name="country" /><label htmlFor="TC">터크스케이커스제도</label></div>
                                <div className="select_item"><input id="TG" value="TG" type="radio" name="country" /><label htmlFor="TG">토고</label></div>
                                <div className="select_item"><input id="TK" value="TK" type="radio" name="country" /><label htmlFor="TK">토켈라우</label></div>
                                <div className="select_item"><input id="TO" value="TO" type="radio" name="country" /><label htmlFor="TO">통가</label></div>
                                <div className="select_item"><input id="TM" value="TM" type="radio" name="country" /><label htmlFor="TM">투르크메니스탄</label></div>
                                <div className="select_item"><input id="TV" value="TV" type="radio" name="country" /><label htmlFor="TV">투발루</label></div>
                                <div className="select_item"><input id="TN" value="TN" type="radio" name="country" /><label htmlFor="TN">튀니지</label></div>
                                <div className="select_item"><input id="TR" value="TR" type="radio" name="country" /><label htmlFor="TR">터키(튀르키예)</label></div>
                                <div className="select_item"><input id="TT" value="TT" type="radio" name="country" /><label htmlFor="TT">트리니다드토바고</label></div>
                                <div className="select_item"><input id="PA" value="PA" type="radio" name="country" /><label htmlFor="PA">파나마</label></div>
                                <div className="select_item"><input id="PY" value="PY" type="radio" name="country" /><label htmlFor="PY">파라과이</label></div>
                                <div className="select_item"><input id="PK" value="PK" type="radio" name="country" /><label htmlFor="PK">파키스탄</label></div>
                                <div className="select_item"><input id="PG" value="PG" type="radio" name="country" /><label htmlFor="PG">파푸아뉴기니</label></div>
                                <div className="select_item"><input id="PW" value="PW" type="radio" name="country" /><label htmlFor="PW">팔라우</label></div>
                                <div className="select_item"><input id="PS" value="PS" type="radio" name="country" /><label htmlFor="PS">팔레스타인</label></div>
                                <div className="select_item"><input id="FO" value="FO" type="radio" name="country" /><label htmlFor="FO">페로제도</label></div>
                                <div className="select_item"><input id="PE" value="PE" type="radio" name="country" /><label htmlFor="PE">페루</label></div>
                                <div className="select_item"><input id="PT" value="PT" type="radio" name="country" /><label htmlFor="PT">포르투갈</label></div>
                                <div className="select_item"><input id="FK" value="FK" type="radio" name="country" /><label htmlFor="FK">포클랜드제도(말비나스)</label></div>
                                <div className="select_item"><input id="PL" value="PL" type="radio" name="country" /><label htmlFor="PL">폴란드</label></div>
                                <div className="select_item"><input id="PR" value="PR" type="radio" name="country" /><label htmlFor="PR">푸에르토리코</label></div>
                                <div className="select_item"><input id="FR" value="FR" type="radio" name="country" /><label htmlFor="FR">프랑스</label></div>
                                <div className="select_item"><input id="GF" value="GF" type="radio" name="country" /><label htmlFor="GF">프랑스령기아나</label></div>
                                <div className="select_item"><input id="TF" value="TF" type="radio" name="country" /><label htmlFor="TF">프랑스령남부와남극지역</label></div>
                                <div className="select_item"><input id="PF" value="PF" type="radio" name="country" /><label htmlFor="PF">프랑스령폴리네시아</label></div>
                                <div className="select_item"><input id="FJ" value="FJ" type="radio" name="country" /><label htmlFor="FJ">피지</label></div>
                                <div className="select_item"><input id="FI" value="FI" type="radio" name="country" /><label htmlFor="FI">핀란드</label></div>
                                <div className="select_item"><input id="PN" value="PN" type="radio" name="country" /><label htmlFor="PN">핏케언제도</label></div>
                                <div className="select_item"><input id="HM" value="HM" type="radio" name="country" /><label htmlFor="HM">허드섬맥도날드군도</label></div>
                                <div className="select_item"><input id="HU" value="HU" type="radio" name="country" /><label htmlFor="HU">헝가리</label></div>
                                <div className="select_item"><input id="HK" value="HK" type="radio" name="country" /><label htmlFor="HK">홍콩</label></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Country;