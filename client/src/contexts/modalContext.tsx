'use client'

import Modals from "@/component/Modals";
import { ComponentType, createContext, HTMLAttributes, PropsWithChildren, useMemo, useState } from "react";
export type ModalComponent = ComponentType<any>
export type ModalProps = Record<string, undefined> | HTMLAttributes<HTMLDivElement>
export type ModalsState = Array<{ Component: ModalComponent; props?: ModalProps; isOpen: boolean }>;

export const ModalsStateContext = createContext<ModalsState>([])

type ModalsDispatch = {
  onOpen: (Component: ModalComponent, props: ModalProps) => void;
  onClose: (Component: ModalComponent) => void;
};

export const ModalsDispatchContext = createContext<ModalsDispatch>({
  onOpen: () => {},
  onClose: () => {},
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
  const [isOpen, setIsOpen] = useState<ModalsState>([])

  const onOpen = (Component: ModalComponent, props: ModalProps) => {
    disableScroll()
    setIsOpen((modals) => {
      const modalIdx = modals.findIndex((modal) => modal.Component === Component)

      if (modalIdx !== -1) {
        modals[modalIdx].isOpen = true
        modals[modalIdx].props = props
        return [...modals]
      }

      return [...modals, { Component, props, isOpen: true }]
    })
  }

  const onClose = (Component: ModalComponent) => {
    ableScroll()
    setIsOpen((modals) => modals.map((modal) => (modal.Component === Component ? { ...modal, isOpen: false } : modal)))
  }

  const dispatch = useMemo(() => ({ onOpen, onClose }), [])

  return (
    <ModalsStateContext.Provider value={isOpen}>
      <ModalsDispatchContext.Provider value={dispatch}>
        {children}
        <Modals/>
      </ModalsDispatchContext.Provider>
    </ModalsStateContext.Provider>
  )
}

export default ModalsProvider;

