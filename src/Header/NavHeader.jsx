import React from 'react'
import Navbar from '../Navbar/Navbar'
import { useTranslation } from "react-i18next";

const NavHeader = ({title}) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="bg" style={{background:"linear-gradient(to bottom, #5d7cfb, #c157f7, #f85bd3)", width:"100%",height:"450px"}}>
        <Navbar/>
        <h1 style={{padding:"0 80px",color:"#fff", paddingTop:"100px"}}>{title}</h1>
      </div>
    </>
  )
}

export default NavHeader
