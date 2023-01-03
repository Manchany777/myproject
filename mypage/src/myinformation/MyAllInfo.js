import React, {useState, Component, useEffect} from 'react';
import { Table, Button } from 'reactstrap';
import axios from 'axios';
import './MyAllInfo.css'


function MyAllInfo(props) {
  const [myinfo, setMyinfo] = useState({});
  const id = "cbk112";

  useEffect((e)=> {
    axios.get("http://localhost:8090/myinfo/"+id)
    .then((response)=> {
      console.log(response.data)
      setMyinfo(response.data);
    }).catch((error)=> {
      console.log("여기서 오류가 나요ㅠㅠ")
        console.log(error);
    })
  }, []);

  return (
      <div className='myinfo'>
        <h1 className='title'>내 정보 세부보기</h1>
        <Table className='#'>
          <thead>
            <tr key={myinfo.id} className='allinfohead'>
              <th className='detailhead'>목차</th>
              <th class='detail'>세부정보</th>
            </tr>
          </thead>
          <tbody className='allinfobody'>
            <tr>
              <th scope="row">아이디</th>
              <td class='detail'>{myinfo.id}</td>
            </tr>
            <tr>
              <th scope="row">이름</th>
              <td class='detail'>{myinfo.name}</td>
            </tr>
            <tr>
              <th scope="row">전화번호</th>
              <td class='detail'>{myinfo.phone}</td>
            </tr>
            <tr>
              <th scope="row">생년월일</th>
              <td class='detail'>{myinfo.birth}</td>
            </tr>
            <tr>
              <th scope="row">이메일</th>
              <td class='detail'>{myinfo.email}</td>
            </tr>
            <tr>
              <th scope="row">산업분류</th>
              <td class='detail'>{myinfo.industry}</td>
            </tr>
            <tr>
              <th scope="row">회사명</th>
              <td class='detail'>{myinfo.company}</td>
            </tr>
            <tr>
              <th scope="row">직책</th>
              <td class='detail'>{myinfo.position}</td>
            </tr>
            
          </tbody>
        </Table>
      </div>
    );
}

export default MyAllInfo;
