import React, {useState, Component, useEffect} from 'react';
import { Table, Button } from 'reactstrap';
import {Link} from 'react-router-dom'
import axios from 'axios';
import './CjobBoard.css'


function CjobBoard(props) {
  const [cjobinfo, setCjobinfo] = useState([]);

  useEffect((e)=> {
    axios.get("http://localhost:8090/cjobinfo")
    .then((response)=> {
      console.log(response.data)
      setCjobinfo(response.data);
    }).catch((error)=> {
      console.log("여기서 오류가 나요ㅠㅠ")
        console.log(error);
    })
  }, []);

  return (
      <div className='myinfo2'>
        <h1 className='title'>내 구직 정보 세부보기</h1>      
        <Table>
            <tbody>
            <tr className='cjobhead'>
                <th>글번호</th>
                <th>아이디</th>
                <th>구직타입</th>
                <th>게시판타입</th>
                <th>글 제목</th>
                <th>글 내용</th>
                <th>산업분류</th>
            </tr>
            {cjobinfo.map((acc) => (
                <tr key={acc.postid}>
                    <td>{acc.postid}</td>
                    <td>{acc.id}</td>
                    <td>{acc.type}</td>
                    <td>{acc.boardtype}</td>
                    <td><Link to={'/cjobboard/detail/'+acc.id}>{acc.title}</Link></td>
                    <td><Link to={'/cjobboard/detail/'+acc.id}>{acc.content}</Link></td>
                    <td>{acc.industry}</td>
                </tr>
            ))}
            </tbody>
        </Table>
      </div>
    );
}

export default CjobBoard;
