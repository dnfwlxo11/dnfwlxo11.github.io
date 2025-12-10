'use client'

import Modals from "@/component/Modals";
import { ComponentType, createContext, HTMLAttributes, PropsWithChildren, useMemo, useState } from "react";
export type ModalComponent = ComponentType<any>
export type ModalProps = Record<string, undefined> | HTMLAttributes<HTMLDivElement>
export type ModalsState = Array<{ Component: ModalComponent; props?: ModalProps; isOpen: boolean }>;

export const ModalsStateContext = createContext<ModalsState>([])

type ModalsDispatch = {
  open: (Component: ModalComponent, props: ModalProps) => void;
  close: (Component: ModalComponent) => void;
};

export const ModalsDispatchContext = createContext<ModalsDispatch>({
  open: () => { console.log('open dispatch') },
  close: () => { console.log('close dispatch') },
});

const disableScroll = () => {
  document.body.style.cssText = `
  position: fixed; 
  top: -${window.scrollY}px;
  overflow-y: scroll;
  width: 100%;`;
};

const ableScroll = () => {
  const scrollY = document.body.style.top;
  document.body.style.cssText = "";
  window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
};

const ModalsProvider = ({ children }: PropsWithChildren) => {
  const [openedModals, setOpenedModal] = useState<ModalsState>([])

  const open = (Component: ModalComponent, props: ModalProps) => {
    // disableScroll()
    setOpenedModal((modals) => {
      const modalIdx = modals.findIndex((modal) => modal.Component === Component)

      if (modalIdx !== -1) {
        modals[modalIdx].isOpen = true
        modals[modalIdx].props = props
        return [...modals]
      }

      return [...modals, { Component, props, isOpen: true }]
    })
  }

  const close = (Component: ModalComponent) => {
    // ableScroll()
    setOpenedModal((modals) => modals.map((modal) => (modal.Component === Component ? { ...modal, isOpen: false } : modal)))
  }

  const dispatch = useMemo(() => ({ open, close }), [])

  return (
    <ModalsStateContext.Provider value={openedModals}>
      <ModalsDispatchContext.Provider value={dispatch}>
        {children}
        <Modals/>
      </ModalsDispatchContext.Provider>
    </ModalsStateContext.Provider>
  )
}

export default ModalsProvider;

