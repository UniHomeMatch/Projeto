import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Error from "../pages/Error";
import Imobi from "../pages/Imobi";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";
import Perfil from "../pages/Perfil";
import PoliticaPrivacidade from "../pages/PoliticaPrivacidade/Privacidade";
import PoliticaUso from "../pages/PoliticaPrivacidade/Uso/uso";
import PrivateRoute from "../components/PrivateRoute";
import CadImovel from "../pages/CadImovel";

// Rotas da Aplicação
const RouterApp = () => { 
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/imovel/:slug" element={<Imobi />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route
          path="/perfil"
          element={
            <PrivateRoute>
              <Perfil />
            </PrivateRoute>
          }
        />
        <Route 
        path="/cadastro-imovel" 
        element={
          <PrivateRoute>
            <CadImovel />
          </PrivateRoute>
        } />
        <Route path="*" element={<Error />} />
        <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
        <Route path="/politica-privacidade/uso" element={<PoliticaUso />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default RouterApp;
