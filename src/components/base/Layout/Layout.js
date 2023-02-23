import React from "react";

import "../../../global.css";
import * as css from "./Layout.module.css";

export const Layout = ({ children }) => {
  return <main className={css.main}>{children}</main>;
};
