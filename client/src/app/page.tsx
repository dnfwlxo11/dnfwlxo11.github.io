'use client'

import Forword from './forward';
import Landing from './Landing/landing'

export default function Home() {
  return <div id='root' className='w-full min-w-[320px]'>
    <Forword></Forword>
    <Landing></Landing>
  </div>;
}