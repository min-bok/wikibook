import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Btn({ children, type, href, onClick }) {
  if (href) {
    return <StyledLink to={href}>{children}</StyledLink>;
  }
  return (
    <Button type={type} onClick={onClick}>
      {children}
    </Button>
  );
}

Btn.defaultProps = {
  type: "button",
  href: false,
  onClick: () => {},
};

const Button = styled.button`
  background-color: #000;
  border-radius: 10px;
  color: #fff;
  font-size: 1.6rem;
  font-weight: bold;
  padding: 11px 15px;
`;

const StyledLink = styled(Link)`
  background-color: #000;
  border-radius: 10px;
  color: #fff;
  font-size: 1.6rem;
  font-weight: bold;
  padding: 11px 15px;
`;
