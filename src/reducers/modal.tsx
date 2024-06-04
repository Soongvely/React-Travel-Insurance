
/**
 * Modal 전역 상태관리
 */

import { atom } from 'recoil';
import { MODAL_TYPES } from '../components/modals/GlobalModal.tsx';  // 전역 모달 컴포넌트
import PurposeModalProps from '../components/modals/Purpose.jsx';    // 여행목적 모달 컴포넌트
import CountryModalProps from '../components/modals/Country.jsx';    // 여행국가 모달 컴포넌트
import CountryInfoModalProps from '../components/modals/CountryInfo.jsx'; // 여행국가선택안내 모달 컴포넌트

// 모달 타입
const { PurposeModal, CountryModal, CountryInfoModal } = MODAL_TYPES;

export interface PurposeModalType {
  modalType: typeof PurposeModal;
  modalProps: typeof PurposeModalProps;
}

export interface CountryModaType {
  modalType: typeof CountryModal;
  modalProps: typeof CountryModalProps;
}

export interface CountryInfoModalType {
  modalType: typeof CountryInfoModal;
  modalProps: typeof CountryInfoModalProps;
}

export type ModalType = PurposeModalType | CountryModaType | CountryInfoModalType;

export const modalState = atom<ModalType | null>({
  key: "modalState",
  default: null
});

