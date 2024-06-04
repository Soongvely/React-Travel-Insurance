/**
 * 모달 커스텀 훅
 */

import { useRecoilState } from "recoil";
import { ModalType, modalState } from "./modal.tsx"

export default function useModal() {
  const [modal, setModal] = useRecoilState(modalState);

  // Modal open
  const showModal = ({ modalType, modalProps }: ModalType) => {
    setModal({ modalType, modalProps });
  };

  // Modal close
  const hideModal = () => {
    setModal(null);
  };

  return { modal, setModal, showModal, hideModal };
}