import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  position: fixed;
  width: 100vw;
  // height: 10vh;
  max-height: 5.3rem;
  z-index: 100;
  top: 0;
  padding: 0 24px;
  left: 0;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`;
export const Logo = styled.span`
  margin-right: 8px;
  font-size: 0;
  color: rgba(0, 0, 0, 0.6);
`;

export const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 280px;
    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      min-width: 218px;
      width: 100%;
      color: rgba(0, 0, 0, 0.8);
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
export const SearchIcon = styled.div`
width:40px;
position:absolute;
z-index:1;
top:10px;
left:2px;
margin:0;
border radius: 0 2px 2px 0;
pointer-events:none;
display:flex;
justify-content:center;
align-items:center;
`;

export const Nav = styled.div`
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  }
`;

export const Wrapper = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
  position: relative;

  .active {
    &:after {
      content: '';
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      bottom: -5px;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }
`;
export const NavList = styled.li`
  display: flex;
  align-items: center;
  align-items: center;
  background: transparent;
  color: var(--color-icon-nav);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  font-weight: 400;
  justify-content: center;
  line-height: 1.5;
  min-height: 52px;
  min-width: 80px;
  position: relative;
  text-decoration: none;

  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-contenr: center;
    line-height: 1.5;
    min-height: 42px;
    min-width: 80px;
    position: relative;
    text-decoration: none;

    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }

    @media (max-width: 760px) {
      min-width: 70px;
    }
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

export const Signout = styled.div`
  position: absolute;
  // top: 8rem;
  top: 5.6rem;
  right: 20rem;
  width: 25rem;
  height: fit-content;
  // height: 35rem;
  background: white;
  transition-duration: 167ms;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  // display: none;
  align-items: baseline;

  left: auto;
  max-height: calc(100vh - 64px);
  overflow-y: auto;
  padding: 1rem;
  right: 7rem;
  width: 28.8rem;
  overflow-x: hidden;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0.3) 0px 4px 4px 0px;

  & > div {
    width: 100%;
  }

  .profileHeader {
    width: 28rem;
    display: flex;
    flex-direction: column;
    width: calc(100% - 16px);

    & > div {
      justify-content: flex-start;
    }

    .btn-profile {
      // width: 100%;
      padding: 0.3rem 1.2rem;
      border-radius: 1.6rem;
      color: #0a66c2;
      box-shadow: inset 0 0 0 2px #0a66c2;

      width: 100%;
      margin: 1rem auto;
      text-align: center;

      &:hover {
        background-color: rgba(112, 181, 249, 0.2);
        text-decoration: none;
      }
    }
  }
`;

export const User = styled(NavList)`
  .profileTab > svg {
    width: 24px;
    border-radius: 50%;
  }
  .profileTab > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
  .profileTab > span {
    display: flex;
    align-items: center;
  }

  .profileTab > div {
    display: flex;
  }

  // &:hover {
  //   ${Signout} {
  //     // align-items: center;
  //     // display: block;
  //     // justify-content: center;
  //     display: flex;
  //     flex-direction: column;
  //   }
  // }
`;
export const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
`;
