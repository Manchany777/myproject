import React, {useState, Component, useEffect} from 'react';
import { Table, Button } from 'reactstrap';
import {Link} from 'react-router-dom'
import axios from 'axios';
import './SidebarStyle.css'


function MyLike(props) {
  const [mylikeinfo, setMylikeinfo] = useState([]);

  useEffect((e)=> {
    axios.get("http://localhost:8090/mylikeinfo")
    .then((response)=> {
      console.log(response.data);
      setMylikeinfo(response.data);
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
                <th>아이디</th>
                <th>글번호</th>
                <th>게시판타입</th>
            </tr>
            {mylikeinfo.map((acc) => (
                <tr key={acc.id}>
                    <td>{acc.id}</td>
                    <td><Link to={'/'+acc.boardname+'/detail'}>{acc.postid}</Link></td>
                    <td>{acc.boardtype}</td>
                </tr>
            ))}
            </tbody>
        </Table>
      </div>
    );
}

export default MyLike;
