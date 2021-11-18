import React from "react";
import * as S from "../styles/nav.ts";

import Logo from "../Website Assets/logonew.png";
import BurgerMob from "./BurgerMob";

type Props = {
  children?: any,
};

export default function NavbarMob(props: Props) {
  return (
    <>
      <S.Nav>
        <S.Logo src={Logo} alt="image" />
      </S.Nav>
      <BurgerMob />
      {props.children}
    </>
  );
}
