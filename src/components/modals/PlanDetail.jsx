import { groupBy } from 'lodash';
import { comUtil } from '../../js/util';

const PlanDetail = ({ list, insType, close }) => {
    
    const rendering = () => {
        const components = [];
        const covrObj = groupBy(list, 'covrDivcd'); // 보장종류별 그룹화

        Object.values(covrObj).map((arr, idx) => {
            const prdObj = groupBy(arr, 'prdCd'); // 상품별 그룹화

            components.push(
                <tr className="all-tr first-tr" key={arr.covrDivcd}>
                    <th colSpan="3">{arr[0].codeNm}</th>
                </tr>
            );

            Object.values(prdObj).map(arr2 => {
                components.push(
                    <tr key={arr2.prdCd}>
                        <th>{arr2[0].shrtPrdNm}</th>
                        <td>{comUtil.setNumUnit(arr2[0].joinAmt)}</td>
                        <td>{comUtil.setNumUnit(arr2[1]?.joinAmt)}</td>
                    </tr>
                );
            }) 
        });

        return components;
    }

    return (
        <div className="popup-wrap plan-details-modal" style={{display: "block"}}>
            <div className="popup-bg"></div>
            <div className="popup type-middle">
                <div className="pop-header">
                    <h1 className="pop-title">{`${insType === 'overseas' ? '해외' : '국내'}여행자보험` }</h1>
                    <button type="button" className="btn-close" onClick={close}><span>닫기</span></button>
                </div>
                <div className="pop-body tit-line2">
                    <div className="ui-scroll">
                        <div className="pop-contents ui-scroll-area">
                            <div>
                                <div className="plan-title head">
                                    <h2 className="insur-page-title">보장내용</h2>
                                    <ul className="input_ul no-line">
                                        <li className="input_basic">
                                            <div className="input_text_box travel_input_box">
                                                <div className="input_text_box travel_input_box">
                                                    <div className="input_text">
                                                        <div className="travel-purpose"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tbl-style3 ageCriteriaPlans ageCriteriaWrap_1" style={{display: "block"}}>
                                    <table>
                                        <caption> 기본 담보에 대한 담보별 표준플랜 및 고급플랜의 보험료</caption>
                                        <colgroup>
                                            <col/>
                                            <col width="660"/>
                                            <col width="660"/>
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th scope="col" className="wide-width">담보명</th>
                                                <th scope="col">든든</th>
                                                <th scope="col">안심</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {rendering()}
                                        </tbody>
                                    </table>
                                </div>
    
                                <div className="noti">
                                    <p>
                                        <b>만 15세미만 미성년자녀는</b> 사망담보, 질병사망 및 80%이상후유장해 담보 가입을 제공하지 않습니다.
                                    </p>
                                </div>
                                {/*
                                <div className="ageCriteriaNoDomestic ageCriteriaWrapNoDomestic_1" style={{display: "block"}}>
                                    <div className="plan-title">
                                        <h2 className="insur-page-title" style={{color: "#0046ff", fontWeight: "600"}}>선택 담보 <span className="sub-txt">국내 실손 의료비(질병/상해)</span></h2>
                                    </div>
                                    <div id="optionalTbl" className="tbl-style3">
                                        <table>
                                            <caption> 선택 담보에 대한 표준플랜 및 고급플랜의 보험료 </caption>
                                            <colgroup>
                                                <col/>
                                                <col width="660"/>
                                                <col width="660"/>
                                            </colgroup>
                                            <thead>
                                                <tr>
                                                    <th scope="col" className="wide-width">
                                                        가입담보
                                                    </th>
                                                    <th scope="col">든든</th>
                                                    <th scope="col">안심</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="all-tr">
                                                    <th colSpan="4">해외여행으로 국내에서 치료,입원 등 의료비</th>
                                                </tr>
                                                <tr>
                                                    <th>
                                                        상해 급여/비급여 의료비
                                                    </th>
                                                    <td>5,000만원</td>
                                                    <td>5,000만원</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlanDetail;