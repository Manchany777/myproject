import React, {useState, Component, useEffect} from 'react';
import { Table, Button } from 'reactstrap';
import {Link} from 'react-router-dom'
import axios from 'axios';
import './SjobBoard.css'


function SjobBoard(props) {
  const [sjobinfo, setSjobinfo] = useState([]);

  useEffect((e)=> {
    axios.get("http://localhost:8090/sjobinfo")
    .then((response)=> {
      console.log(response.data)
      setSjobinfo(response.data);
    }).catch((error)=> {
      console.log("여기서 오류가 나요ㅠㅠ")
        console.log(error);
    })
  }, []);

  return (
      <div className='myinfo1'>
        <h1 className='title'>내 구인 정보 세부보기</h1>   
        <Table>
            <tbody>
            <tr className='sjobhead'>
                <th>글번호</th>
                <th>아이디</th>
                <th>구인타입</th>
                <th>게시판타입</th>
                <th>글 제목</th>
                <th>글 내용</th>
                <th>산업분류</th>
            </tr>
            {sjobinfo.map((acc) => (
                <tr key={acc.postid}>
                    <td>{acc.postid}</td>
                    <td>{acc.id}</td>
                    <td>{acc.type}</td>
                    <td>{acc.boardtype}</td>
                    <td><Link to={'/sjobboard/detail/'+acc.id}>{acc.title}</Link></td>
                    <td><Link to={'/sjobboard/detail/'+acc.id}>{acc.content}</Link></td>
                    <td>{acc.industry}</td>
                    {/* <td>{type='2' && {acc.industry}}</td> */}
                </tr>
            ))}
            </tbody>
        </Table>
      </div>
    );
}

export default SjobBoard;
