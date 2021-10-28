import React from "react";
import * as S from "../styles/nav.ts";

import Logo from "../Website Assets/Logo.png";
import Burger from "./Burger";

type Props = {
  children?: any,
};

export default function Navbar(props: Props) {
  return (
    <>
      <S.Nav>
        <S.Logo src={Logo} alt="image" />
      </S.Nav>
      <Burger />
      {props.children}
    </>
  );
}
