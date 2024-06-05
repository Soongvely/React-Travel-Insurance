import { PcSubStep } from '../components/common/SubStep.jsx';   // 사이드영역
import { MoHeader } from '../components/common/Header.jsx';     // 공통헤더
import { useNavigate } from 'react-router-dom';

const Terms = () => {
    const navigate = useNavigate();

    return (
        <>
            <PcSubStep/> {/* PC 사이드 스탭 */}
            <section classNameNameName="right">
                <div classNameNameName="scrollarea">
                    <div classNameNameName="scrollarea_container">
                        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,200,0,0"/>
                        <MoHeader/> {/* 모바일 헤더 */}

                        <div className="contents">
                            <div className="main-txt">
                                <h1>약관에 동의해주세요</h1>
                                <div className="mo-step-bar">
                                    <span className="blue">6</span>/<span>7</span>
                                </div>
                            </div>
                            <form className="intro-form">
                                <div className="inner">
                                    <div className="all-chk-box terms-acco-list inpCheck">
                                        <input type="checkbox" id="all-chk"/>
                                        <label for="all-chk">
                                            <p className="terms-acco-title">전체 동의</p>
                                        </label>
                                    </div>
                                    <div className="terms-accordion">
                                        <ul className="terms-acco-contents">
                                            <li className="terms-acco-list inpCheck">
                                                <div className="terms-acco-left">
                                                    <input type="checkbox" id="agreeService" name="sTerm_1" agree="must"/>
                                                    <label for="agreeService">
                                                        <p className="terms-acco-title">서비스 이용약관 동의 (필수)</p>
                                                    </label>
                                                </div>
                                                <div className="terms-acco-right">
                                                    <span className="lnr lnr-chevron-down"></span>
                                                </div>
                                            </li>
                                            <div className="terms-box">
                                                <ul>
                                                    <li className="number-list">제 1조 (목적)</li>
                                                    <li className="acco-contents">
                                                        이 약관은 ㈜티디엑스(이하 “티디엑스”이라 한다)가 제휴사와 함께 제공하는 보험서비스 등을(이하 “서비스”라 칭한다)이용함에 있어 티디엑스와
                                                        회원의 권리․의무 및 책임사항을 규정함을 목적으로 합니다.
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li className="number-list">제 2조 (용어의 정의)</li>
                                                    <li className="acco-contents">
                                                        이 약관에서 사용되는 용어의 정의는 다음과 같습니다.
                                                        <p className="before-minus">
                                                            “티디엑스”란 “티디엑스”가 서비스를 회원에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 서비스를 거래할 수 있도록 설정한 가상의
                                                            영업장을 말하며, 아울러 티디엑스를 운영하는 사업자의 의미로도 사용합니다.
                                                        </p>
                                                        <p className="before-minus">
                                                            “가입서비스”라 함은 "회원"만이 이용할 수 있는 서비스로, “티디엑스”가 요구한 개인정보를 제공하여야 완전한 이용이 가능한 서비스(보험가입 및
                                                            금융상담 등)를 말합니다.
                                                        </p>
                                                        <p className="before-minus">
                                                            "이용자"라 함은 플랫폼을 이용하는 자를 말하며, “회원”이라 함은 이용자 중 가입서비스의 이용을 위하여 “티디엑스” 가 요구하는 개인정보를
                                                            입력하고 이 약관에 동의한 자를 말합니다.
                                                        </p>
                                                        <p className="before-minus">
                                                            “동반가입자”라 함은 “회원”에게 본 약관 및 개인정보의 처리에 관한 권한을 위임하는 방법을 통하여, “가입서비스”의 이용 신청을 한 자를 말합니다.
                                                        </p>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li className="number-list">제 3조 (약관 등의 명시와 설명 및 개정)</li>
                                                    <li className="acco-contents">
                                                        이 약관에서 사용되는 용어의 정의는 다음과 같습니다.
                                                        <p className="before-minus">
                                                            “티디엑스”는 이 약관의 내용과 상호 및 대표자 성명, 영업소 소재지 주소, 전화번호, 팩스번호, 전자우편주소, 사업자등록번호, 통신판매업
                                                            신고번호, 개인정보관리책임자 등을 회원이 쉽게 알 수 있도록 티디엑스의 초기 서비스화면에 게시합니다. 다만, 약관의 내용은 회원이 연결화면을 통하여
                                                            볼 수 있도록 할 수 있습니다.
                                                        </p>
                                                        <p className="before-minus">
                                                            “티디엑스”는 「전자상거래 등에서의 소비자보호에 관한 법률」, 「약관의 규제에 관한 법률」, 「전자문서 및 전자거래기본법」, 「전자금융거래법」,
                                                            「전자서명법」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」, 「방문판매 등에 관한 법률」, 「소비자기본법」 등 관련 법을 위배하지 않는
                                                            범위에서 이 약관을 개정할 수 있습니다.
                                                        </p>
                                                        <p className="before-minus">
                                                            “티디엑스”는 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 적용일자 7일 이전부터 적용일자 전일까지 공지합니다. 다만,
                                                            회원에게 불리하게 약관내용을 변경하는 경우에는 최소한 14일 이상의 사전 유예기간을 두고 공지합니다. 이 경우 "티디엑스“는 개정 전 내용과 개정
                                                            후 내용을 명확하게 비교하여 회원이 알기 쉽도록 표시합니다.
                                                        </p>
                                                        <p className="before-minus">
                                                            “티디엑스”가 약관을 개정할 경우에는 그 개정약관은 그 적용일자 이후에 제공되는 서비스에만 적용하고 그 이전에 이미 완결되거나 계속 중인 서비스에
                                                            대해서는 개정 전의 약관조항을 그대로 적용합니다. 다만 이미 서비스가 개시되어 이를 제공받고 있는 회원이 개정약관 조항의 적용을 받기를 원하는 뜻을
                                                            제3항에 의한 개정약관의 공지기간 내에 “티디엑스”에 송신하여 “티디엑스”의 동의를 받은 경우에는 개정약관 조항이 적용됩니다.
                                                        </p>
                                                        <p className="before-minus">
                                                            이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 전자상거래 등에서의 소비자보호에 관한 법률, 약관의 규제에 관한 법률, 공정거래위원회가
                                                            정하는 전자상거래 등에서의 소비자 보호지침 및 관계법령 또는 상관례에
                                                        </p>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li className="number-list">제 4조 (서비스의 내용)</li>
                                                    <li className="acco-contents">
                                                        “티디엑스”가 제공하는 서비스는 다음과 같습니다.
                                                        <p>가. 보험상품정보 제공</p>
                                                        <p>나. 보험료 계산</p>
                                                        <p>다. 보험 상담</p>
                                                        <p>라. 보험 가입</p>
                                                        <p>마. 기타 금융정보 제공</p>
                                                        <p>바. 여행정보 제공</p>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li className="number-list">제 5조 (단체보험 가입)</li>
                                                    <li className="acco-contents">
                                                        <p className="before-minus">
                                                            “티디엑스”는 “티디엑스”가 제공하는 서비스와 관련하여, 계약자로서 “회원”(동반가입자 포함, 이하 본 조에서 같음)을 피보험자로 하는
                                                            단체보험계약을 체결할 수 있습니다.
                                                        </p>
                                                        <p className="before-minus">
                                                            “티디엑스”는 보험가입 의사를 개별적으로 밝힌 “회원”을 피보험자로 일괄 지정하여 단체보험계약을 체결합니다.
                                                        </p>
                                                        <p className="before-minus">
                                                            “회원”은 보험계약의 보장내용, 보험료, 보험기간 등을 제휴 보험사와 “티디엑스”가 제공하는 범주 내에서 선택할 수 있으며, 보험료를 납부하여야
                                                            합니다.
                                                        </p>
                                                        <p className="before-minus">
                                                            보험료를 납부한 회원은 보험약관이 정하는 방식에 따라 그 범위 내에서 계약자의 권리를 행사할 수 있습니다.
                                                        </p>
                                                        <p className="before-minus">
                                                            “회원”이 가입하는 단체보험의 보험금 수익자는 사망보험에 관해서는 “회원”의 법정상속인, 그 외의 경우에는 “회원” 본인으로 합니다.
                                                        </p>
                                                        <p className="before-minus">
                                                            보험계약에 관한 세부내용은 보험사가 제공하는 보험약관에 따르며, 보험약관이 정한 바가 본 약관에 우선합니다.
                                                        </p>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li className="number-list">제 6조 (서비스 이용)</li>
                                                    <li className="acco-contents">
                                                        이용자들은 제4조의 서비스를 그 용도에 맞추어 이용할 수 있습니다. 그러나, 가입서비스 이용을 위해서는 “티디엑스”가 요구하는 회원가입 절차를 따라야
                                                        합니다.
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li className="number-list">제 7조 (회원가입 및 자격상실)</li>
                                                    <li className="acco-contents">
                                                        <p className="before-minus">
                                                            이용자는 “티디엑스”가 요구하는 개인정보를 입력하고 본 약관에 대하여 동의 여부를 묻는 박스를 클릭하여 체크표시를 함으로써 가입서비스를 이용할 수
                                                            있는 회원자격을 얻게 됩니다. 이와 동시에 링크된 개인정보취급방침에 동의한 것으로 간주합니다.
                                                        </p>
                                                        <p className="before-minus">
                                                            2명 이상이 동반가입하고자 하는 경우 그 중 1명의 대표자가 나머지 동반가입자들로부터 약관 및 개인정보처리 등에 동의할 권한을 부여 받아 가입절차를
                                                            진행하게 되며, 그 대표자가 약관에 동의하는 경우 동반가입자들은 회원자격을 얻게 됩니다. 추후 유선상으로 동반가입자들로부터는 개인신용정보제공활용에 관한
                                                            사항을 안내합니다.
                                                        </p>
                                                        <p className="before-minus">
                                                            회원은 언제든지 회원에서 탈퇴할 수 있으며, “티디엑스”는 회원이 다음 각호의 1에 해당하는 경우 자격을 상실케 할 수 있습니다.
                                                        </p>
                                                        <p className="before-minus">
                                                            위법하게 서비스를 이용하는 경우
                                                        </p>
                                                        <p className="before-minus">
                                                            서비스에 가입한 후 가입서비스를 이용하지 않는 경우
                                                        </p>
                                                        <p className="before-minus">
                                                            가입 신청 시에 허위 내용을 등록한 경우
                                                        </p>
                                                        <p className="before-minus">
                                                            다른 사람의 “티디엑스” 이용을 방해하거나 그 정보를 도용하는 등 전자상거래 질서를 위협하는 경우
                                                        </p>
                                                        <p className="before-minus">
                                                            “티디엑스”를 이용하여 법령 또는 이 약관이 금지하거나 공서양속에 반하는 행위를 하는 경우
                                                        </p>
                                                        <p className="before-minus">
                                                            “티디엑스”는 회원에게 서비스를 제공하기 위한 목적으로 개인정보를 이용할 수 있습니다.
                                                        </p>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li className="number-list">제 8조 (개별약관)</li>
                                                    <li className="acco-contents">
                                                        <p className="before-minus">
                                                            가입서비스의 이용료 등에 관하여는 가입서비스의 개별약관 등에서 정하는 바에 따릅니다.
                                                        </p>
                                                        <p className="before-minus">
                                                            개별약관과 이 약관의 내용이 충돌하는 경우 개별약관의 효력이 이 약관에 우선합니다.
                                                        </p>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li className="number-list">제 9조 ("티디엑스"등의 의무)</li>
                                                    <li className="acco-contents">
                                                        <p className="before-minus">
                                                            “티디엑스”는 안정적인 서비스 제공을 위하여 지속적으로 노력하며, 이용자로부터 민원이 접수되는 경우 성실히 응대합니다. 다만, 필요한 경우 제휴사가
                                                            대신 응할 수 있습니다.
                                                        </p>
                                                        <p className="before-minus">
                                                            “티디엑스”는 다음 각호의 1에 해당하는 경우 서비스의 전부 또는 일부를 제한하거나 중지할 수 있습니다.
                                                        </p>
                                                        <p className="before-minus">
                                                            컴퓨터 등 정보통신설비의 보수점검․교체 및 고장, 통신의 두절 등의 사유가 발생한 경우
                                                        </p>
                                                        <p className="before-minus">
                                                            서비스의 근간이 되는 기간통신사업자의 망서비스 제공 중지
                                                        </p>
                                                        <p className="before-minus">
                                                            국가비상사태, 정전, 이용자의 폭주 기타 불가항력적인 경우
                                                        </p>
                                                        <p className="before-minus">
                                                            사업종목의 전환, 사업의 포기, 업체 간의 통합 등의 이유로 서비스를 제공할 수 없게 되는 경우
                                                        </p>
                                                        <p className="before-minus">
                                                            “티디엑스”가 서비스 제공을 제한하거나 중지한 때에는 그 사유 및 제한기간 등을 제3조 1)항의 방법으로 지체 없이 회원에게 알립니다.
                                                        </p>
                                                        <p className="before-minus">
                                                            이용자는 이 약관에서 규정하는 사항과 서비스 이용안내 또는 주의사항 등 “티디엑스”가 고지하는 사항을 준수합니다.
                                                        </p>
                                                        <p className="before-minus">
                                                            회원은 개인정보의 부정사용이 발생하지 않도록 유의하여야 하며, 부정사용을 알게 된 경우 즉시 “티디엑스”에 알려 피해방지에 협력합니다.
                                                        </p>
                                                        <p className="before-minus">
                                                            회원은 서비스에 관한 권리의무의 일부 또는 전부를 제3자에게 양도하거나 담보로 제공할 수 없습니다.
                                                        </p>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li className="number-list">제 10조 (분쟁의 해결)</li>
                                                    <li className="acco-contents">
                                                        <p className="before-minus">
                                                            “티디엑스”와 이용자는 서비스와 관련하여 분쟁이 발생한 경우에 이를 원만하게 해결하기 위하여 노력합니다.
                                                        </p>
                                                        <p className="before-minus">
                                                            “티디엑스”는 회원으로부터 제출되는 불만사항 및 의견을 우선적으로 처리하도록 노력하며 다만, 신속한 처리가 곤란한 경우에는 회원에게 그 사유와
                                                            처리일정을 즉시 통보합니다.
                                                        </p>
                                                        <p className="before-minus">
                                                            전항의 규정에도 불구하고, 당사자간 분쟁으로 인하여 소송이 제기될 경우 서울중앙지방법원을 관할법원으로 합니다.
                                                        </p>
                                                        <p className="before-minus">
                                                            단체보험계약 등 개별 제휴서비스와 관련한 분쟁의 해결에 관해서는 해당 제휴서비스의 약관이 정한 바에 따르며, 그에 지정된 관할법원을 관할법원으로
                                                            합니다.
                                                        </p>
                                                        <p className="before-minus">
                                                            “티디엑스”와 회원 간에 제기된 전자상거래 소송에는 국내법을 적용합니다.
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </ul>

                                        <ul className="terms-acco-contents">
                                            <li className="terms-acco-list inpCheck">
                                                <div className="terms-acco-left">
                                                    <input type="checkbox" id="agreePII" name="sTerm_2" agree="must"/>
                                                    <label for="agreePII">
                                                        <p className="terms-acco-title">개인정보취급방침 동의 (필수)</p>
                                                    </label>
                                                </div>
                                                <div className="terms-acco-right">
                                                    <span className="lnr lnr-chevron-down"></span>
                                                </div>
                                            </li>
                                            <div className="terms-box">
                                                <ul>
                                                    <li className="acco-contents">
                                                        ㈜티디엑스(이하 “회사”)는 티디엑스 서비스(이하 “서비스”)를 제공함에 있어 서비스의 기획부터 종료까지 정보통신망 이용촉진 및 정보보호 등에 관한
                                                        법률(이하 ‘정보통신망법’), 개인정보보호법 등 국내의 개인정보 보호 법령을 철저히 준수하며, 관련 법규에 의거한 개인정보취급방침을 정하여 고객 권익 보호에
                                                        최선을 다하고 있습니다.개인정보취급방침의 ‘고객’은 정보통신망법 제2조(정의) 제4호에 규정된 정보통신서비스 제공자가 제공하는 정보통신서비스의 이용자에
                                                        한정합니다.회사는 개인정보취급방침을 통하여 고객님께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고
                                                        있는지 알려드립니다. 회사는 개인정보취급방침을 개정하는 경우 회사가 운영하는 사이트(이하 "사이트")에 공지사항(또는 개별공지)을 통하여 공지할 것입니다.
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li className="number-list">수집하는 개인정보의 항목</li>
                                                    <li className="acco-contents">
                                                        회사는 고객이 입력한 정보를 기반으로 회원가입, 서비스의 제공, 원활한 고객상담 등을 위하여 다음과 같은 정보를 수집합니다.
                                                        <p className="list-parent">
                                                            1. 서비스 회원 가입을 위한 필수 수집 항목
                                                        </p>
                                                        <p className="before-minus">
                                                            이메일 주소, 네이버 ID, 카카오 ID, Facebook ID 또는 Google ID 식별자
                                                        </p>
                                                        <p className="list-parent">
                                                            2. 서비스 이용성 증대를 위한 선택 수집 항목
                                                        </p>
                                                        <p className="before-minus">
                                                            성별, 연령, 주거형태, 소득 정보 등 통계학적 정보(서비스 가입 후 이용자가 선택적으로 입력)
                                                        </p>
                                                        <p className="before-minus">
                                                            대출, 예 적금, 보험, 펀드 등 이용자가 가입한 금융상품 정보(서비스 가입 후 이용자가 선택적으로 입력)
                                                        </p>
                                                        <p className="before-minus">
                                                            여행지, 여행 목적 등 여행 관련 정보(서비스 가입 후 이용자가 선택적으로 입력)
                                                        </p>
                                                        <p className="list-parent">
                                                            3. 보험제휴 서비스를 위한 수집항목
                                                        </p>
                                                        <p className="before-minus">
                                                            개인식별정보 (성명, 생년월일, 주소, 성별, 직업, 전화번호, 휴대전화번호, 전자우편주소, 기타개인식별정보)
                                                        </p>
                                                        <p className="before-minus">
                                                            보험계약정보 (보험사명, 증권번호, 보험기간, 보험계약일자, 상품명, 담보내용, 보험가입금액, 보험료, 계약유지여부, 기타 보험계약정보), 차량번호
                                                        </p>
                                                        <p className="before-minus">
                                                            보험금지급정보 (보험사고일자, 보험금 청구일자, 지급일자, 지급액, 지급사유, 기타 보험금지급정보)
                                                        </p>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li className="number-list">수집한 개인정보의 이용 목적</li>
                                                    <li className="acco-contents">
                                                        회사는 다음과 같은 목적으로 개인정보를 수집합니다.
                                                        <p className="before-minus">
                                                            이메일 주소, 네이버 ID, 카카오 ID, SNS서비스 Facebook의 ID 또는 Google ID 식별자를 수집하여 서비스 제공을 위한 회원 가입
                                                            및 관리에 이용
                                                        </p>
                                                        <p className="before-minus">
                                                            성별, 연령, 주거형태, 소득 정보 등 통계학적 특성 분석에 기반한 개인 맞춤형 금융 상품 추천 제공
                                                        </p>
                                                        <p className="before-minus">
                                                            대출, 예 적금, 보험, 펀드 등 이용자가 가입한 금융상품 정보에 기반한 개인 맞춤형 금융 상품 추천, 재무계획 및 상환계획 관리 서비스 제공
                                                        </p>
                                                        <p className="before-minus">
                                                            보험 상품의 제휴서비스를 위한 상품 소개 및 판매
                                                        </p>
                                                        <p className="before-minus">
                                                            보험회사의 상품판매와 관련하여 상담ㆍ체결ㆍ유지ㆍ관리ㆍ비교견적을 위한 조회
                                                        </p>
                                                        <p className="before-minus">
                                                            보험 회사의 상품ㆍ서비스 소개 및 가입권유, 사은ㆍ판촉행사 안내 (방문, 우편, 전자우편, 전화, SMS포함), 시장조사 등의 마케팅 및 광고
                                                        </p>
                                                        <p className="before-minus">
                                                            보험모집질서 유지, 공공기관의 정책자료로 활용
                                                        </p>
                                                        <p className="before-minus">
                                                            기타 새로운 정보의 소개 및 고지사항 전달, 본인 의사 확인, 서비스에서의 본인 식별 또는 인증 등 고객 관리, 서비스 관련 문의 및 불만사항 처리 등
                                                        </p>
                                                        <p className="before-minus">
                                                            여행지 정보, 여행 준비물, 유의 사항 등 맞춤형 여행 정보 제공에 활용
                                                        </p>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li className="number-list">개인정보 보유 및 이용 기간</li>
                                                    <li className="acco-contents">
                                                        개인정보는 고객의 서비스의 이용 기간에만 활용되며, 회원 탈퇴 시 지체 없이 파기합니다. 단, 내부 방침에 의해 고객에게 개인정보 보관기간에 대해 별도의
                                                        동의를 얻은 경우, 또는 법령에서 일정 기간 정보보관 의무를 부과하는 경우에는 해당 기간 동안 개인정보를 안전하게 보관합니다.
                                                        <p className="before-minus">
                                                            부정 이용 방지를 위한 보유 반복적인 회원 탈퇴 및 재가입으로 인한 경제적 이익 취득 등 불법, 편법 행위 차단을 위해 회원 탈퇴 후 1년 동안 해당
                                                            회원의 ID(네이버 ID, 카카오 ID, Facebook ID 또는 Google ID 식별자, 이메일 주소), 탈퇴 일자 등을 1년간 보유
                                                        </p>
                                                        <p className="before-minus">
                                                            관련 법령에 의한 보유 상법, 전자상거래 등에서의 소비자보호에 관한 법률 등 관련 법령의 규정에 의하여 일정 기간 정보를 보유해야 할 필요가 있을 경우
                                                            법령이 지정한 기간 동안 보유
                                                        </p>
                                                        <p className="before-minus">
                                                            계약 또는 청약철회 등에 관한 기록 보유: 5년 (전자상거래 등에서의 소비자보호에 관한 법률)
                                                        </p>
                                                        <p className="before-minus">
                                                            대금결제 및 재화 등의 공급에 관한 기록 보유: 5년 (전자상거래 등에서의 소비자보호에 관한 법률)
                                                        </p>
                                                        <p className="before-minus">
                                                            소비자 불만 또는 분쟁 처리에 관한 기록 보유: 3년 (전자상거래 등에서의 소비자보호에 관한 법률)
                                                        </p>
                                                        <p className="before-minus">
                                                            본인확인에 관한 기록 보유: 6개월 (정보통신망 이용촉진 및 정보보호 등에 관한 법률)
                                                        </p>
                                                        <p className="before-minus">
                                                            방문에 관한 기록 보유: 3개월 (통신비밀보호법)
                                                        </p>
                                                        <p className="before-minus">
                                                            보험 상품의 제휴서비스를 위한 보유 제휴회사에 대하여 '별도의 개인(신용)정보에 관한 동의'를 한 경우로서 해당 동의 목적으로 위 개인정보가 수집 및
                                                            이용되는 경우에는 해당 동의에 따른 보유 및 이용기간이 적용됩니다.
                                                        </p>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li className="number-list">고객 및 법정대리인의 권리와 행사 방법</li>
                                                    <li className="acco-contents">
                                                        <p className="before-minus">
                                                            개인정보의 열람 및 수정 요청 고객 및 법정대리인은 언제든지 등록되어 있는 본인의 개인정보를 조회, 수정할 수 있습니다. 이용자는 개인정보의 조회,
                                                            수정을 위하여 서비스에 등록된 정보를 클릭하거나 설정 메뉴에 접근하여 계정 정보 등 등록된 개인정보를 직접 열람하거나 수정할 수 있습니다.
                                                        </p>
                                                        <p className="before-minus">
                                                            개인정보의 삭제(회원탈퇴) 고객이 회원탈퇴를 원하는 경우 개인정보관리담당자에게 서면 또는 이메일로 연락하시면 지체 없이 조치를 취하겠습니다.
                                                        </p>
                                                        개인정보는 회원탈퇴, 서비스 종료, 고객에게 동의 받은 개인정보 보유기간의 도래와 같이 개인정보의 수집 및 이용목적이 달성된 개인정보는 재생이 불가능한
                                                        방법으로 파기하고 있습니다. 회사의 개인정보 파기절차 및 방법은 다음과 같습니다.
                                                        <p className="before-minus">
                                                            파기절차 및 시점 고객이 서비스 가입 등을 위해 입력한 정보는 서비스 회원 탈퇴 등 이용목적이 달성된 후 내부 방침 및 기타 관련 법령(3. 개인정보
                                                            보유 및 이용기간 참고)에 의한 정보보호 방침에 의해 보관하거나 파기합니다. 일반적으로 회원 가입 시 수집된 개인 정보는 회원 탈퇴 시점에 바로
                                                            파기합니다. 단, 고객에게 별도로 동의를 받거나 관련 법령의 규정에 의해 개인정보를 보유해야 할 필요가 있는 경우에는 해당 법령에서 정한 기간 동안
                                                            보유한 후 기간이 지나면 바로 삭제합니다. 보관하는 정보는 다른 목적으로는 절대 이용하지 않습니다.
                                                        </p>
                                                        <p className="before-minus">
                                                            파기방법 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다. 전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적
                                                            방법을 사용하여 삭제합니다.
                                                        </p>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li className="number-list">개인정보의 제3자 제공</li>
                                                    <li className="acco-contents">
                                                        회사는 회원의 개인정보를 '개인정보의 수집 및 이용 목적'에서 명시한 범위 내에서만 사용하며, 그 범위를 초과하여 이용하거나 타인 또는 타기업/기관에게
                                                        제공하지 않습니다. 단, 서비스의 목적상 필수적으로 필요한 경우 주의를 기울여 아래 대상자에게 개인정보를 제공합니다.
                                                        <p className="before-minus">
                                                            서비스 사용자 서비스 사용 중 고객의 소비내역 정보 및 고객이 선택적으로 입력한 기타 정보가 연결된 회원 간에 공개될 수 있습니다. 또한 고객이
                                                            상대방을 초대하거나 친구로 등록하는 경우, 설정에 따라 초대자 혹은 친구 식별을 위해 이름, 프로필 사진, 일부 소비내역 정보가 피초대자에게 공개될 수
                                                            있습니다.
                                                        </p>
                                                        <p className="before-minus">
                                                            제휴사 보다 나은 서비스를 제공하기 위해 고객의 개인정보를 제휴사에게 제공하거나 공유할 수 있습니다. 개인정보를 제휴사에게 공유할 경우에는 사전에
                                                            고객에게 제휴사명과 제공 또는 공유 정보, 사유, 공유 기간 등을 개별적으로 전자우편 등을 통하여 고지하고 동의를 구하는 절차를 거칩니다. 고객께서
                                                            동의하지 않는 경우에는 제휴사에게 정보를 제공하거나 공유하지 않습니다. 제휴 관계에 변화가 있거나 제휴관계가 종료될 시에도 같은 절차에 따라 고지하거나
                                                            동의를 구합니다.
                                                        </p>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li className="number-list">[서비스 제공을 위해 개인정보를 제공하는 업체]</li>
                                                    <li className="acco-contents">
                                                        <p className="list-parent">
                                                            1. 서비스 회원 가입을 위한 필수 수집 항목
                                                        </p>
                                                        <p className="before-minus">
                                                            제공하는 항목: 방문 횟수, 특정 기능 사용 여부 등 서비스 사용에 따라 발생하는 생성 정보
                                                        </p>
                                                        <p className="before-minus">
                                                            제공 목적: 사용성 분석을 통해 서비스 개선 및 운영에 참고
                                                        </p>
                                                        <p className="before-minus">
                                                            개인정보의 보유 및 이용기간: 회원 탈퇴 시 또는 위탁계약 종료 시
                                                        </p>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li className="number-list">[보험제휴 서비스를 위해 개인정보를 제공하는 업체]</li>
                                                    <li className="acco-contents">
                                                        <p className="before-minus">
                                                            제공하는 개인정보 항목
                                                        </p>
                                                        <p className="before-minus">
                                                            개인식별정보 (성명, 생년월일, 주소, 성별, 직업, 전화번호, 휴대전화번호, 전자우편주소, 기타개인식별정보)
                                                        </p>
                                                        <p className="before-minus">
                                                            보험계약정보 (보험사명, 증권번호, 보험기간, 보험계약일자, 상품명, 담보내용, 보험가입금액, 보험료, 계약유지여부, 기타 보험계약정보), 차량번호
                                                        </p>
                                                        <p className="before-minus">
                                                            보험금지급정보 (보험사고일자, 보험금 청구일자, 지급일자, 지급액, 지급사유, 기타 보험금지급정보)
                                                        </p>
                                                        <p className="before-minus">
                                                            홈페이지 접속정보 및 서비스 이용정보, 접속 IP정보, 홈페이지 이용 시 거래정보
                                                        </p>
                                                        <table className="terms-table">
                                                            <tbody><tr>
                                                                <td>제공받는 자</td>
                                                                <td>이용하는 항목</td>
                                                                <td>제공하는 정보</td>
                                                            </tr>
                                                            <tr>
                                                                <td>신한EZ</td>
                                                                <td>보험대리점<br/>제휴업무</td>
                                                                <td>개인식별정보,보험계약정보,보험급지급정보<br/>등보험계약의 권유와 판매에 관한 정보항목</td>
                                                            </tr>
                                                        </tbody></table>
                                                        <p className="before-minus">
                                                            법령에 특별한 규정이 있는 경우
                                                        </p>
                                                        <p className="before-minus">
                                                            수사기관이 수사 목적으로 정해진 절차와 방법에 따라 요구한 경우
                                                        </p>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li className="number-list">수집한 개인정보의 위탁</li>
                                                    <li className="acco-contents">
                                                        회사는 고객의 동의 없이 고객의 정보를 외부업체에 위탁하지 않습니다. 향후 그러한 필요가 생길 경우, 위탁 대상자와 위탁업무 내용에 대해 고객에게 통지하고
                                                        필요한 경우 사전동의를 받도록 하겠습니다.
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li className="number-list">인정보보호를 위한 기술 및 관리적 대책</li>
                                                    <li className="acco-contents">
                                                        회사는 고객의 개인정보를 안전하게 관리하기 위하여 최선을 다하며 정보통신망법 및 개인정보보호법에서 요구하는 사항을 철저히 준수하고 있습니다. 회사의 과실로
                                                        개인정보의 상실, 유출, 변조, 훼손이 유발된 경우 회사는 즉각 이용자에게 사실을 알리고 적절한 대책과 보상을 강구할 것입니다. 개인정보보호를 위한 기술 및
                                                        관리적 대책은 아래와 같습니다.
                                                        <p className="before-minus">
                                                            기술적 대책 해킹 등의 외부침입에 대비하여 각 서버마다 침입차단시스템 및 취약점 분석시스템 등을 이용하여 보안에 만전을 기하고 있습니다. 고객의
                                                            개인정보는 비밀번호에 의해 보호되며 중요한 데이터는 암호화 알고리즘에 의해 보호되고 있습니다.
                                                        </p>
                                                        <p className="before-minus">
                                                            관리적 대책
                                                        </p>
                                                        <p className="before-minus">
                                                            개인 정보 접근 권한자 최소화 회사는 개인정보관련 취급 직원을 담당자에 한정시키고 있으며 개인 정보에 접근을 위한 별도의 비밀번호를 부여하여 정기적으로
                                                            갱신하고 있습니다.
                                                        </p>
                                                        <p className="before-minus">
                                                            개인정보 관리 관련 내부 교육 강화 회사는 내부 직원에 대한 수시 교육을 통하여 회사의 개인정보취급방침의 준수를 항상 강조하고 있습니다. 또한 신규직원
                                                            채용 시 정보보호서약서에 서명함으로 직원에 의한 정보유출을 사전에 방지하고 개인정보 취급방침에 대한 이행사항 및 직원 준수여부를 감시하기 위한 내부
                                                            절차를 마련하여 지속적으로 시행하고 있습니다.
                                                        </p>
                                                        <p className="before-minus">
                                                            개인정보보호전담기구의 운영 회사는 사내 개인정보보호전담기구 등을 통하여 회사의 개인정보취급방침의 이행사항 및 담당자의 준수여부를 확인하여 문제가 발견될
                                                            경우 즉시 수정하고 바로 잡을 수 있도록 노력하고 있습니다.
                                                        </p>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li className="number-list">고객의 권리와 의무</li>
                                                    <li className="acco-contents">
                                                        고객은 개인정보를 최신의 상태로 정확하게 입력하여 불의의 사고를 예방해 주시기 바랍니다. 입력한 부정확한 정보로 인해 발생하는 사고의 책임은 고객에게 있으며
                                                        타인 정보의 도용 등 허위정보를 입력할 경우 회원 자격이 상실될 수 있습니다.<br/>
                                                        회사는 타인의 이메일 주소, 네이버 ID, 카카오 ID, Facebook 등 제휴업체 ID 또는 기타 개인정보를 도용하여 회원가입 한 자 또는 서비스를 이용한
                                                        자를 발견한 경우 지체 없이 해당 아이디에 대한 서비스 이용 정지 또는 회원 탈퇴 등 필요한 조치를 취합니다.<br/>
                                                        회사는 고객 개인의 실수나 기본적인 인터넷의 위험성 때문에 일어나는 일들에 대해서는 책임을 지지 않습니다. 고객은 본인의 개인정보를 보호하기 위해 자신의
                                                        ID와 비밀번호를 적절하게 관리하고 이에 대한 책임을 져야 할 의무가 있습니다. 또한 다른 사람이 추측할 수 있는 쉬운 비밀번호는 사용을 피하시기를 권장하며,
                                                        정기적으로 비밀번호를 변경하는 것이 바람직합니다.

                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li className="number-list">개인정보관리책임자 및 담당자 안내</li>
                                                    <li className="acco-contents">
                                                        회사는 고객의 개인정보 관련 문의사항 및 불만 처리 등을 위하여 아래와 같이 개인정보 관리 책임자 및 담당자를 지정하고 있습니다.
                                                        <p className="list-parent">
                                                            개인정보관리책임자
                                                        </p>
                                                        <p className="before-minus">
                                                            이름 : 센틸라자
                                                        </p>
                                                        <p className="before-minus">
                                                            소속 : ㈜티디엑스
                                                        </p>
                                                        <p className="before-minus">
                                                            직위 : 이사
                                                        </p>
                                                        <p className="before-minus">
                                                            이메일 : senthil@addward.com
                                                        </p>
                                                        <p className="list-parent">
                                                            개인정보관리담당자
                                                        </p>
                                                        <p className="before-minus">
                                                            이름 : 유승민
                                                        </p>
                                                        <p className="before-minus">
                                                            소속 : ㈜티디엑스
                                                        </p>
                                                        <p className="before-minus">
                                                            직위 : 대리
                                                        </p>
                                                        <p className="before-minus">
                                                            이메일 : cs@teddy10.com
                                                        </p>
                                                        <p>
                                                            기타 개인정보 침해에 대한 신고나 상담이 필요한 경우에 아래 기관에 문의하시기 바랍니다.
                                                        </p>
                                                        <p className="before-minus">
                                                            개인정보침해신고센터 (www.118.or.kr / 118)
                                                        </p>
                                                        <p className="before-minus">
                                                            대검찰청 사이버수사과 (www.spo.go.kr / 02-3480-2000)
                                                        </p>
                                                        <p className="before-minus">
                                                            경찰청 사이버안전국 (www.ctrc.go.kr / 02-392-0330)
                                                        </p>
                                                        <p>

                                                            본 개인정보취급방침의 내용 추가, 삭제 및 수정이 있을 경우 개정 최소 7일 전에 서비스 내 ‘공지사항’을 통해 사전 고지할 것입니다. 개인정보의 수집
                                                            및 활용, 제3자 제공 등과 같이 고객 권리의 중요한 변경이 있을 경우에는 최소 30일 전에 고지합니다.
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </ul>
                                        <ul className="terms-acco-contents">
                                            <li className="terms-acco-list inpCheck">
                                                <div className="terms-acco-left">
                                                    <input type="checkbox" id="agreePIICollect" name="sTerm_3" agree="must"/>
                                                    <label for="agreePIICollect">
                                                        <p className="terms-acco-title">개인(신용)정보의 수집·이용 (필수)</p>
                                                    </label>
                                                </div>
                                                <div className="terms-acco-right">
                                                    <span className="lnr lnr-chevron-down"></span>
                                                </div>
                                            </li>
                                            <div className="terms-box">
                                                <ul>
                                                    <li className="acco-contents">
                                                        당사 및 당사 업무수탁자는「개인정보보호법」 및 「신용정보의 이용 및 보호에 관한 법률」에 따라 귀하의 개인(신용)정보를 다음과 같이 수집·이용하고자 합니다.
                                                        이에 대하여 동의하십니까?
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li className="number-list">개인(신용)정보의 수집. 이용 목적</li>
                                                    <li className="acco-contents">
                                                        <p className="before-minus">
                                                            보험계약의 인수심사·체결·유지·관리(부활 및 갱신 포함)·보험금 등 지급·심사 · 순보험요율의 산출·검증·민원 처리 및 분쟁 대응·적부 및
                                                            사고조사(보험사기 조사 포함)
                                                        </p>
                                                        <p className="before-minus">
                                                            보험모집질서의 유지·기존 계약자에 대한 보험계약 상담(당사 및 당사 설계사에 한함)
                                                        </p>
                                                        <p className="before-minus">
                                                            금융거래 관련 업무(금융거래 신청, 자동이체 등)
                                                        </p>
                                                        <p className="before-minus">
                                                            본인 확인을 위한 본인 인증
                                                        </p>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li className="number-list">수집, 이용할 개인(신용)정보의 내용</li>
                                                    <li className="acco-contents">
                                                        <p className="before-minus">
                                                            개인식별정보(성명, 생년월일, 주민등록번호, 주소, 성별, 직업, 전화번호, 휴대전화번호, 전자우편주소)
                                                        </p>
                                                        <p className="before-minus">
                                                            당사, 신용정보집중기관(생명·손해보험협회,한국신용정보원) 및 보험요율산출기관에서 수집·관리하는 보험계약정보, 피보험자의 질병 및 상해에 관한 정보,
                                                            보험금지급 관련 정보(사고정보, 본인의 위임을 받아 취득한 각종 조사서, 판결문, 증명서, 확인서, 진료기록 등)
                                                        </p>
                                                        <p className="before-minus">
                                                            계약전 알릴의무 사항, 소득 및 재산사항
                                                        </p>
                                                        <p className="before-minus">
                                                            법률 및 국제협약 등의 의무이행을 위한 정보
                                                        </p>
                                                        <p className="before-minus">
                                                            보험회사의 상품판매와 관련하여 상담ㆍ체결ㆍ유지ㆍ관리ㆍ비교견적을 위한 조회
                                                        </p>
                                                        <p className="before-minus">
                                                            금융거래 업무(보험료 및 보험금 등 출·수납) 관련 정보
                                                        </p>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li className="number-list">개인(신용)정보의 보유·이용 기간</li>
                                                    <li className="acco-contents">
                                                        수집·이용 동의일로부터 거래종료 후 5년까지(단, 거래종료 후 5년이 경과한 후에는 보험금 지급, 금융사고 조사, 보험사기 방지·적발, 민원처리, 법령상
                                                        의무이행을 위한 경우에 한하여 보유·이용하며, 별도 보관)
                                                        <p className="before-minus">
                                                            거래종료라 함은 보험계약 만기, 해지, 취소, 철회일 또는 소멸일 및 보험금 청구권 소멸시효 완성일, 채권·채무관계 소멸일 중 가장 나중에 도래한
                                                            사유를 기준으로 당사와의 모든 거래가 종료된 때를 의미하며, 다만, 만기 등 사유발생일 이후라도 만기환급금 또는 해지환급금 등을 수령하지 않았거나
                                                            상환할 금액이 남아있는 경우, 보험금 지급이 진행중이거나 수사․소송이 진행중인 경우는 거래 종료로 보지 않음
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </ul>

                                        <ul className="terms-acco-contents">
                                            <li className="terms-acco-list inpCheck">
                                                <div className="terms-acco-left">
                                                    <input type="checkbox" id="agreePIIQuery" name="sTerm_4" agree="must"/>
                                                    <label for="agreePIIQuery">
                                                        <p className="terms-acco-title">개인(신용)정보의 조회 (필수)</p>
                                                    </label>
                                                </div>
                                                <div className="terms-acco-right">
                                                    <span className="lnr lnr-chevron-down"></span>
                                                </div>
                                            </li>
                                            <div className="terms-box">
                                                <ul>
                                                    <li className="acco-contents">
                                                        당사 및 당사 업무수탁자는 「신용정보의 이용 및 보호에 관한 법률」에 따라 귀하의 개인(신용)정보를 다음과 같이 신용정보집중기관 등으로부터 조회하고자 합니다.
                                                        이에 대하여 동의하십니까?
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li className="number-list">개인(신용)정보의 조회목적</li>
                                                    <li className="acco-contents">
                                                        <p className="before-minus">
                                                            보험계약의 인수심사·체결·유지·관리(부활 및 갱신 포함), 보험금 등 지급·심사, 보험사고조사(보험사기조사 포함)
                                                        </p>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li className="number-list">조회할 개인(신용)정보</li>
                                                    <li className="acco-contents">
                                                        <p className="before-minus">
                                                            개인식별정보(성명, 생년월일, 주민등록번호, 주소, 성별, 직업, 전화번호, 휴대전화번호, 전자우편주소)
                                                        </p>
                                                        <p className="before-minus">
                                                            신용정보집중기관(생명·손해보험협회,한국신용정보원) 및 보험요율산출기관에서 수집·관리하는 보험계약정보, 보험금지급 관련 정보(사고정보 포함), 피보험자의
                                                            질병 및 상해 관련 정보
                                                        </p>
                                                        <p className="before-minus">
                                                            신용정보회사 및 통신사의 실명인증 및 본인인증을 위한 정보
                                                        </p>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li className="number-list">조회동의 유효 기간 및 조회자(제공받는 자)의 개인(신용)정보의 보유·이용 기간</li>
                                                    <li className="acco-contents">
                                                        수집·이용 동의일로부터 거래종료 후 5년까지(단, 거래종료 후 5년이 경과한 후에는 보험금 지급, 금융사고 조사, 보험사기 방지·적발, 민원처리, 법령상
                                                        의무이행을 위한 경우에 한하여 보유·이용하며, 별도 보관)
                                                        <p className="before-minus">
                                                            거래종료 라 함은 보험계약 만기, 해지, 취소, 철회일 또는 소멸일 및 보험금 청구권 소멸시효 완성일, 채권·채무관계 소멸일 중 가장 나중에 도래한
                                                            사유를 기준으로 당사와의 모든 거래가 종료된 때를 의미하며, 다만, 만기 등 사유발생일 이후라도 만기환급금 또는 해지환급금 등을 수령하지 않았거나
                                                            상환할 금액이 남아있는 경우, 보험금 지급이 진행중이거나 수사․소송이 진행중인 경우는 거래 종료로 보지 않음
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </ul>

                                        <ul className="terms-acco-contents">
                                            <li className="terms-acco-list inpCheck">
                                                <div className="terms-acco-left">
                                                    <input type="checkbox" id="agreePIIProcess" name="sTerm_5" agree="must"/>
                                                    <label for="agreePIIProcess">
                                                        <p className="terms-acco-title">민감정보 및 고유식별정보 처리 (필수)</p>
                                                    </label>
                                                </div>
                                                <div className="terms-acco-right">
                                                    <span className="lnr lnr-chevron-down"></span>
                                                </div>
                                            </li>
                                            <div className="terms-box">
                                                <ul>
                                                    <li className="acco-contents">
                                                        당사 및 당사 업무수탁자는 「개인정보보호법」및「신용정보의 이용 및 보호에 관한 법률」에 따라 상기의 개인(신용)정보에 대한 개별 동의사항에 대하여 다음과 같이
                                                        귀하의 민감정보(질병·상해정보) 및 고유식별정보 (주민등록번호·외국인등록번호)를 처리(수집·이용, 조회, 제공)하고자 합니다. 이에 동의하십니까?
                                                    </li>
                                                </ul>
                                            </div>
                                        </ul>

                                        <ul className="terms-acco-contents">
                                            <li className="terms-acco-list inpCheck">
                                                <div className="terms-acco-left">
                                                    <input type="checkbox" id="agreeMktgPersCollec" name="sTerm_6"/>
                                                    <label for="agreeMktgPersCollec">
                                                        <p className="terms-acco-title">마케팅 목적의 개인정보 수집·이용 (선택)</p>
                                                    </label>
                                                </div>
                                                <div className="terms-acco-right">
                                                    <span className="lnr lnr-chevron-down"></span>
                                                </div>
                                            </li>
                                            <div className="terms-box">
                                                <ul>
                                                    <li className="acco-contents">
                                                        귀하의 동의를 받아 수집한 귀하의 개인정보는 보유∙이용기간 중에 전화, SMS, LMS, MMS, 이메일, 우편을 통하여 당사의 상품 · 서비스 소개 및
                                                        판매, 사은판촉행사 안내 등영리목적의 광고성 정보 전달에 활용되거나 영업 및 마케팅 목적으로 활용될 수 있습니다.귀하는 위와 같은 마케팅 목적의 개인정보 수집
                                                        및 이용을 거부할 있으며, 이 경우 행사 안내를 받지 못하거나 당사가 제공하는 유용한 정보를 받지 못할 수 있습니다. 또한, 동의하시더라도 당사 홈페이지 및
                                                        고객센터 (cs@teddy10.com)를 통해 철회하거나 가입권유 목적의 연락에 대한 중단을 요청하실 수 있으며 연락중지청구시스템(Do not Call 센터,
                                                        www.donotcall.or.kr)를 통해 언제든지 마케팅활동에 대한 중지를 요청하실 수 있습니다.
                                                        <p className="before-minus">
                                                            개인정보의 수집·이용 목적
                                                        </p>
                                                        <p>
                                                            당사의 상품 · 서비스 소개 및 판매, 사은판촉행사 안내 (방문, 우편, 전자 우편, 전화, SMS 포함) 및 이를 위한 연락, 시장조사
                                                        </p>
                                                        <p className="before-minus">
                                                            개인정보의 항목
                                                        </p>
                                                        <p>
                                                            성명, 휴대폰 번호
                                                        </p>
                                                        <p className="before-minus">
                                                            개인(신용)정보의 보유 · 이용기간
                                                        </p>
                                                        <p>
                                                            ▶ 당사와 보험계약 체결실적이 있는 고객 : 5년
                                                        </p>
                                                        <p>
                                                            ▶ 당사와 보험계약 체결실적이 없는 고객 : 동의일로부터 2년
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </ul>

                                        <ul className="terms-acco-contents">
                                            <li className="terms-acco-list inpCheck">
                                                <div className="terms-acco-left">
                                                    <input type="checkbox" id="agreeMktgPersCollecUse" name="sTerm_7"/>
                                                    <label for="agreeMktgPersCollecUse">
                                                        <p className="terms-acco-title">마케팅 목적의 개인정보 제공·위탁 (선택)</p>
                                                    </label>
                                                </div>
                                                <div className="terms-acco-right">
                                                    <span className="lnr lnr-chevron-down"></span>
                                                </div>
                                            </li>
                                            <div className="terms-box">
                                                <ul>
                                                    <li className="acco-contents">
                                                        <p className="before-minus">
                                                            개인정보를 제공받는 자
                                                        </p>
                                                        <p>
                                                            모집수탁자 : 당사와 보험모집 위탁계약을 체결한 자 (보험설계사, 법인대리점 등 포함)
                                                        </p>
                                                        <p>
                                                            각 제공대상기관 및 이용목적의 구체적인 정보는 당사 홈페이지[teddy10.com]에서 확인할 수 있습니다.
                                                        </p>
                                                        <p>
                                                            업무수탁자 : 당사와 업무위탁 계약을 체결한 자 (이벤트 대행업체, 우편물 발송업체, 경품 발송업체 등)
                                                        </p>
                                                        <p className="before-minus">
                                                            개인정보를 제공받는 자의 이용목적
                                                        </p>
                                                        <p>
                                                            당사의 상품서비스 소개 및 판매, 상품 권유 연락, 사은·판촉행사 안내, 시장조사
                                                        </p>
                                                        <p className="before-minus">
                                                            개인정보 보유 및 이용 기간
                                                        </p>
                                                        <p>
                                                            ▶ 당사와 보험계약 체결실적이 있는 고객 : 5년
                                                        </p>
                                                        <p>
                                                            ▶ 당사와 보험계약 체결실적이 없는 고객 : 동의일로부터 2년
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </ul>

                                        <ul className="terms-acco-contents">
                                            <li className="terms-acco-list inpCheck">
                                                <div className="terms-acco-left">
                                                    <input type="checkbox" id="agreeSubscription" name="sTerm_8" agree="must"/>
                                                    <label for="agreeSubscription">
                                                        <p className="terms-acco-title">보험가입 동의 (필수)</p>
                                                    </label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="page-title-childbox">
                                        <b>소비자 권익보호에 관한 사항</b>
                                        <p>
                                            본 동의를 거부하시는 경우에는 보험계약 상담 등
                                            정상적인 서비스 제공이 불가능하며 본 동의서에 의한
                                            개인(신용) 정보 조회는 귀하의 신용 등급에
                                            영향을 주지 않습니다. <br/> 또한 동의하시더라도
                                            당사 홈페이지 및 고객센터 <a href="tel:1544-2580">(1544-2580)</a>를 통해
                                            철회하거나 가입권유 목적의 연락에 대한
                                            중단을 요청하실 수 있으며 은행연합회의
                                            Do not Call 센터 <a href="https://www.donotcall.or.kr" rel="noreferrer" target="_blank">(www.donotcall.or.kr)</a>를 통해
                                            언제든지 마케팅활동에 대한 중지를
                                            요청할 수 있습니다.
                                        </p>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div classNameName="floating">
                    <button classNameName="btn-before btn-hide" onClick={() => navigate(-1)}>
                        <span>이전</span>
                    </button>
                    <button classNameName="btn-next" onClick={() => navigate('/travel/')}>
                        <span>다음</span>
                    </button>
                </div>
            </section>                    
        </>
    );
}

export default Terms;