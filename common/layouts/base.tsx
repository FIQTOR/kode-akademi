import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React, { ReactNode } from 'react'

interface BaseLayoutProps {
  children: ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default BaseLayout