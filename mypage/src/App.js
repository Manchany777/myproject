import React from "react";
import "./App.css";
import { BrowserRouter , Routes, Route, Router } from "react-router-dom";

import Sidebar from "./myinformation/Sidebar";
import MyAllInfo from "./myinformation/MyAllInfo";
import SjobBoard from "./myinformation/SjobBoard";
import CjobBoard from "./myinformation/CjobBoard";
import MyBoard from "./myinformation/MyBoard";
import MyLike from "./myinformation/MyLike";
import Unregister from "./myinformation/Unregister";


function App() {
  return (
    <>
    <BrowserRouter>
      <Sidebar/>
      <Routes>
        <Route exact path='/mypage' element={<MyAllInfo/>}/>
        <Route exact path='/sjobinfo' element={<SjobBoard/>}/>
        <Route exact path='/cjobinfo' element={<CjobBoard/>}/>
        <Route exact path='/myboardinfo' element={<MyBoard/>}/>
        <Route exact path='/mylikeinfo' element={<MyLike/>}/>
        <Route exact path='/unregister' element={<Unregister/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
  }

  export default App;