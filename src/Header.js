import styled from "styled-components";
import { IoChatbubble } from "react-icons/io5";
import React from "react";

const Header = (props) => {
  return (
    <>
     <Container>
        <Content>
          <Search>
            <div>
              <input type="text" placeholder="Search" />
            </div>
            <SearchIcon>
              <img src="/image/search-icon.svg" alt="" />
            </SearchIcon>
          </Search>
          <Nav>
            <NavListWrap>
              <NavList>
                <a>
                  <img src="/image/instahometwo.png" alt="" />
                </a>
              </NavList>
              <NavList>
                <a>
                  <IoChatbubble className="msg" />
                </a>
              </NavList>
              <NavList>
                <a>
                  <img src="/image/instapost.png" alt="" />
                </a>
              </NavList>
              <NavList>
                <a>
                  <img src="/image/instaexplore.png" alt="" />
                </a>
              </NavList>
              <NavList>
                <a>
                  <img src="/image/instaheart.png" alt="" />
                </a>
              </NavList>
            </NavListWrap>
          </Nav>
        </Content>
      </Container>
    </>
  );
};

const Container = styled.div`
  background-color: white;
  left: 31%;
  padding: 0 24px;
  position: fixed;
  top: 2%;
  width: 100vw;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`;

const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 280px;
    input {
      border-style: none;
      box-shadow: none;
      background-color: #efefef;
      border-radius: 7px;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
    }
  }
`;

const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  }
`;

const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      bottom: 45px;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 4%;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }
`;

const NavList = styled.li`
  display: flex;
  align-items: center;
  a {
    margin: -8px;
    padding: -15px;
    background: transparent;
    font-size: 40px;
    font-weight: 400;
    justify-content: center;
    min-height: 35px;
    min-width: 790px;
    height: 60px;
    left: 900px;

    span {
      @media (max-width: 768px) {
        min-width: 70px;
      }
    }
  }
  .msg {
    margin: 8px;
    padding: 15px;
    top: 0;
    font-size: 40px;
    font-weight: 400;
    justify-content: center;
    min-height: 35px;
    min-width: 790px;
    height: 60px;
    left: 900px;
  }

  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;


export default Header;
