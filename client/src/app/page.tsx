'use client'

import Forword from './forward';
import Landing from './Landing/landing'
import projectModal from '@/component/projectModal';
import { useContext, useState } from 'react';
import useModal from '@/hooks/useModal';
import ModalsProvider, { ModalsStateContext } from '@/contexts/modalContext';

export default function Home() {
  return <div id='root' className='w-full min-w-[280px]'>
    <Forword></Forword>
    <Landing></Landing>
  </div>;
}