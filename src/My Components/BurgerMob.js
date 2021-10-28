import React, { useState } from "react";
import * as S from "../styles/nav.ts";

import RightNavMob from "./RightNavMob";

const BurgerMob = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <S.StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </S.StyledBurger>
      <RightNavMob open={open} />
    </>
  );
};
export default BurgerMob;
