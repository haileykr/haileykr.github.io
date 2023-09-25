import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Footer = () => {
  return <CustomFooter elevation={0}>Copyright © Hailey Kim 2023</CustomFooter>;
};
export default Footer;

const CustomFooter = styled(Paper)(({ theme }) => ({
  width: "100vw",
  borderTop: "1px dotted lightgray",
  padding: "1rem",
  marginTop: "1rem",
  boxSizing: "border-box",
  color: theme.palette.text.secondary,
  textAlign: "middle",
}));
