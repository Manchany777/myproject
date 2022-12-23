import React, {useState, Component, useEffect} from 'react';
import { Table, Button } from 'reactstrap';
import {Link} from 'react-router-dom'
import axios from 'axios';
import './SidebarStyle.css'


function MyBoard(props) {

  const [myboardinfo, setMyboardinfo] = useState([]);
  console.log("test2");
  useEffect((e)=> {
    axios.get("http://localhost:8090/myboardinfo")
    .then((response)=> {
      console.log(response.data);
      console.log("test");
      setMyboardinfo(response.data);
    }).catch((error)=> {
      console.log("여기서 오류가 나요ㅠㅠ")
        console.log(error);
    })
  }, []);

  return (
      <div className='myinfo' style={{textAlign:'center', borderRadius: '20px', width:'600px',
              height:'700px', margin: '100px auto', border: '2px solid gray', padding: '40px'}}>
            
        <Table>
            <tbody>
            <tr>
                <th>글번호</th>
                <th>아이디</th>
                <th>구인구직타입</th>
                <th>게시판타입</th>
                <th>익명성</th>
                <th>글 제목</th>
                <th>글 내용</th>
                <th>산업분류</th>
            </tr>
            {myboardinfo.map((acc) => (
                <tr key={acc.postid}>
                    <td>{acc.postid}</td>
                    <td>{acc.id}</td>
                    <td>{acc.type}</td>
                    <td>{acc.boardtype}</td>
                    <td>{acc.anonymous}</td>
                    <td><Link to={'/everytimeboard/detail/'+acc.id}>{acc.title}</Link></td>
                    <td><Link to={'/everytimeboard/detail/'+acc.id}>{acc.content}</Link></td>
                    <td>{acc.industry}</td>
                </tr>
            ))}
            </tbody>
        </Table>
      </div>
    );
}

export default MyBoard;
