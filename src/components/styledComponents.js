import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";

export const HeaderContainer = styled("div")(({ theme }) => ({
  margin: "1rem",
  padding: "1rem",
  paddingTop: "0.25rem",
  "& h1": {
    fontSize: "1.25rem",
    marginBottom: 0,
  },
  "& h2": {
    fontSize: "1rem",
    marginTop: "0.25rem",
    marginBottom: "0.25rem",
    color: theme.palette.text.emphasis,
  },
  "& img": {
    width: "25%",
  },
}));

export const DetailsContainer = styled(Paper)(({ theme }) => ({
  margin: "1.5rem",
  marginTop: "1rem",
  marginBottom: "1rem",
  padding: "1rem",
  paddingLeft: "1.5rem",
  paddingRight: "1.5rem",
  textAlign: "start",
  lineHeight: "1.5",
  borderLeft: `5px solid ${theme.palette.yellow}`,
  boxShadow:
    "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
  "& h1": {
    fontSize: "1.25rem",
    margin: 0,
  },
  "& h2": {
    fontSize: "1rem",
    marginTop: "0.25rem",
    color: theme.palette.text.emphasis,
  },
  "& h3": {
    fontSize: "1rem",
    marginTop: "0.25rem",
    color: theme.palette.text.secondary,
  },
  "& .link-official-website": {
    cursor: "pointer",
    color: theme.palette.text.secondary,
  },
  "& strong": {
    color: theme.palette.text.emphasis
  },
  "&:hover": { transform: "translateY(-5px)", transition: "0.5s" },
}));

export const SectionTitleHeader = styled("h1")({
  fontFamily: '"Cabin Sketch", "Nanum Gothic", cursive',
  fontSize: "2.5rem",
  marginBottom: 0
});
