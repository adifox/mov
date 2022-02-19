// import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'

// Components
// import Header from '../header'
// import Footer from '../footer'

// Styles
// import styles from './layout.module.css'

export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Estudio Mov</title>
      </Head>
      {/* <Header greenColorHeader={greenColorHeader} /> */}
      <div>{children}</div>
      {/* <Footer /> */}
    </>
  )
}
