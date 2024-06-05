/**
 * 전역 모달 컴포넌트 
 */

import React from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../../reducers/modal.tsx";
import Purpose from "./Purpose.jsx";
import Country from "./Country.jsx";
import CountryInfo from "./CountryInfo.jsx";
import PlanDetail from "./PlanDetail.jsx";

export const MODAL_TYPES = {
    Purpose   : "Purpose",
    Country   : "Country",
    CountryInfo: "CountryInfo",
    PlanDetail : "PlanDetail",
  };
  
const MODAL_COMPONENTS: any = {
    [MODAL_TYPES.Purpose]: Purpose,
    [MODAL_TYPES.Country]: Country,
    [MODAL_TYPES.CountryInfo]: CountryInfo,
    [MODAL_TYPES.PlanDetail]: PlanDetail,
  };
  
const GlobalModal = () => {
  const { modalType, modalProps } = useRecoilState(modalState)[0] || {};

  const renderComponent = () => {
    if (!modalType) return null;
    
    const ModalComponent = MODAL_COMPONENTS[modalType];

    return <ModalComponent {...modalProps} />;
  };

  return <>{renderComponent()}</>;
};
  
export default GlobalModal;