import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {SidebarItem} from './SidebarItem'
import './SidebarStyle.css'
import { IconContext } from 'react-icons/lib';
import styled from "styled-components";

const Container = styled.div`
  margin: 10px auto;
  width: 370px;
`;


function Sidebar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <Container>
        <IconContext.Provider value={{ color: '#fff'}}>
            <div className='navbar'>
                <Link to="/" className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
                테스트
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nava-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to="#" className='menu-bars'>
                            <AiIcons.AiOutlineClose/>
                        </Link>
                        테스트
                    </li>
                    {SidebarItem.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                   })}
                </ul>
            </nav>
            </IconContext.Provider>
        </Container>
    )
}

export default Sidebar;
