import React from 'react'
import "./root.css";
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'

const layout = ({ children } : { children : React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className='root-page'>
        {children}
      </div>
      <Footer />
    </>
  )
}

export default layout