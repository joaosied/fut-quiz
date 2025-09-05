import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import SignUpEmail from "./pages/SignUpEmail";
import RegisterNick from "./pages/RegisterNick";
import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import Awards from "./pages/Awards";
import Friends from "./pages/Friends";
import DailyGames from "./pages/DailyGames";
import Quizes from "./pages/Quizes";
import MiniGameHome from "./pages/MiniGameHome";
import Top10GameScreen from "./pages/Top10GameScreen";
import Ranking from "./pages/Ranking";
import PlayWithFriends from "./pages/PlayWithFriends";
import MakePrivateRoom from "./pages/MakePrivateRoom";
import PrivateRoomWait from "./pages/PrivateRoomWait";
import ConfigPage from "./pages/ConfigPage";
import RankingPartida from "./pages/RankingPartida";
import PrivateRoute from "../PrivateRoute";
import ForgotPassword from "./pages/ForgotPassword";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/register-email" element={<SignUpEmail />} />
      <Route path="/register-nick" element={<RegisterNick />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      
      {/* Rotas privadas */}
      <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
      <Route path="/perfil" element={<PrivateRoute><Perfil /></PrivateRoute>} />
      <Route path="/awards" element={<PrivateRoute><Awards /></PrivateRoute>} />
      <Route path="/friends" element={<PrivateRoute><Friends /></PrivateRoute>} />
      <Route path="/daily-games" element={<PrivateRoute><DailyGames /></PrivateRoute>} />
      <Route path="/quizes" element={<PrivateRoute><Quizes /></PrivateRoute>} />
      <Route path="/minigame-home" element={<PrivateRoute><MiniGameHome /></PrivateRoute>} />
      <Route path="/top10-dailygame" element={<PrivateRoute><Top10GameScreen /></PrivateRoute>} />
      <Route path="/ranking" element={<PrivateRoute><Ranking /></PrivateRoute>} />
      <Route path="/play-friends" element={<PrivateRoute><PlayWithFriends /></PrivateRoute>} />
      <Route path="/make-private-room" element={<PrivateRoute><MakePrivateRoom /></PrivateRoute>} />
      <Route path="/private-room-wait" element={<PrivateRoute><PrivateRoomWait /></PrivateRoute>} />
      <Route path="/configurations" element={<PrivateRoute><ConfigPage /></PrivateRoute>} />
      <Route path="/ranking-partida" element={<PrivateRoute><RankingPartida /></PrivateRoute>} />
    </Routes>
  );
}
