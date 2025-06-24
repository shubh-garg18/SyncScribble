import { CgScreen } from "react-icons/cg";

import { useModal } from "@/client/src/middle/recoil/modal";

import BackgroundModal from "../../model/BackgroundModel";

const BackgroundPicker = () => {
  const { openModal } = useModal();

  return (
    <button className="btn-icon" onClick={() => openModal(<BackgroundModal />)}>
      <CgScreen />
    </button>
  );
};

export default BackgroundPicker;
