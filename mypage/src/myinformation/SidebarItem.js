import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarItem = [
    {
        title: '내 정보',
        path: '/mypage',
        icon: <AiIcons.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title: '구인글',
        path: '/sjobinfo',
        icon: <IoIcons.IoIosPaper/>,
        cName:'nav-text'
    },
    {
        title: '구직글',
        path: '/cjobinfo',
        icon: <IoIcons.IoIosPaper/>,
        cName:'nav-text'
    },
    {
        title: '작성글',
        path: '/myboardinfo',
        icon: <IoIcons.IoMdPeople/>,
        cName:'nav-text'
    },
    {
        title: '좋아요',
        path: '/mylikeinfo',
        icon: <FaIcons.FaThumbsUp/>,
        cName:'nav-text'
    },
    {
        title: '회원 탈퇴',
        path: '/unregister',
        icon: <AiIcons.AiFillHome/>,
        cName:'nav-text'
    },
];