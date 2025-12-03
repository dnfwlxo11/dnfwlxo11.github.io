'use client'

import Forword from './forward';
import Landing from './Landing/landing'
import projectModal from '@/component/projectModal';
import { useContext, useState } from 'react';
import useModal from '@/hooks/useModal';
import ModalsProvider, { ModalsStateContext } from '@/contexts/modalContext';

export default function Home() {
  const openedModals = useContext(ModalsStateContext);
  const { openModal, closeModal } = useModal()
  const modalHandler = () => {
    openModal(projectModal, { 'test': 1234})
  }

  return <div id='root' className='w-full min-w-[280px]'>
    {/* <Forword></Forword> */}
    <div>
      <button onClick={modalHandler}>test</button>
    </div>
    {/* <Landing></Landing> */}
  </div>;
}