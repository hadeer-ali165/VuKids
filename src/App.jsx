import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./i18n";
import Header from "./Header/Header";
import i18n from "./i18n";
import Cookies from "js-cookie";
import Courses from "./Courses/Courses";
import About from "./About/About";
import Team from "./Team/Team";
import Whyus from "./WhyUs/Whyus";
import Footer from "./Footer/Footer";
import { Routes, Route } from "react-router-dom";
import NavHeader from "./Header/NavHeader";
import SubHeader from "./SubHeader/SubHeader";
import JoinForm from "./Forms/JoinForm";
import Login from "./Login/Login";

function App() {
    const { t } = useTranslation();
  const lang = Cookies.get("i18next") || "ar";
  useEffect(()=>{
    window.document.dir = i18n.dir();
  document.documentElement.className = i18n.language === 'ar' ? 'arabic' : 'english';
  },[i18n.language])
  return (
  <>
    <Routes>
        {/* الصفحة الرئيسية – كل الكمبوننت سوا */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Courses />
              <About />
              <Team />
              <Whyus />
              <Footer />
            </>
          }
        />

        {/* الصفحات المنفصلة */}
        <Route
          path="/courses"
          element={
            <>
              <NavHeader title={t('Our Courses')}/>
              <Courses />
              <Team/>
              <SubHeader/>
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <NavHeader title={t('abouttitle')}/>
              <About/>
              <Team/>
              <Whyus/>
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <NavHeader title={t("nav.contact")}/>
              <Team />
              <JoinForm/>
              <Footer />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Login />
            </>
          }
        />
      </Routes>
    </>
  );
}

// append app to dom

export default App;