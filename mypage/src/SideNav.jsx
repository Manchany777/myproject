import Nav from "./Nav";

import Sidebar from "./myinformation/Sidebar";

import MyAllInfo from "./myinformation/MyAllInfo";
import SjobBoard from "./myinformation/SjobBoard";
import CjobBoard from "./myinformation/CjobBoard";
import MyBoard from "./myinformation/MyBoard";
import MyLike from "./myinformation/MyLike";
import Unregister from "./myinformation/Unregister";

function isActive(path) {
  return window.location.pathname.startsWith(path);
}

function SideNav() {
  return (
    <Nav className='navbar'>
        마이페이지
      <Nav.List>
        <Nav.Item>
          <Nav.Link to="/mypage" active={isActive("/mypage")}>
            계정
          </Nav.Link>
        </Nav.Item>
        <Nav.Separator />
        <br/>
        내가 쓴 글
        <Nav.Item>
          <Nav.Link to="/cjobinfo" active={isActive("/cjobinfo")}>
            구인글
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to="/sjobinfo" active={isActive("/sjobinfo")}>
            구직글
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to="/myboardinfo" active={isActive("/myboardinfo")}>
            작성글
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to="/mylikeinfo" active={isActive("/mylikeinfo")}>
          좋아요
          </Nav.Link>
        </Nav.Item>

        <Nav.Separator /> 
        <br/>
        기타
        <Nav.Item>
          <Nav.Link to="/about" active={isActive("/about")}>
            로그아웃
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to="/help" active={isActive("/help")}>
            회원탈퇴
          </Nav.Link>
        </Nav.Item>
        <Nav.Item disabled>
          <Nav.Link>Coming Soon</Nav.Link>
        </Nav.Item>
      </Nav.List>
    </Nav>
  );
}

export default SideNav;
