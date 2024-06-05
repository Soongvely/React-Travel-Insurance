
/**
 * Modal 전역 상태관리
 */

import { atom } from 'recoil';
import { MODAL_TYPES } from '../components/modals/GlobalModal.tsx';  // 전역 모달 컴포넌트
import PurposeProps from '../components/modals/Purpose.jsx';    // 여행목적 모달 컴포넌트
import CountryProps from '../components/modals/Country.jsx';    // 여행국가 모달 컴포넌트
import CountryInfoProps from '../components/modals/CountryInfo.jsx'; // 여행국가선택안내 모달 컴포넌트
import PlanDetailProps from '../components/modals/PlanDetail.jsx'; // 보장내역 모달 컴포넌트

// 모달 타입
const { Purpose, Country, CountryInfo, PlanDetail } = MODAL_TYPES;

/**
 * Modal Interface
 */
export interface PurposeType {
  modalType: typeof Purpose;
  modalProps: typeof PurposeProps;
}

export interface CountryType {
  modalType: typeof Country;
  modalProps: typeof CountryProps;
}

export interface CountryInfoType {
  modalType: typeof CountryInfo;
  modalProps: typeof CountryInfoProps;
}

export interface PlanDetailType {
  modalType: typeof PlanDetail;
  modalProps: typeof PlanDetailProps;
}

export type ModalType = PurposeType | CountryType | CountryInfoType | PlanDetailType;

export const modalState = atom<ModalType | null>({
  key: "modalState",
  default: null
});

