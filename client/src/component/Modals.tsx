import { useContext } from "react";
import projectModal from '@/component/projectModal'
import { ModalsStateContext, ModalsDispatchContext } from "@/contexts/modalContext"

export const modals = {
  projectModal: {}
}

const Modals = () => {
  const openedModals = useContext(ModalsStateContext);
  const { onClose: close } = useContext(ModalsDispatchContext);

  return openedModals.map((modal, index) => {
    const { Component, props, isOpen } = modal;
    if (!props) return null;

    const { onSubmit, ...rest } = props;

    const onClose = () => {
      close(Component);
    };

    const handleSubmit = async () => {
      if (typeof onSubmit === "function") {
        await onSubmit();
      }
      onClose();
    };

    return <Component key={index} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} {...rest} />;
  });
};

export default Modals;