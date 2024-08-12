import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Error from "../pages/Error";
import Imobi from "../pages/Imobi";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";
import Perfil from "../pages/Perfil";
import PoliticaPrivacidade from "../pages/PoliticaPrivacidade";
import PoliticaCookies from "../pages/PoliticaPrivacidade/cookies";
import PoliticaUso from "../pages/PoliticaPrivacidade/uso";

// Rotas da Aplicação

const RouterApp = () => {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/imovel" element={<Imobi />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="*" element={<Error />} />
        <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
        <Route path="/politica-privacidade/cookies" element={<PoliticaCookies />} />
        <Route path="/politica-privacidade/uso" element={<PoliticaUso />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default RouterApp;