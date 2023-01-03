import styled from "styled-components";

import React from "react";
import { BrowserRouter , Routes, Route, Router } from "react-router-dom";

import MyAllInfo from "./myinformation/MyAllInfo";
import SjobBoard from "./myinformation/SjobBoard";
import CjobBoard from "./myinformation/CjobBoard";
import MyBoard from "./myinformation/MyBoard";
import MyLike from "./myinformation/MyLike";
import Unregister from "./myinformation/Unregister";

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;
  
  width: 100%;
  max-width: 600px;
  height: 700px auto;
  min-height: 200px;
  padding: 30px 10px 50px 10px;

  background: #fffffe;
  color: #0f0e17;
  border-radius: 10px;
  border: 2px solid rgb(234, 234, 234);
//   border: 2px solid rgb(205, 139, 33);
  text-align: center;
`;

function Content() {
  return (
    <BrowserRouter>
    <Main>
    
      {/* <h1>{window.location.pathname}</h1> */}
      <Routes>
        <Route exact path='/mypage' element={<MyAllInfo/>}/>
        <Route exact path='/sjobinfo' element={<SjobBoard/>}/>
        <Route exact path='/cjobinfo' element={<CjobBoard/>}/>
        <Route exact path='/myboardinfo' element={<MyBoard/>}/>
        <Route exact path='/mylikeinfo' element={<MyLike/>}/>
        <Route exact path='/unregister' element={<Unregister/>}/>
      </Routes>
      
    </Main>
    </BrowserRouter>
  );
}

export default Content;
