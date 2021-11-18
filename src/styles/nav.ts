import styled from "styled-components";

interface INav {
  open: boolean;
  href?: string;
}

export const StyledBurger = styled.div<INav>`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${(props) => (props.open ? "#000" : "#000")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    cursor: pointer;
    &:nth-child(1) {
      transform: ${(props) => (props.open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${(props) =>
        props.open ? "translateX(100%)" : "translateX(0)"};
      opacity: ${(props) => (props.open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${(props) => (props.open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
export const Menus = styled.div<INav>`
  width: 2rem;
  height: 0.25rem;
  background-color: #000;
  border-radius: 10px;
  transform-origin: 1px;
  transition: all 0.3s linear;
  cursor: pointer;
  &:nth-child(1) {
    transform: ${(props) => (props.open ? "rotate(45deg)" : "rotate(0)")};
  }
  &:nth-child(2) {
    transform: ${(props) =>
      props.open ? "translateX(100%)" : "translateX(0)"};
    opacity: ${(props) => (props.open ? 0 : 1)};
  }
  &:nth-child(3) {
    transform: ${(props) => (props.open ? "rotate(-45deg)" : "rotate(0)")};
  }
`;
export const Nav = styled.nav`
  height: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #f4f4f4;
  align-items: center;
  position: relative;

  @media (max-width: 678px) {
    width: 100vw;
  }

  span {
    font-size: 30px;
    @media only screen and (max-width: 600px) {
      font-size: 20px;
      :nth-child(2) {
        font-size: 16px !important;
        margin-top: 0px !important;
      }
    }
  }
`;

export const Ul = styled.ul<INav>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  position: absolute;
  width: 90%;
  top: -3%;
  justify-content: flex-end;
  align-items: center;
  font-size: 18px;
  height: 110px;
  margin-left: 20px;
  a {
    text-decoration: none;
    text-transform: none;
    color: #000;
    cursor: pointer;
    &:hover {
      color: #178299;
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #f4f4f4;
    position: fixed;
    transform: ${(props) =>
      props.open ? "translateX(0)" : "translateX(100%)"};
    top: -16px;
    right: 0;
    height: 100%;
    width: 180px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 9;
    justify-content: normal;

    li {
      color: #000;
      margin-right: 34px;

      &:hover {
        color: #178299;
        text-decoration: underline;
      }
    }
  }
`;
export const Logo = styled.img`
  margin: 0px 50px 0px 4%;
  width: 150px;
  height: 100px;
  object-fit: contain;

  @media (max-width: 1250px) {
    margin: 20px 50px 20px 2%;
    width: 100px;
    height: 50px;
  }
`;

export const LogoUl = styled.img`
  margin: 20px 50px 20px 5%;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    width: 80px;
    height: 35px;
    object-fit: contain;
  }
`;
export const Li = styled.li`
  padding: 18px 10px;
  outline: none;
  @media (max-width: 768px) {
    color: #000;
    margin-right: 34px;
    &:hover {
      color: #178299;
    }
  }
`;
