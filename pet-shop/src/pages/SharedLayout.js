import React from "react";
import { Outlet } from "react-router-dom";
import HeaderMiddle from "../components/HeaderMiddle";
import links from "../links";

export default function SharedLayout() {
  return (
    <div>
      <HeaderMiddle links={links} />
      <Outlet />
    </div>
  );
}
