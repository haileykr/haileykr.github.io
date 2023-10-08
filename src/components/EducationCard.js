import React from "react";
import Grid from "@mui/material/Grid";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Zoom } from "react-awesome-reveal";
import { openInNewTab } from "../utils/onClickUrl";
import {
  HeaderContainer,
  DetailsContainer,
} from "../components/styledComponents";

const EducationCard = ({ education, index }) => {
  return (
    <Grid container sx={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          zIndex: -1,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(255,255,255,0.5)",
          backgroundImage:
            index < 1
              ? `url(${process.env.REACT_APP_BASE_URL}/images/bg/abstract-futuristic-circuit-board-pattern-illustration-free-vector.jpg)`
              : `url(${process.env.REACT_APP_BASE_URL}/images/bg/city-seamless-pattern_100478-1292.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          opacity: 0.1,
        }}
      />
      <Grid item xs={12} sm={3}>
        <Zoom>
          <HeaderContainer>
            <h1>{education["period"]}</h1>
            <h2>{education["location"]}</h2>
            <img src={education["img"]} alt={education["alt"]} />
          </HeaderContainer>
        </Zoom>
      </Grid>
      <Grid item xs={12} sm={9}>
        <Zoom>
          <DetailsContainer elevation={2}>
            <h1>
              {education["name"]}
              <OpenInNewIcon
                className="link-official-website"
                onClick={() => openInNewTab(education["official_website"])}
              />
            </h1>
            <h2>{education["degree"]}</h2>
            <h3>GPA: {education["GPA"]}</h3>
            <h4>{education["description"]}</h4>
          </DetailsContainer>
        </Zoom>
      </Grid>
    </Grid>
  );
};
export default EducationCard;
