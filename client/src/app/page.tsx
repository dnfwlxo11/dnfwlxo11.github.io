'use client'

import Forword from './forward';
import Landing from './Landing/landing'
import projectModal from '@/component/projectModal';
import { useState } from 'react';
import useModal from '@/hooks/useModal';
import ModalsProvider from '@/contexts/modalContext';

export default function Home() {
  const { openModal, closeModal } = useModal()
  const modalHandler = () => {
    console.log('test')
    console.log(openModal)
    openModal(projectModal, {})
  }

  return <div id='root' className='w-full min-w-[280px]'>
    <ModalsProvider>
      {/* <Forword></Forword> */}
      <div>
        <button onClick={modalHandler}>test</button>
      </div>
      {/* <Landing></Landing> */}
    </ModalsProvider>
  </div>;
}