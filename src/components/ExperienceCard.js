import React from "react";
import Grid from "@mui/material/Grid";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Zoom } from "react-awesome-reveal";
import { openInNewTab } from "../utils/onClickUrl";
import {
  HeaderContainer,
  DetailsContainer,
} from "../components/styledComponents";

const ExperienceCard = ({ experience, index }) => {
  return (
    <Grid
      container
      sx={{
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          zIndex: -1,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(255,255,255,0.5)",
          backgroundImage:
            index < 2
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
            <h1>{experience["period"]}</h1>
            <h2>{experience["location"]}</h2>
            <img src={experience["img"]} alt={experience["alt"]} />
          </HeaderContainer>
        </Zoom>
      </Grid>
      <Grid item xs={12} sm={9}>
        <Zoom>
          <DetailsContainer elevation={2}>
            <h1>
              {experience["name"]}
              <OpenInNewIcon
                className="link-official-website"
                onClick={() => openInNewTab(experience["official_website"])}
              />
            </h1>
            <h2>{experience["title"]}</h2>
            <ul>
              {experience["description"].map((desc) => {
                return <li key={desc}>{desc}</li>;
              })}
            </ul>
            {experience["projects"] && (
              <>
                <h4>Key Projects</h4>
                <ul>
                  {experience["projects"].map((project) => {
                    return (
                      <li key={project}>
                        <strong>{project.split("|")[0]}</strong>
                        {"  " + project.split("|")[1]}
                      </li>
                    );
                  })}
                </ul>
              </>
            )}
          </DetailsContainer>
        </Zoom>
      </Grid>
    </Grid>
  );
};

export default ExperienceCard;
