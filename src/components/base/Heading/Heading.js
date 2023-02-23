import React from "react";

import * as css from "./Heading.module.css";

export const Heading = ({ children, Tag = "h1" }) => {
  return <Tag className={css.heading}>{children}</Tag>;
};
