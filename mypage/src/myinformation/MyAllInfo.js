import React, {useState, Component, useEffect} from 'react';
import { Table, Button } from 'reactstrap';
import axios from 'axios';
import './SidebarStyle.css'


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
      <div className='myinfo' style={{textAlign:'center', borderRadius: '20px', width:'600px',
              height:'700px', margin: '100px auto', border: '2px solid gray', padding: '40px'}}>
            
        <Table>
            <tbody>
            <tr>
                <th>아이디</th>
                <th>이름</th>
                <th>전화번호</th>
                <th>생년월일</th>
                <th>이메일</th>
                <th>산업분류</th>
                <th>회사명</th>
                <th>직책</th>
            </tr>
                <tr key={myinfo.id}>
                    <td>{myinfo.id}</td>
                    <td>{myinfo.name}</td>
                    <td>{myinfo.phone}</td>
                    <td>{myinfo.birth}</td>
                    <td>{myinfo.email}</td>
                    <td>{myinfo.industry}</td>
                    <td>{myinfo.company}</td>
                    <td>{myinfo.position}</td>
                    {/* <td>{type='2' && {acc.industry}}</td> */}
                </tr>
            </tbody>
        </Table>
      </div>
    );
}

export default MyAllInfo;
