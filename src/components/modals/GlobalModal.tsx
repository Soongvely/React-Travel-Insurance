/**
 * 전역 모달 컴포넌트 
 */

import React from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../../reducers/modal.tsx";
import PurposeModal from "./Purpose.jsx";
import CountryModal from "./Country.jsx";
import CountryInfoModal from "./CountryInfo.jsx";

export const MODAL_TYPES = {
    PurposeModal: "PurposeModal",
    CountryModal: "CountryModal",
    CountryInfoModal: "CountryInfoModal",
  };
  
const MODAL_COMPONENTS: any = {
    [MODAL_TYPES.PurposeModal]: PurposeModal,
    [MODAL_TYPES.CountryModal]: CountryModal,
    [MODAL_TYPES.CountryInfoModal]: CountryInfoModal,
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