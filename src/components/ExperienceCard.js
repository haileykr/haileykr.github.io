import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Zoom } from "react-awesome-reveal";
import { openInNewTab } from "utils/onClickUrl";
import { HeaderContainer, DetailsContainer } from "components/styledComponents";
import {
  Grid,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  IconButton,
} from "@mui/material";

// import CSBackground from "assets/images/bg/abstract-futuristic-circuit-board-pattern-illustration-free-vector.jpg";
// import CivilBackground from "assets/images/bg/city-seamless-pattern_100478-1292.jpg";

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
          // backgroundImage: index < 2 ? { CSBackground } : { CivilBackground },
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

              <IconButton aria-label="go to button">
                <OpenInNewIcon
                  fontSize="small"
                  className="link-official-website"
                  onClick={() => openInNewTab(experience["official_website"])}
                />
              </IconButton>
            </h1>
            <h2>{experience["title"]}</h2>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="description"
              >
                <b>Description</b>
              </AccordionSummary>
              <AccordionDetails>
                <ul>
                  {experience["description"].map((desc) => {
                    return <li key={desc}>{desc}</li>;
                  })}
                </ul>
              </AccordionDetails>
            </Accordion>
            {experience["projects"] && (
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="key projects"
                >
                  <b>Key Projects</b>
                </AccordionSummary>
                <AccordionDetails>
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
                </AccordionDetails>
              </Accordion>
            )}
          </DetailsContainer>
        </Zoom>
      </Grid>
    </Grid>
  );
};

export default ExperienceCard;
