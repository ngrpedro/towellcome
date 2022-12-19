import React from "react";
import { Link } from "react-router-dom";

type Props = {
  children: string;
};

const index = ({ children }: Props) => {
  return (
    <div>
      <Link to="/">Home</Link> - {children}
    </div>
  );
};

export default index;
